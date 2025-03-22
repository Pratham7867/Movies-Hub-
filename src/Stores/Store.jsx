import { configureStore } from '@reduxjs/toolkit'
import { movieSlice } from './reducers/MoviesSlice'
import { tvSlice } from './reducers/TvSlice'
import { personSlice } from './reducers/PersonSlice'

export default configureStore({
  reducer: {
    movie:movieSlice,
    tv:tvSlice,
    person:personSlice
  }
})