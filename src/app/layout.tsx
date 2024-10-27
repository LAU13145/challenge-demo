import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { MainFooter, MainHeader } from '../components'
import { Providers } from '../redux'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Simulador CDT',
  description: 'Simulador de Certificados de Depósito a Término (CDT)',
  keywords: ['Banco caja social', 'CDT', 'Certificados de Depósito a Término', 'Inversión', 'Rendimiento', 'Entidad Financiera'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <main
            className=' mx-auto grid w-full max-w-[1920px] grid-cols-4 gap-2 bg-white px-4 pt-3 md:grid-cols-6 md:gap-4 md:px-12 xl:grid-cols-12 xl:gap-6 xl:px-24'
            data-testid={'main-layout'}>
            <div className='col-span-4 md:col-span-6 xl:col-span-12 justify-between flex flex-col min-h-screen'>
              <div>
                <MainHeader />
                <div className='md:px-4 xl:px-4'>{children}</div>
              </div>
              <MainFooter />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
