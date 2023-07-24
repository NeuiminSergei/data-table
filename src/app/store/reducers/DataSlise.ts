import { IData } from "@/app/model"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface DataState {
  data: IData[]
  isLoading: boolean
  error: string
  sort: string
}

const initialState: DataState = {
  data: [],
  isLoading: false,
  error: '',
  sort: ''
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {

    dataFetching(state) {
      state.isLoading = true
    },

    dataFetchingSuccess(state, action: PayloadAction<IData[]>) {
      state.isLoading = false
      state.error = ''
      state.data = action.payload
    },

    dataFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
    },

    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload
    }
  }
})

export default dataSlice.reducer