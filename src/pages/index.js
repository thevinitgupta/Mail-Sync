import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Email from '../../emails/job'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className=''><h1 className="text-6xl text-center max-w-lg font-bold leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-cyan-400">Mail Synk</h1>
      <h2 className='text-center text-5xl font-heading font-extrabold'>Email Superpowered</h2></div>
    </main>
  )
}
