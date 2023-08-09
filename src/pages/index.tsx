import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import { useState } from 'react'
import Product from './components/Product'

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <main className='flex flex-col w-full text-default-10'>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Header setOpenMenu={setOpenMenu} />
      <Hero />
      <Product />
      <div className='flex bg-default-800'>
        <p>Contact</p>
      </div>
      <div className='flex bg-default-950'>
        <p>Footer</p>
      </div>
    </main>
  )
}
