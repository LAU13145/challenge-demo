'use client'

import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { Input } from '@nextui-org/react'
import { useState } from 'react'

const classNames = {
  label: 'text-black/50 dark:text-white/90',
  input: ['bg-transparent', 'text-black/90 dark:text-white/90', 'placeholder:text-default-700/50 dark:placeholder:text-white/60'],
  innerWrapper: 'bg-transparent',
  inputWrapper: [
    'shadow-xl',
    'bg-default-200/50',
    'dark:bg-default/60',
    'backdrop-blur-xl',
    'backdrop-saturate-200',
    'hover:bg-default-200/70',
    'dark:hover:bg-default/70',
    'group-data-[focus=true]:bg-default-200/50',
    'dark:group-data-[focus=true]:bg-default/60',
    '!cursor-text',
  ],
}

export const CustomInput = () => {
  const [value, setValue] = useState('')

  return (
    <Input
      type='email'
      label='Email'
      placeholder='Enter your email'
      isRequired
      isClearable
      onClear={() => console.log('input cleared')}
      startContent={<EnvelopeIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />}
      isInvalid={true}
      errorMessage='Please enter a valid email'
      value={value}
      onValueChange={setValue}
      classNames={classNames}
    />
  )
}
