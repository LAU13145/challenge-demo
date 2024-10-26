'use client'

import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { Input } from '@nextui-org/react'
import { useState } from 'react'

const classNames = {
  label: 'text-black dark:text-black',
  input: ['bg-white text-black dark:text-black placeholder:text-gray-600 dark:placeholder:text-gray-600'],
  innerWrapper: 'bg-white',
  inputWrapper: [
    'w-[274px] md:w-[360px] xl:w-[460px] shadow-lg rounded-lg border border-gray-600 bg-white dark:bg-white backdrop-blur-xl backdrop-saturate-200 hover:bg-white dark:hover:bg-white group-data-[focus=true]:bg-white dark:group-data-[focus=true]:bg-white !cursor-text',
  ],
}

export const CustomInput = () => {
  const [value, setValue] = useState('')

  return (
    <Input
      type='email'
      label='Email'
      placeholder='Ingresa tu correo'
      isRequired
      labelPlacement='outside-left'
      className='border border-blue-200 rounded-lg shadow-lg md:w-2/3 md:mx-auto p-4 flex justify-center items-center bg-[#f1f7ff]'
      size='lg'
      startContent={<EnvelopeIcon className='h-6 w-6 text-sm text-gray-500 pointer-events-none' />}
      isInvalid={true}
      errorMessage='Ingresa un correo válido'
      value={value}
      onValueChange={setValue}
      classNames={classNames}
    />
  )
}
