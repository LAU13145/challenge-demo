'use client'

import { data } from '@/src/mocks/data'
import { DropDown } from '../molecules'
import { useState } from 'react'

export const NestedComponent = () => {
  const [amount, setamount] = useState('')

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

  const findId = amountConcatenated.find((amount: any) => amount.id === Number(amount))
  const valueSelected = amount !== '' ? findId : 'Selecciona un monto'

  return (
    <div>
      <DropDown
        dOptions={amountConcatenated}
        dValue={valueSelected}
        dHtmlFor='monto'
        dOnChange={(e: any) => {
          setamount(e.target.value)
        }}
        dLabelText='Monto'
      />
    </div>
  )
}
