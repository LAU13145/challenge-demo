'use client'

import { useAppPage } from '@/src/hooks'
import { DropDown } from '../molecules'
import { setAmount, useAppDispatch, useAppSelector } from '@/src/redux'
import { CustomInput } from '../atoms'
import { regDay, regNumber } from '@/src/utils'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export const NestedComponent = () => {
  const [isInvalid, setIsInvalid] = useState(false)
  const [isInvalidDay, setIsInvalidDay] = useState(false)

  const amount = useAppSelector((state) => state.amount)

  const dispatch = useAppDispatch()

  const { data, selectedAmount, featuresData, selectedPeriod } = useAppPage()

  useEffect(() => {
    const feeValues = data.find((item) => item.id === Number(amount.amount))?.features.map((feature) => feature.fee)

    if (Number(amount.period) > 0 && feeValues && Number(amount.period) <= feeValues?.length) {
      const feeValue = feeValues[Number(amount.period) - 1]

      dispatch(setAmount({ fee: feeValue.toString() }))
    }
  }, [amount.period])

  return (
    <div>
      <DropDown
        dOptions={data}
        dValue={selectedAmount}
        dHtmlFor='monto'
        dOnChange={(e: any) => {
          dispatch(setAmount({ amount: e.target.value }))
          dispatch(setAmount({ amountSelected: '' }))
          dispatch(setAmount({ period: '' }))
          dispatch(setAmount({ daySelected: '' }))
          dispatch(setAmount({ fee: '' }))
        }}
        dLabelText='Rango de montos'
      />

      {amount.amount !== '' && (
        <DropDown
          dOptions={featuresData}
          dValue={selectedPeriod}
          dHtmlFor='period'
          dOnChange={(e: any) => {
            dispatch(setAmount({ period: e.target.value }))
            dispatch(setAmount({ daySelected: '' }))
          }}
          dLabelText='Periodo'
        />
      )}

      {amount.period !== '' && (
        <CustomInput
          className={'mt-6 flex items-center'}
          label={'Monto'}
          icon={<PencilSquareIcon className='h-6 w-6 text-sm text-gray-500 pointer-events-none' />}
          isInvalid={isInvalid}
          setIsInvalid={setIsInvalid}
          minLength={2}
          maxLength={3}
          placeholder={'Ingresa la cantidad del monto'}
          value={amount.amountSelected}
          setValue={(value) => dispatch(setAmount({ amountSelected: value }))}
          regex={regNumber}
          errorMessage={'El valor no está en el rango permitido'}
          type={'number'}
        />
      )}

      {amount.period !== '' && (
        <CustomInput
          className={'mt-6 flex items-center'}
          label={'Plazo en días'}
          icon={<PencilSquareIcon className='h-6 w-6 text-sm text-gray-500 pointer-events-none' />}
          isInvalid={isInvalidDay}
          setIsInvalid={setIsInvalidDay}
          minLength={2}
          maxLength={3}
          placeholder={'Ingresa la cantidad de días'}
          value={amount.daySelected}
          setValue={(value) => dispatch(setAmount({ daySelected: value }))}
          regex={regDay}
          errorMessage={'El valor no está en el rango permitido'}
          type={'number'}
        />
      )}

      {!isInvalid && (
        <>
          {amount.daySelected !== '' && (
            <div className='bg-[#f1f7ff] p-4 rounded-xl mt-8'>
              <h1 className='text-xl text-center font-bold text-blue-900'>
                Tu tasa fija de interés será de <strong>{amount.fee}</strong>%
              </h1>
            </div>
          )}
        </>
      )}
    </div>
  )
}
