import { AmountStateType } from '@/src/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const defaultState: AmountStateType = {
  email: '',
  password: '',
  amount: '',
}

const initialState: AmountStateType = (() => {
  if (typeof window === 'undefined') return defaultState

  const persistedState = sessionStorage.getItem('__redux__state__')
  if (persistedState) return JSON.parse(persistedState).amount

  return defaultState
})()

export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    resetAmount: () => defaultState,

    setAmount: (state, action: PayloadAction<Partial<AmountStateType>>) => {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
})

export const { resetAmount, setAmount } = amountSlice.actions

export default amountSlice.reducer
