'use client'

import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { Input } from '@nextui-org/react'
import { useState } from 'react'

interface InputProps {
  value: string | (readonly string[] & string)
  regex: RegExp
  setValue: (value: string) => void
}

const classNames = {
  label: 'text-black dark:text-black',
  input: ['bg-white text-black dark:text-black placeholder:text-gray-600 dark:placeholder:text-gray-600'],
  innerWrapper: 'bg-white',
  inputWrapper: [
    'w-[274px] md:w-[360px] xl:w-[460px] shadow-lg rounded-lg border border-gray-600 bg-white dark:bg-white backdrop-blur-xl backdrop-saturate-200 hover:bg-white dark:hover:bg-white group-data-[focus=true]:bg-white dark:group-data-[focus=true]:bg-white !cursor-text',
  ],
}

export const CustomInput = ({ value, regex, setValue }: InputProps) => {
  const [isInvalid, setIsInvalid] = useState<boolean>(false)

  const validateEmail = (value: string) => value.match(regex)

  const handleBlur = () => {
    if (value === '' || !validateEmail(value)) setIsInvalid(true)
    else setIsInvalid(false)
  }

  return (
    <Input
      className='border border-blue-200 rounded-lg shadow-lg md:w-2/3 md:mx-auto p-4 flex justify-center items-center bg-[#f1f7ff]'
      classNames={classNames}
      color={isInvalid ? 'danger' : 'success'}
      errorMessage='Ingresa un correo válido'
      isInvalid={isInvalid}
      isRequired
      label='Email'
      labelPlacement='outside-left'
      onBlur={handleBlur}
      onValueChange={setValue}
      placeholder='Ingresa tu correo'
      size='lg'
      startContent={<EnvelopeIcon className='h-6 w-6 text-sm text-gray-500 pointer-events-none' />}
      type='email'
      value={value}
    />
  )
}
