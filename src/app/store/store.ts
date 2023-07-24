import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from './reducers/DataSlise'
import pageReducer from './reducers/PageSlice'

const rootReducer = combineReducers({
  dataReducer,
  pageReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']