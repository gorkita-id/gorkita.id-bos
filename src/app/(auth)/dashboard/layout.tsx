import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GorKita.id',
  description: 'Back-office management system',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body data-theme="hopetheme" className={`${inter.className}`}>
            <Header />
            <main className="m-auto grid grid-cols-12 gap-4 min-h-screen">
              <section className='md:col-span-3'>
                <Sidebar />
              </section>
              <section className='md:col-span-9 col-span-12'>
                <div className="bg-base-200 relative h-64">
                  <article className="max-w-full text-left p-6 z-10 text-white absolute">
                    <h1 className="text-5xl font-bold">Hello there!</h1>
                    <p className="py-6">We are on a mission to help developers like you to build beautiful projects for free.</p>
                  </article>
                  <Image 
                      src="/background-side.png"
                      alt="Hero Background"
                      fill
                      className="object-cover relative z-0 rounded-b-2xl"
                  />
                </div>
                {children}
              </section>
            </main>
        </body>
    </html>
  )
}
