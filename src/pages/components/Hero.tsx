import Image from 'next/image'
import hero from '@/public/hero-cookies.jpg'

export default function Hero() {
  return (
    <section className='flex bg-default-600'>
      <div className='max-container flex justify-between items-center py-10'>
        <div className='flex flex-col'>
          <h1 className='text-4xl font-bold mb-5 tracking-wider'>
            Biscoitos da Lu
          </h1>

          <p className='w-4/5 mb-10'>
            Nossos biscoitos caseiros são irresistíveis! Feitos com ingredientes
            selecionados e muita dedicação, possuem um sabor inigualável. Temos
            uma ampla variedade de sabores para agradar todos os paladares. O
            melhor de tudo? São feitos com amor. Experimente essa delícia única!
          </p>

          <a href='#form' className='default-button !text-default-900'>
            Pedir agora!
          </a>
        </div>

        <Image
          src={hero}
          alt='Cookies'
          quality={100}
          className='object-contain w-[20rem] rounded-3xl hover:scale-[1.01] transition-transform'
        />
      </div>
    </section>
  )
}
