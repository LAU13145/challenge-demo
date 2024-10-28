import { AmountStateType } from '@/src/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: AmountStateType = {
  email: '',
  password: '',
  amount: '',
  amountSelected: '',
  period: '',
  daySelected: '',
  fee: '',
}

export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    resetAmount: () => initialState,

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
