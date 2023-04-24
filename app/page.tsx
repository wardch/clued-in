import Image from 'next/image'
import { Inter } from 'next/font/google'

export default function Home() {
  return (
    <main className="bg-slate-100 flex min-h-screen flex-col items-center p-4">
     <p className='text-black text-2xl'>Welcome to Clued In</p>
     <p className='text-black'>One daily crossword clue, three different difficulties</p>
    </main>
  )
}
