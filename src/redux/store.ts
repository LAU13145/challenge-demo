import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { amountSlice } from './features/amountSlice'

export const store = configureStore({
  reducer: {
    amount: amountSlice.reducer,
  },
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
