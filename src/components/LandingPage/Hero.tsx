import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image'
import hero from '@/public/hero-cookies.jpg'

export default function Hero() {
  const mobile = useMediaQuery('(max-width: 768px)')

  return (
    <section className='flex bg-default-600'>
      <div className='max-container flex flex-col items-center justify-between py-10 sm:flex-row'>
        <div className='flex flex-col  items-center sm:items-start'>
          <h1 className='mb-5 text-3xl font-bold tracking-wider sm:text-4xl'>
            Biscoitos da Lu
          </h1>

          <Image
            src={hero}
            alt='Cookies'
            quality={100}
            className='mb-5 flex h-[8rem] w-full rounded-3xl object-cover sm:hidden'
          />

          <p className='mb-5 flex text-center text-sm sm:mb-10 sm:w-[90%] sm:text-left sm:text-base'>
            {mobile
              ? 'Biscoitos caseiros irresistíveis! Temos uma ampla variedade de sabores para todos os paladares. E melhor de tudo, são feitos com amor. Experimente essa delícia única!'
              : 'Nossos biscoitos caseiros são irresistíveis! Feitos com ingredientes selecionados e muita dedicação, possuem um sabor inigualável. Temos uma ampla variedade de sabores para agradar todos os paladares. O melhor de tudo? São feitos com amor. Experimente essa delícia única!'}
          </p>

          <a href='#form' className='default-button flex !text-default-900'>
            Pedir agora!
          </a>
        </div>

        <Image
          src={hero}
          alt='Cookies'
          quality={100}
          className='hidden object-contain transition-transform hover:scale-[1.01] sm:flex sm:w-[15rem] sm:rounded-3xl lg:w-[20rem]'
        />
      </div>
    </section>
  )
}
