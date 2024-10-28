'use client'

import { Input } from '@nextui-org/react'
import { Dispatch, ReactNode, SetStateAction } from 'react'

interface InputProps {
  errorMessage: string
  className: string
  icon: ReactNode
  label: string
  isInvalid: boolean
  setIsInvalid: Dispatch<SetStateAction<boolean>>
  minLength: number
  maxLength: number
  value: string | (readonly string[] & string)
  placeholder: string
  regex: RegExp
  setValue: ((value: string) => void) | undefined
  type: 'email' | 'text' | 'password' | 'number'
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

export const CustomInput = ({ errorMessage, className, label, icon, isInvalid, setIsInvalid, minLength, maxLength, placeholder, value, regex, setValue, type }: InputProps) => {
  const validateEmail = (value: string) => value.match(regex)

  const handleBlur = () => {
    if (value !== '' || validateEmail(value)) {
      setIsInvalid(false)
    } else setIsInvalid(true)
  }

  return (
    <Input
      className={className}
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
      startContent={icon}
      type={type}
      value={value}
    />
  )
}
