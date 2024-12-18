'use client'

import Image from 'next/image'
import { friendWelcome } from '../assets'
import { regEmail, regPassword } from '../utils'
import { BottomNavigation, CustomInput } from '../components'
import { setAmount, useAppDispatch, useAppSelector } from '../redux'
import { useAppPage } from '../hooks'
import { EnvelopeIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Home() {
  const [isInvalid, setIsInvalid] = useState(false)

  const amount = useAppSelector((state) => state.amount)

  const dispatch = useAppDispatch()

  const { enableButton, handleContinue } = useAppPage()

  return (
    <div className='flex flex-col xl:flex-row items-center gap-4 mt-20 justify-between'>
      <Image src={friendWelcome} alt='Header Logo' height={120} width={120} className='md:w-40 xl:w-64' />

      <section className='flex flex-col'>
        <section className='shadow-lg flex flex-col border border-blue-200 bg-[#f1f7ff] rounded-lg p-2 md:p-6 '>
          <h1 className='text-greyscale500 text-base font-bold text-center md:text-xl xl:text-2xl'>Inicia sesión</h1>

          <CustomInput
            label={'Email'}
            className={'p-2 flex justify-end items-center'}
            icon={<EnvelopeIcon className='h-6 w-6 text-sm text-gray-500 pointer-events-none' />}
            isInvalid={isInvalid}
            setIsInvalid={setIsInvalid}
            minLength={6}
            maxLength={20}
            placeholder={'Ingresa tu correo'}
            value={amount.email}
            setValue={(value) => dispatch(setAmount({ email: value }))}
            regex={regEmail}
            errorMessage={'Ingresa un correo válido'}
            type={'email'}
          />

          <CustomInput
            className={'p-2 flex justify-end items-center'}
            label={'Contraseña'}
            icon={<PencilSquareIcon className='h-6 w-6 text-sm text-gray-500 pointer-events-none' />}
            isInvalid={isInvalid}
            setIsInvalid={setIsInvalid}
            minLength={8}
            maxLength={20}
            placeholder={'Ingresa tu contraseña'}
            value={amount.password}
            setValue={(value) => dispatch(setAmount({ password: value }))}
            regex={regPassword}
            errorMessage={'Mínimo 8 caracteres (número, letra, caracter especial)'}
            type={'password'}
          />

          <BottomNavigation disableButtonContinue={!enableButton()} handleContinue={handleContinue} text={'Ingresar'} className={'md:h-12'} />
        </section>
      </section>
    </div>
  )
}
