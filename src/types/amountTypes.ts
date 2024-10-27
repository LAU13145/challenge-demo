export interface AmountStateType {
  email: string
  password: string
  amount: string
}

export interface DaysRange {
  min?: number
  max?: number
  total?: number
}

export interface Feature {
  days: DaysRange
  fee: number
}

export interface AmountData {
  id: number
  min: number
  max: number | string
  name?: string
  features: Feature[]
}

export interface TotalData {
  amountOne: AmountData
  amountTwo: AmountData
  amountThree: AmountData
  amountFour: AmountData
  amountFive: AmountData
  amountSix: AmountData
}
