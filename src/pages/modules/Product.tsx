import cookie1 from '@/public/cookie-1.jpg'
import cookie2 from '@/public/cookie-2.jpg'
import cookie3 from '@/public/cookie-3.jpg'
import { useState } from 'react'
import ImageCarousel from '../components/ImageCarousel'

export default function Product() {
  const [images, setImages] = useState([
    {
      src: cookie1,
      name: 'Cookie Tradicional',
      description:
        'Biscoitos caseiros irresistíveis! Temos uma ampla variedade de sabores para todos os paladares. E melhor de tudo, são feitos com amor. Experimente essa delícia única!',
    },
    {
      src: cookie2,
      name: 'Cookie Vegano',
      description:
        'Explore a mistura perfeita de texturas e sabores em nossos biscoitos de aveia e chocolate. Cada mordida combina crocância com indulgência de cacau, criando uma experiência única.',
    },
    {
      src: cookie3,
      name: 'Biscoito Natalino',
      description:
        'Experimente o sabor rico da manteiga em nossos biscoitos artesanais. Com uma casquinha crocante e interior macio, cada mordida oferece indulgência e conforto como nenhum outro.',
    },
  ])

  return (
    <section className='flex bg-default-100 text-default-950'>
      <div className='max-container flex flex-col /sm:flex-row justify-between items-center py-10'>
        <h1 className='text-3xl sm:text-4xl font-bold mb-5 tracking-wider'>
          Diversos Sabores
        </h1>

        <div className='flex flex-col  items-center sm:items-start'>
          <ImageCarousel images={images} />
        </div>
      </div>
    </section>
  )
}
