import useMediaQuery from '@/hooks/useMediaQuery'
import hero from '@/public/og.png'
import Image from 'next/image'

export default function Hero() {
  const mobile = useMediaQuery('(max-width: 768px)')

  return (
    <section className='flex bg-default-600'>
      <div className='max-container flex flex-col items-center justify-between py-10 sm:flex-row'>
        <div className='flex flex-col  items-center sm:items-start'>
          <h1 className='mb-5 text-3xl font-bold tracking-wider sm:text-4xl lg:text-5xl'>
            Biscoitos da Lu
          </h1>

          <div className='mb-5 flex h-[12rem] w-[12rem] items-center justify-center overflow-hidden rounded-full sm:hidden'>
            <Image
              src={hero}
              alt='Logo'
              quality={100}
              className='flex h-[13rem] object-cover'
            />
          </div>

          <p className='mb-5 flex text-center text-sm sm:mb-10 sm:w-[90%] sm:text-left sm:text-base'>
            {mobile
              ? 'Biscoitos caseiros irresistíveis! Temos uma ampla variedade de sabores para todos os paladares. E melhor de tudo, são feitos com amor. Experimente essa delícia única!'
              : 'Nossos biscoitos caseiros são irresistíveis! Feitos com ingredientes selecionados e muita dedicação, possuem um sabor inigualável. Temos uma ampla variedade de sabores para agradar todos os paladares. O melhor de tudo? São feitos com amor. Experimente essa delícia única!'}
          </p>

          <a href='#contact' className='default-button flex !text-default-900'>
            Pedir agora!
          </a>
        </div>

        <div className='hidden items-center justify-center overflow-hidden transition-transform hover:scale-[1.025] sm:flex sm:max-h-[228px] sm:min-h-[228px] sm:min-w-[228px] sm:rounded-full lg:min-h-[360px] lg:min-w-[360px] '>
          <Image
            src={hero}
            alt='Logo'
            quality={100}
            className='flex object-cover sm:min-h-[240px] sm:min-w-[240px] lg:min-h-[380px] lg:min-w-[380px]'
          />
        </div>
      </div>
    </section>
  )
}
