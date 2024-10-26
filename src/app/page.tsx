'use client'

import Image from 'next/image'
import { friendWelcome } from '../assets'
import { CustomInput } from '../components'
import { useState } from 'react'
import { regEmail } from '../utils'

export default function Home() {
  const [email, setEmail] = useState<string>('')

  return (
    <div className='flex flex-col xl:flex-row items-center gap-4 mt-20'>
      <Image src={friendWelcome} alt='Header Logo' height={120} width={120} className='md:w-40 xl:w-64' />

      <CustomInput value={email} setValue={setEmail} regex={regEmail} />
    </div>
  )
}
