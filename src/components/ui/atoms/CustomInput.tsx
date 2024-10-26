'use client'

import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { Input } from '@nextui-org/react'
import { useState } from 'react'

const classNames = {
  label: 'text-black dark:text-black',
  input: ['bg-transparent text-black dark:text-black placeholder:text-gray-600 dark:placeholder:text-gray-600'],
  innerWrapper: 'bg-transparent',
  inputWrapper: [
    'xl:w-[460px] shadow-lg bg-default-200/50 dark:bg-default/60 backdrop-blur-xl backdrop-saturate-200 hover:bg-default-200/70 dark:hover:bg-default/70 group-data-[focus=true]:bg-default-200/50 dark:group-data-[focus=true]:bg-default/60 !cursor-text',
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
      className='border border-gray-600 rounded-lg w-1/2 mx-auto shadow-lg'
      size='lg'
      // isClearable
      // onClear={() => console.log('input cleared')}
      startContent={<EnvelopeIcon className='h-6 w-6 text-sm text-gray-500 pointer-events-none' />}
      // isInvalid={true}
      // errorMessage='Please enter a valid email'
      // value={value}
      // onValueChange={setValue}
      classNames={classNames}
    />
  )
}
