import Image from 'next/image'
import hero from '@/public/hero-cookies.jpg'
import useMediaQuery from '@/hooks/useMediaQuery'

export default function Hero() {
  const mobile = useMediaQuery('(max-width: 768px)')

  return (
    <section className='flex bg-default-600'>
      <div className='max-container flex flex-col sm:flex-row justify-between items-center py-10'>
        <div className='flex flex-col  items-center sm:items-start'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-5 tracking-wider'>
            Biscoitos da Lu
          </h1>

          <p className='text-sm sm:text-base text-center sm:text-left sm:w-[90%] mb-5 sm:mb-10 flex'>
            {mobile
              ? 'Biscoitos caseiros irresistíveis! Temos uma ampla variedade de sabores para todos os paladares. E melhor de tudo, são feitos com amor. Experimente essa delícia única!'
              : 'Nossos biscoitos caseiros são irresistíveis! Feitos com ingredientes selecionados e muita dedicação, possuem um sabor inigualável. Temos uma ampla variedade de sabores para agradar todos os paladares. O melhor de tudo? São feitos com amor. Experimente essa delícia única!'}
          </p>

          <a href='#form' className='default-button !text-default-900 flex'>
            Pedir agora!
          </a>
        </div>

        <Image
          src={hero}
          alt='Cookies'
          quality={100}
          className='object-contain sm:w-[15rem] lg:w-[20rem] sm:rounded-3xl hover:scale-[1.01] transition-transform hidden sm:flex'
        />
      </div>
    </section>
  )
}
