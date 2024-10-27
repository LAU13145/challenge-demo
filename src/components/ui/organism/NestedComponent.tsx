'use client'

import { amountData } from '@/src/mocks/data'
import { DropDown } from '../molecules'
import { setAmount, useAppDispatch, useAppSelector } from '@/src/redux'
import { formattedNum } from '@/src/utils'

export const NestedComponent = () => {
  const amount = useAppSelector((state) => state.amount)

  const dispatch = useAppDispatch()

  // console.log('data1 Min', amountData[0].amountOne.features[0].days.min)
  // console.log('data1 Max', data[0].amountOne.features[0].days.max)

  const data = amountData.map((item) => {
    const { id, min, max, features } = item

    return {
      id,
      min,
      max,
      name: `${formattedNum(min.toString())} - ${formattedNum(max.toString())}`,
      features,
    }
  })

  const findId = amountData.find((amount: any) => amount.id === Number(amount.amount))
  const valueSelected = amount.amount !== '' ? findId : 'Selecciona un monto'

  return (
    <div>
      <DropDown
        dOptions={data}
        dValue={valueSelected}
        dHtmlFor='monto'
        dOnChange={(e: any) => {
          dispatch(setAmount({ amount: e.target.value }))
        }}
        dLabelText='Monto'
      />

      <DropDown
        dOptions={data}
        dValue={valueSelected}
        dHtmlFor='plazo'
        dOnChange={(e: any) => {
          dispatch(setAmount({ amount: e.target.value }))
        }}
        dLabelText='Plazo en días'
      />
    </div>
  )
}
