import { TotalData } from '../types'
import { AmountData } from '../types/amountTypes'

const data: TotalData = {
  amountOne: {
    id: 1,
    min: 500000,
    max: 9999999,
    name: '$500.000 - $9.999.999',
    features: [
      { id: 1, min: 60, max: 89, name: '60 - 89 días', fee: 0.7 },
      { id: 2, min: 90, max: 119, name: '90 - 119 días', fee: 9.35 },
      { id: 3, min: 120, max: 149, name: '120 - 149 días', fee: 9.35 },
      { id: 4, min: 150, max: 179, name: '150 - 179 días', fee: 9.35 },
      { id: 5, min: 180, max: 359, name: '180 - 359 días', fee: 10 },
      { id: 6, min: 360, max: 539, name: '360 - 539 días', fee: 9.25 },
      { id: 7, min: 540, name: '540 días', fee: 9.3 },
    ],
  },

  amountTwo: {
    id: 2,
    min: 10000000,
    max: 39999999,
    name: '$10.000.000 - $39.999.999',
    features: [
      { id: 1, min: 60, max: 89, name: '60 - 89 días', fee: 0.7 },
      { id: 2, min: 90, max: 119, name: '90 - 119 días', fee: 9.5 },
      { id: 3, min: 120, max: 149, name: '120 - 149 días', fee: 9.5 },
      { id: 4, min: 150, max: 179, name: '150 - 179 días', fee: 9.5 },
      { id: 5, min: 180, max: 359, name: '180 - 359 días', fee: 10.1 },
      { id: 6, min: 360, max: 539, name: '360 - 539 días', fee: 9.35 },
      { id: 7, min: 540, name: '540 días', fee: 9.4 },
    ],
  },

  amountThree: {
    id: 3,
    min: 40000000,
    max: 99999999,
    name: '$40.000.000 - $99.999.999',
    features: [
      { id: 1, min: 60, max: 89, name: '60 - 89 días', fee: 0.7 },
      { id: 2, min: 90, max: 119, name: '90 - 119 días', fee: 9.5 },
      { id: 3, min: 120, max: 149, name: '120 - 149 días', fee: 9.5 },
      { id: 4, min: 150, max: 179, name: '150 - 179 días', fee: 9.5 },
      { id: 5, min: 180, max: 359, name: '180 - 359 días', fee: 10.1 },
      { id: 6, min: 360, max: 539, name: '360 - 539 días', fee: 9.35 },
      { id: 7, min: 540, name: '540 días', fee: 9.4 },
    ],
  },

  amountFour: {
    id: 4,
    min: 100000000,
    max: 199999999,
    name: '$100.000.000 - $199.999.999',
    features: [
      { id: 1, min: 60, max: 89, name: '60 - 89 días', fee: 0.7 },
      { id: 2, min: 90, max: 119, name: '90 - 119 días', fee: 9.7 },
      { id: 3, min: 120, max: 149, name: '120 - 149 días', fee: 9.7 },
      { id: 4, min: 150, max: 179, name: '150 - 179 días', fee: 9.7 },
      { id: 5, min: 180, max: 359, name: '180 - 359 días', fee: 10.5 },
      { id: 6, min: 360, max: 539, name: '360 - 539 días', fee: 9.8 },
      { id: 7, min: 540, name: '540 días', fee: 9.85 },
    ],
  },

  amountFive: {
    id: 5,
    min: 200000000,
    max: 499999999,
    name: '$200.000.000 - $499.999.999',
    features: [
      { id: 1, min: 60, max: 89, name: '60 - 89 días', fee: 0.7 },
      { id: 2, min: 90, max: 119, name: '90 - 119 días', fee: 9.7 },
      { id: 3, min: 120, max: 149, name: '120 - 149 días', fee: 9.7 },
      { id: 4, min: 150, max: 179, name: '150 - 179 días', fee: 9.7 },
      { id: 5, min: 180, max: 359, name: '180 - 359 días', fee: 10.5 },
      { id: 6, min: 360, max: 539, name: '360 - 539 días', fee: 9.8 },
      { id: 7, min: 540, name: '540 días', fee: 9.85 },
    ],
  },

  amountSix: {
    id: 6,
    min: 500000000,
    max: 'adelante',
    name: '$500.000.000 en adelante',
    features: [
      { id: 1, min: 60, max: 89, name: '60 - 89 días', fee: 0.7 },
      { id: 2, min: 90, max: 119, name: '90 - 119 días', fee: 9.75 },
      { id: 3, min: 120, max: 149, name: '120 - 149 días', fee: 9.75 },
      { id: 4, min: 150, max: 179, name: '150 - 179 días', fee: 9.75 },
      { id: 5, min: 180, max: 359, name: '180 - 359 días', fee: 10.55 },
      { id: 6, min: 360, max: 539, name: '360 - 539 días', fee: 9.9 },
      { id: 7, min: 540, name: '540 días', fee: 9.95 },
    ],
  },
}
export const amountData: AmountData[] = Object.values(data)
