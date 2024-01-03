import Image from 'next/image'
import { Inter } from 'next/font/google'
import AddUsers from './components/AddUsers'
import DisplayUsers from './components/DisplayUers'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
     <AddUsers />
     <DisplayUsers/> 
    </main>
  )
}
