'use client'

import { useAppPage } from '@/src/hooks'
import { useAppSelector } from '@/src/redux'
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
  const amount = useAppSelector((state) => state.amount)

  const { min, max, data } = useAppPage()

  const validateRange = () => {
    const minValue = min?.[Number(amount.period) - 1]
    const maxValue = max?.[Number(amount.period) - 1]

    return minValue !== undefined && maxValue !== undefined && Number(value) >= minValue && Number(value) <= maxValue
  }

  const validateEmail = (value: string) => value.match(regex)

  const validateAmount = () => {
    if (amount.amount === '') return false

    const minValue = data.map((item) => item.min)?.[Number(amount.amount) - 1]
    const maxValue = data.map((item) => Number(item.max))?.[Number(amount.amount) - 1]

    const result = Number(value) >= Number(minValue) && Number(value) <= Number(maxValue)
    console.log({ minValue })
    console.log({ maxValue })
    return result
  }

  console.log({ isInvalid })

  const handleBlur = () => {
    if (value !== '' || validateAmount() || validateEmail(value) || validateRange()) {
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
