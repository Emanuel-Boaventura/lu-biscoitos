import { useState } from 'react'
import Contact from '../components/LandingPage/Contact'
import Footer from '../components/LandingPage/Footer'
import Header from '../components/LandingPage/Header'
import Hero from '../components/LandingPage/Hero'
import Product from '../components/LandingPage/Product'
import Menu from '../components/Menu'

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <main className='flex w-full flex-col text-default-10'>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Header setOpenMenu={setOpenMenu} />
      <Hero />
      <Product />
      <Contact />
      <Footer />
    </main>
  )
}
