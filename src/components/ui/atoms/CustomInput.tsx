'use client'

import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { Input } from '@nextui-org/react'
import { useState } from 'react'

interface InputProps {
  errorMessage: string
  label: string
  minLength: number
  maxLength: number
  value: string | (readonly string[] & string)
  placeholder: string
  regex: RegExp
  setValue: ((value: string) => void) | undefined
  type: 'email' | 'text' | 'password'
}

const classNames = {
  label: 'text-black dark:text-black',
  input: ['bg-white text-black dark:text-black placeholder:text-gray-600 dark:placeholder:text-gray-600 border-none focus:ring-0', 'focus:border-none'],
  innerWrapper: 'bg-white',
  inputWrapper: [
    'w-[210px] md:w-[360px] xl:w-[460px] shadow-lg rounded-lg border border-gray-600 bg-white dark:bg-white backdrop-blur-xl backdrop-saturate-200 hover:bg-white dark:hover:bg-white group-data-[focus=true]:bg-white dark:group-data-[focus=true]:bg-white !cursor-text',
  ],
  helperWrapper: 'text-red-500',
}

export const CustomInput = ({ errorMessage, label, minLength, maxLength, placeholder, value, regex, setValue, type }: InputProps) => {
  const [isInvalid, setIsInvalid] = useState<boolean>(false)

  const validateEmail = (value: string) => value.match(regex)

  const handleBlur = () => {
    if (value === '' || !validateEmail(value)) setIsInvalid(true)
    else setIsInvalid(false)
  }

  return (
    <Input
      className='p-2 flex justify-end items-center'
      classNames={classNames}
      color={isInvalid ? 'danger' : 'success'}
      errorMessage={errorMessage}
      isInvalid={isInvalid}
      isRequired
      label={label}
      labelPlacement='outside-left'
      minLength={minLength}
      maxLength={maxLength}
      onBlur={handleBlur}
      onValueChange={setValue}
      placeholder={placeholder}
      size='lg'
      startContent={<EnvelopeIcon className='h-6 w-6 text-sm text-gray-500 pointer-events-none' />}
      type={type}
      value={value}
    />
  )
}
