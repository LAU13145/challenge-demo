'use client'

import Image from 'next/image'
import { friendWelcome } from '../assets'
import { useState } from 'react'
import { regEmail, regPassword } from '../utils'
import { BottomNavigation, CustomInput } from '../components'

export default function Home() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div className='flex flex-col xl:flex-row items-center gap-4 mt-24 justify-between'>
      <Image src={friendWelcome} alt='Header Logo' height={120} width={120} className='md:w-40 xl:w-64' />

      <section className='flex flex-col'>
        <section className='shadow-lg flex flex-col border border-blue-200 bg-[#f1f7ff] rounded-lg p-2 md:p-6 '>
          <h1 className='text-greyscale500 text-base font-bold text-center md:text-xl xl:text-2xl'>Inicia sesión</h1>

          <CustomInput
            label={'Email'}
            minLength={6}
            maxLength={20}
            placeholder={'Ingresa tu correo'}
            value={email}
            setValue={setEmail}
            regex={regEmail}
            errorMessage={'Ingresa un correo válido'}
            type={'email'}
          />
          <CustomInput
            label={'Contraseña'}
            minLength={8}
            maxLength={20}
            placeholder={'Ingresa tu contraseña'}
            value={password}
            setValue={setPassword}
            regex={regPassword}
            errorMessage={'Mínimo 8 caracteres (número, letra, caracter especial)'}
            type={'password'}
          />

          <BottomNavigation disableButtonContinue={false} handleContinue={() => {}} text={'Ingresar'} className={'md:h-12'} />
        </section>
      </section>
    </div>
  )
}
