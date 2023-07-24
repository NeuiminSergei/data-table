import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface PageState {
  totalPages: number
  currentPage: number
}

const initialState: PageState = {
  totalPages: 0,
  currentPage: 1
}

export const pageSlice = createSlice({
  name: 'Page',
  initialState,
  reducers: {

    setTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload
    },

    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    }

  }
})

export default pageSlice.reducer