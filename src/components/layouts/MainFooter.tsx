import Image from 'next/image'
import { socialMediaLinks } from '@/src/utils'
import { bcscLogo } from '@/src/assets'

export const MainFooter = () => {
  return (
    <footer className='text-white sticky md:-mx-12 xl:-mx-24 bg-[#f1f7ff] border-t-[1px] border-[#e8ebee] p-4 flex flex-row justify-around items-center'>
      <figure className='mb-2 flex justify-center p-1'>
        <Image src={bcscLogo} alt='Header Logo' height={65} width={186} />
      </figure>

      <div className={`md:items-star flex flex-col items-center justify-center`}>
        <p className='mt-2text-sm font-bold text-[#0D2143]'>Síguenos en:</p>

        <div className='flex flex-row'>
          {socialMediaLinks.map((link, index) => (
            <figure key={index} className='p-1'>
              <Image src={link.src} alt={link.alt} className='mx-1 text-blue-400' height={18} width={18} />
            </figure>
          ))}
        </div>
      </div>
    </footer>
  )
}
