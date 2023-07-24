import axios from "axios";
import { AppDispatch } from "../store";
import { dataSlice } from "./DataSlise";
import { pageSlice } from "./PageSlice";
import { getPagesCount } from "@/app/utils/pages";

export const fetchData = (limit: number, page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(dataSlice.actions.dataFetching())
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page,
      }
    })
    const totalCount = response.headers['x-total-count']
    const totalPages = getPagesCount(totalCount, limit)
    dispatch(pageSlice.actions.setTotalPages(totalPages))
    dispatch(dataSlice.actions.dataFetchingSuccess(response.data))
  } catch (e: any) {
    dispatch(dataSlice.actions.dataFetchingError(e.message))
  }
}