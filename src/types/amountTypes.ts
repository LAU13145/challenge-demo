export interface AmountStateType {
  email: string
  password: string
  amount: string
}

export interface DayRange {
  min?: number
  max?: number
  total?: number
}

export interface Feature {
  days: DayRange
  fee: number
}

export interface AmountRange {
  id: number
  min: number
  max: number | string // Puede ser un número o el texto 'adelante'
  features: Feature[]
}

export interface feeTypes {
  amountOne: AmountRange
  amountTwo: AmountRange
  amountThree: AmountRange
  amountFour: AmountRange
  amountFive: AmountRange
  amountSix: AmountRange
}