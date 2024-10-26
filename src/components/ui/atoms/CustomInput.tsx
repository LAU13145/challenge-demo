import { Input } from '@nextui-org/react'

export const CustomInput = () => {
  return (
    <div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
      <Input type='email' label='Email' />
      <Input type='email' label='Email' placeholder='Enter your email' />
    </div>
  )
}
