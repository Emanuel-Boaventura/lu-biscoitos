import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

interface IImageCarousel {
  images: {
    src: StaticImageData
    name: string
    description: string
  }[]
}

const ImageCarousel = ({ images }: IImageCarousel) => {
  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <div className='embla overflow-hidden' ref={emblaRef}>
      <div className='embla__container flex'>
        {images.map(image => (
          <div
            key={image.description}
            className='embla__slide mr-[1px] min-w-0 flex-[0_0_100%] cursor-pointer'
          >
            <div className='grid grid-cols-1 sm:grid-cols-[3fr_7fr] sm:gap-6 lg:gap-10'>
              <div className='mb-4 flex items-center justify-center border-4 border-white sm:mb-0'>
                <Image
                  src={image.src}
                  alt='Carousel'
                  className='h-28 object-cover sm:h-44 lg:h-72'
                />
              </div>

              <div className='text-center sm:my-auto sm:text-start'>
                <p className='mb-1 text-lg font-bold sm:text-xl lg:text-2xl'>
                  {image.name}
                </p>
                <p>{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
