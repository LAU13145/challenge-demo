import Image from 'next/image'
import { friendWelcome } from '../assets'

export default function Home() {
  return (
    <div className='flex items-center'>
      <Image src={friendWelcome} alt='Header Logo' height={120} width={120} className='md:w-40 xl:w-56 mt-8' />
    </div>
  )
}
