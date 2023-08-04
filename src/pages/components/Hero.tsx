import Image from 'next/image'
import hero from '@/public/hero-cookies.jpg'

export default function Hero() {
  return (
    <section className='flex bg-default-600'>
      <div className='max-container flex flex-col sm:flex-row justify-between items-center py-10'>
        <div className='flexflex-col'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-5 tracking-wider'>
            Biscoitos da Lu
          </h1>

          <p className='text-sm sm:text-base w-4/5 mb-10'>
            Nossos biscoitos caseiros são irresistíveis! Feitos com ingredientes
            selecionados e muita dedicação, possuem um sabor inigualável. Temos
            uma ampla variedade de sabores para agradar todos os paladares. O
            melhor de tudo? São feitos com amor. Experimente essa delícia única!
          </p>

          <a href='#form' className='default-button !text-default-900 flex'>
            Pedir agora!
          </a>
        </div>

        <Image
          src={hero}
          alt='Cookies'
          quality={100}
          className='object-contain sm:w-[20rem] sm:rounded-3xl hover:scale-[1.01] transition-transform hidden sm:flex'
        />
      </div>
    </section>
  )
}
