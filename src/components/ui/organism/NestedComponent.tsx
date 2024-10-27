'use client'

import { data } from '@/src/mocks/data'
import { DropDown } from '../molecules'
import { setAmount, useAppDispatch, useAppSelector } from '@/src/redux'

export const NestedComponent = () => {
  const amount = useAppSelector((state) => state.amount)

  const dispatch = useAppDispatch()

  // console.log('data1 Min', data[0].amountOne.features[0].days.min)
  // console.log('data1 Max', data[0].amountOne.features[0].days.max)

  const amountConcatenated = data.map((item: any) => {
    const key = Object.keys(item)[0]
    const { id, min, max } = item[key]

    return {
      id,
      min,
      max,
      name: `$${min} - $${max}`,
    }
  })

  const findId = amountConcatenated.find((amount: any) => amount.id === Number(amount.amount))
  const valueSelected = amount.amount !== '' ? findId : 'Selecciona un monto'

  return (
    <div>
      <DropDown
        dOptions={amountConcatenated}
        dValue={valueSelected}
        dHtmlFor='monto'
        dOnChange={(e: any) => {
          dispatch(setAmount({ amount: e.target.value }))
        }}
        dLabelText='Monto'
      />

      <DropDown
        dOptions={amountConcatenated}
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
