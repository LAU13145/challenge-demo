import { aboutYou } from '@/src/assets'
import { NestedComponent } from '@/src/components'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Formulario CDT',
}

const FormPage = () => {
  return (
    <div>
      <figure className='mt-6 flex justify-center'>
        <Image src={aboutYou} alt='Header Logo' height={120} width={120} className='md:w-40 xl:w-56' />
      </figure>
      <h1 className='mt-4 text-greyscale500 font-bold text-center text-xl xl:text-2xl'>Ingresa los datos para simular tu CDT</h1>

      <NestedComponent />
    </div>
  )
}

export default FormPage
