export interface AmountStateType {
  email: string
  password: string
  amount: string
  amountSelected: string
  period: string
  daySelected: string
  fee: string
}

export interface FeatureType {
  id: number
  min: number
  max?: number
  fee: number
  name: string
}

export interface AmountData {
  id: number
  min: number
  max: number | string
  name: string
  features: FeatureType[]
}

export interface TotalData {
  amountOne: AmountData
  amountTwo: AmountData
  amountThree: AmountData
  amountFour: AmountData
  amountFive: AmountData
  amountSix: AmountData
}
