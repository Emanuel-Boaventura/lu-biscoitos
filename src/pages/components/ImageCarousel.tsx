import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

interface IImageCarousel {
  images: {
    src: StaticImageData
    description: string
  }[]
}

const ImageCarousel = ({ images }: IImageCarousel) => {
  const [emblaRef] = useEmblaCarousel()
  return (
    <div className='relative'>
      <div className='max-w-[76rem] overflow-hidden relative'>
        <div className='embla' ref={emblaRef}>
          <div className='embla__container'>
            {images.map(image => (
              <div
                key={image.description}
                className='embla__slide flex justify-between gap-8 items-center'
              >
                <div className='flex w-[70px] items-center justify-center border-white border-4'>
                  <Image
                    src={image.src}
                    alt='Carousel'
                    className='object-contain h-10'
                  />
                  <p className=''>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel
