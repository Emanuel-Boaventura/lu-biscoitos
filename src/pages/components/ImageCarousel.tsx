import Image from 'next/image'
import React, { useState } from 'react'
import cookie1 from '@/public/cookie-1.jpg'
import cookie2 from '@/public/cookie-2.jpg'
import cookie3 from '@/public/cookie-3.jpg'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

const images = [
  {
    src: cookie1,
    description:
      'Biscoitos caseiros irresistíveis! Temos uma ampla variedade de sabores para todos os paladares. E melhor de tudo, são feitos com amor. Experimente essa delícia única!',
  },
  {
    src: cookie2,
    description:
      'Explore a mistura perfeita de texturas e sabores em nossos biscoitos de aveia e chocolate. Cada mordida combina crocância com indulgência de cacau, criando uma experiência única.',
  },
  {
    src: cookie3,
    description:
      'Experimente o sabor rico da manteiga em nossos biscoitos artesanais. Com uma casquinha crocante e interior macio, cada mordida oferece indulgência e conforto como nenhum outro.',
  },
]

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length)
  }

  return (
    <div className='relative grid grid-cols-[240px_1fr] justify-between w-[46.5rem] gap-8 items-center'>
      <div className='flex items-center w-60 h-72 justify-center border-white border-4 overflow-hidden'>
        <Image
          src={images[currentImage].src}
          alt='Carousel'
          className='w-full object-contain'
        />
      </div>

      <p>{images[currentImage].description}</p>

      {/* <a
        href='#form'
        className='default-button !bg-default-500 !text-default-50 flex'
      >
        Pedir agora!
      </a> */}

      <button
        onClick={prevImage}
        className='text-white absolute top-1/2 -translate-y-1/2 -left-[2rem] no-animation'
      >
        <CaretLeft size={32} />
      </button>
      <button
        onClick={nextImage}
        className='text-white absolute top-1/2 -translate-y-1/2 -right-[2rem] no-animation'
      >
        <CaretRight size={32} />
      </button>
    </div>
  )
}

export default ImageCarousel
