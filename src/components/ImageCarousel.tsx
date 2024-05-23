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
            className='embla__slide flex-[0_0_100%] min-w-0 mr-[1px] cursor-pointer'
          >
            <div className='grid grid-cols-1 sm:grid-cols-[3fr_7fr] sm:gap-6 lg:gap-10'>
              <div className='flex items-center justify-center border-white border-4 mb-4 sm:mb-0'>
                <Image
                  src={image.src}
                  alt='Carousel'
                  className='object-cover h-28 sm:h-44 lg:h-72'
                />
              </div>

              <div className='text-center sm:text-start sm:my-auto'>
                <p className='font-bold text-lg mb-1 sm:text-xl lg:text-2xl'>
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
