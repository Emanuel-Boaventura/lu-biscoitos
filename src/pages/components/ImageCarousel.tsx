import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

interface IImageCarousel {
  images: {
    src: StaticImageData
    description: string
  }[]
}

const ImageCarousel = ({ images }: IImageCarousel) => {
  const [current, setCurrent] = useState(0)

  const nextImage = () => {
    setCurrent(prevState =>
      prevState === images.length - 1 ? 0 : prevState + 1
    )
  }

  const prevImage = () => {
    setCurrent(prevState =>
      prevState === 0 ? images.length - 1 : prevState - 1
    )
  }

  return (
    <div className='relative'>
      <div className='max-w-[76rem] overflow-hidden relative'>
        <div className='flex w-fit'>
          {images.map(image => (
            <div
              key={image.description}
              className={`grid grid-cols-[240px_1fr] justify-between w-[46.5rem] lg:w-[76rem] gap-8 items-center `}
              style={{
                transform: `translateX(-${current * 100}%)`,
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <div className='flex  items-center w-60 h-72 justify-center border-white border-4'>
                <Image
                  src={image.src}
                  alt='Carousel'
                  className='w-full object-contain'
                />
              </div>

              <p>{image.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevImage}
        className='text-white absolute top-1/2 -translate-y-1/2 -left-[3rem] no-animation'
      >
        <CaretLeft size={32} />
      </button>
      <button
        onClick={nextImage}
        className='text-white absolute top-1/2 -translate-y-1/2 -right-[3rem] no-animation'
      >
        <CaretRight size={32} />
      </button>
    </div>
  )
}

export default ImageCarousel
