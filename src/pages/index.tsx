import Header from './components/Header'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className='flex flex-col w-full text-default-10'>
      <Header />
      <Hero />
      <div className='flex bg-default-100 text-default-950'>
        <p>Product</p>
      </div>
      <div className='flex bg-default-800'>
        <p>Contact</p>
      </div>
      <div className='flex bg-default-950'>
        <p>Footer</p>
      </div>
    </main>
  )
}
