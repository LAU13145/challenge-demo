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

  const { data, selectedAmount, featuresData, selectedPeriod, min, max, validations } = useAppPage()

  const calculator = parseFloat(((Math.pow(1 + Number(amount.fee), Number(amount.daySelected) / 360) - 1) * Number(amount.amountSelected)).toFixed(6))
  const performanceCalc = Math.round(calculator).toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })

  const calculatorRTF = calculator * 0.04
  const RTFCalc = Math.round(calculatorRTF).toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })

  useEffect(() => {
    const feeValues = data.find((item) => item.id === Number(amount.amount))?.features.map((feature) => feature.fee)

    if (Number(amount.period) > 0 && feeValues && Number(amount.period) <= feeValues?.length) {
      const feeValue = feeValues[Number(amount.period) - 1]

      dispatch(setAmount({ fee: feeValue.toString() }))
    }
  }, [amount.period])

  useEffect(() => {
    if (amount.amountSelected !== '' || amount.daySelected !== '') {
      validations(setIsInvalid, setIsInvalidDay)
    }
  }, [amount, data, min, max])

  return (
    <form className='rounded-2xl border border-greyscale_200 p-4'>
      <div className='-mt-4 grid grid-cols-1 xl:grid-cols-2 xl:gap-x-6'>
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
          <CustomInput
            className={'mt-10 flex justify-end md:justify-center xl:justify-end'}
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

        {amount.amountSelected !== '' && (
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
            className={'mt-10 flex justify-end md:justify-center xl:justify-end'}
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
      </div>

      {!isInvalid && (
        <>
          {amount.daySelected !== '' && (
            <div className='bg-[#f1f7ff] p-4 rounded-xl mt-8 flex gap-6 text-xl text-center font-bold text-blue-900 flex-col'>
              <h1>
                Tu tasa fija de interés será de <strong>{amount.fee}</strong>%
              </h1>

              <h1>
                Tu rendimineto será <strong>{performanceCalc}</strong>
              </h1>

              <h1>
                Tu retención en la fuente será <strong>{RTFCalc}</strong>
              </h1>

              <h1></h1>
            </div>
          )}
        </>
      )}
    </form>
  )
}
