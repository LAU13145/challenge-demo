export interface AmountStateType {
  email: string
  password: string
  amount: string
}

export interface FeeFeature {
  days: {
    min?: number
    max?: number
    total?: number
  }
  fee: number
}

export interface Amount {
  id: number
  min: number
  max: number | string // Aquí 'max' puede ser un número o la cadena 'adelante'
  features: FeeFeature[]
}

export type FeeTypes = Array<Record<string, Amount>>
