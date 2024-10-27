import { FeeTypes } from '../types'

export const data: FeeTypes = [
  {
    amountOne: {
      id: 1,
      min: 500000,
      max: 9999999,
      features: [
        { days: { min: 60, max: 89 }, fee: 0.7 },
        { days: { min: 90, max: 179 }, fee: 9.35 },
        { days: { min: 189, max: 359 }, fee: 10.0 },
        { days: { min: 360, max: 539 }, fee: 9.25 },
        { days: { total: 540 }, fee: 9.3 },
      ],
    },
  },

  {
    amountTwo: {
      id: 2,
      min: 10000000,
      max: 39999999,
      features: [
        { days: { min: 60, max: 89 }, fee: 0.7 },
        { days: { min: 90, max: 179 }, fee: 9.5 },
        { days: { min: 189, max: 359 }, fee: 10.1 },
        { days: { min: 360, max: 539 }, fee: 9.35 },
        { days: { total: 540 }, fee: 9.4 },
      ],
    },
  },

  {
    amountThree: {
      id: 3,
      min: 40000000,
      max: 99999999,
      features: [
        { days: { min: 60, max: 89 }, fee: 0.7 },
        { days: { min: 90, max: 179 }, fee: 9.5 },
        { days: { min: 189, max: 359 }, fee: 10.1 },
        { days: { min: 360, max: 539 }, fee: 9.35 },
        { days: { total: 540 }, fee: 9.4 },
      ],
    },
  },

  {
    amountFour: {
      id: 4,
      min: 100000000,
      max: 199999999,
      features: [
        { days: { min: 60, max: 89 }, fee: 0.7 },
        { days: { min: 90, max: 179 }, fee: 9.7 },
        { days: { min: 189, max: 359 }, fee: 10.5 },
        { days: { min: 360, max: 539 }, fee: 9.8 },
        { days: { total: 540 }, fee: 9.85 },
      ],
    },
  },

  {
    amountFive: {
      id: 5,
      min: 200000000,
      max: 499999999,
      features: [
        { days: { min: 60, max: 89 }, fee: 0.7 },
        { days: { min: 90, max: 179 }, fee: 9.7 },
        { days: { min: 189, max: 359 }, fee: 10.5 },
        { days: { min: 360, max: 539 }, fee: 9.8 },
        { days: { total: 540 }, fee: 9.85 },
      ],
    },
  },

  {
    amountSix: {
      id: 6,
      min: 500000000,
      max: 'adelante',
      features: [
        { days: { min: 60, max: 89 }, fee: 0.7 },
        { days: { min: 90, max: 179 }, fee: 9.75 },
        { days: { min: 189, max: 359 }, fee: 10.55 },
        { days: { min: 360, max: 539 }, fee: 9.9 },
        { days: { total: 540 }, fee: 9.95 },
      ],
    },
  },
]
