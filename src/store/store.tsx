import { configureStore } from '@reduxjs/toolkit'
import { newsSlice } from './slices/newsSlice'
import { userSlice } from './slices/userSlice'

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
    userInfo: userSlice.reducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
