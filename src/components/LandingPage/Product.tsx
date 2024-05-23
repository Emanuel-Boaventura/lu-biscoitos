import cookie1 from '@/public/cookie-1.jpg'
import cookie2 from '@/public/cookie-2.jpg'
import cookie3 from '@/public/cookie-3.jpg'
import Image from 'next/image'
import { useState } from 'react'

const allCookies = [
  {
    src: cookie1,
    name: 'Casadinho',
    description:
      'Biscoito de maisena com recheio de goiabada e refogado no açúcar refinado. Existe também a opção de recheio de doce de leite.',
  },
  {
    src: cookie2,
    name: 'Nata',
    description:
      'Biscoito de maisena crocante com açúcar caramelizado por cima.',
  },
  {
    src: cookie3,
    name: 'Doce de Leite',
    description:
      'Biscoito de maisena feito com doce de leite. Macio e derrete na boca',
  },
  {
    src: cookie3,
    name: 'Coco',
    description:
      'Biscoito de macio com lascas de coco, derretendo na boca consegue sentir o sabor do coco fresco.',
  },
  {
    src: cookie3,
    name: 'Milho',
    description:
      'Biscoito de feito com erva doce, crocante e com o sabor do milho fresco.',
  },
  {
    src: cookie3,
    name: 'Francisquito',
    description:
      'Biscoito de leve e crocante e açucarado, chegando a derreter na boca depois das primeiras mordidas',
  },
  {
    src: cookie3,
    name: 'Amanteigado',
    description:
      'Biscoito de maisena crocante e açucarado, refogado com açúcar e canela deixa um sabor marcante na boca.',
  },
]

export default function Product() {
  const [images, setImages] = useState(allCookies)

  return (
    <section id='biscuits' className='flex bg-default-100 text-default-950'>
      <div className='max-container /sm:flex-row flex flex-col items-center justify-between py-10'>
        <h1 className='mb-5 text-3xl font-bold tracking-wider sm:text-4xl'>
          Diversos Sabores
        </h1>

        <div className='flex flex-wrap justify-center gap-4 '>
          {images.map(({ description, name, src }) => (
            <div
              key={name}
              className='flex max-w-3xl flex-col gap-2 rounded-3xl bg-default-600 p-4 text-center transition-transform duration-300 hover:scale-110 md:flex-row md:items-center md:gap-16 md:even:flex-row-reverse min-[1440px]:max-w-[560px] min-[1440px]:gap-4 min-[1440px]:even:flex-row min-[1440px]:hover:scale-105'
            >
              <Image
                src={src}
                alt={'Biscoito ' + name}
                className='max-h-48 rounded-xl object-cover md:max-h-60 md:max-w-[260px]'
              />
              <div>
                <h3 className='mb-2 text-2xl font-bold text-default-50 md:text-3xl'>
                  {name}
                </h3>

                <p className='text-lg font-medium text-default-50'>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
