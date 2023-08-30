import Header from './modules/Header'
import Hero from './modules/Hero'
import Menu from './components/Menu'
import { useState } from 'react'
import Product from './modules/Product'
import Contact from './modules/Contact'

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <main className='flex flex-col w-full text-default-10'>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Header setOpenMenu={setOpenMenu} />
      <Hero />
      <Product />
      <Contact />
      <div className='flex bg-default-950'>
        <p>Footer</p>
      </div>
    </main>
  )
}
