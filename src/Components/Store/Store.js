import { configureStore } from '@reduxjs/toolkit'
import ResultSlice from './ResultSlice'

const store = configureStore({
  reducer: {
    result: ResultSlice,
  }
})

export default store