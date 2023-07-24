import { useMemo } from "react";
import { IData } from "../model";
import { useAppSelector } from "./redux";

export const useSort = () => {

  const { data, sort } = useAppSelector(state => state.dataReducer)

  const sortedArr = useMemo(() => {

    if (sort === 'id') {
      return [...data].sort((a: any, b: any) => a.id < b.id ? 1 : -1)
    } else if (sort === 'title') {
      return [...data].sort((a: any, b: any) => a.title > b.title ? 1 : -1)
    } else if (sort === 'body') {
      return [...data].sort((a: any, b: any) => a.body > b.body ? 1 : -1)
    }
    else return data

  }, [sort, data])

  return sortedArr
}

export const useData = (query: string) => {

  const sortedData = useSort()

  const sortedAndSearchedData = useMemo(() => {
    return [...sortedData.filter(data => data.title.toLowerCase().includes(query.toLowerCase()))]
  }, [query, sortedData])
  return sortedAndSearchedData
}