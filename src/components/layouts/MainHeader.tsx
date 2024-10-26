import { bcscImg } from '@/src/assets'
import Image from 'next/image'

export const MainHeader = () => {
  return (
    <>
      <header className='flex flex-col'>
        <div className='flex justify-center gap-4 items-center m-4'>
          <Image src={bcscImg} alt='Header Logo' height={40} width={40} />
          <h1 className='text-slate-800 text-base text-center md:text-xl font-bold md:tracking-wide md:w-80'>Simulador de Certificados de Depósito a Término</h1>
        </div>

        <div className='h-[1px] bg-[#e8ebee] md:-mx-12 xl:-mx-24 shadow-lg' />
      </header>
    </>
  )
}
