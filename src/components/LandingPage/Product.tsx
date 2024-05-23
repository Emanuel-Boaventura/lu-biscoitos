import amanteigado from '@/public/biscoitos/amanteigado.png'
import casadinho from '@/public/biscoitos/casadinho.png'
import coco from '@/public/biscoitos/coco.png'
import francisquito from '@/public/biscoitos/francisquito.png'
import leiteMoca from '@/public/biscoitos/leite-moca.png'
import milho from '@/public/biscoitos/milho.png'
import nata from '@/public/biscoitos/nata.png'
import Image from 'next/image'
import { useState } from 'react'

const allCookies = [
  {
    src: casadinho,
    name: 'Casadinho',
    description:
      'Biscoito de maisena com recheio de goiabada e refogado no açúcar refinado. Existe também a opção de recheio de doce de leite.',
  },
  {
    src: nata,
    name: 'Nata',
    description:
      'Biscoito de maisena crocante com açúcar caramelizado por cima.',
  },
  {
    src: leiteMoca,
    name: 'Leite Moça',
    description:
      'Biscoito de maisena feito com leite moça. Macio e derrete na boca',
  },
  {
    src: coco,
    name: 'Coco',
    description:
      'Biscoito de macio com lascas de coco, derretendo na boca consegue sentir o sabor do coco fresco.',
  },
  {
    src: milho,
    name: 'Milho',
    description:
      'Biscoito de feito com erva doce, crocante e com o sabor do milho fresco.',
  },
  {
    src: francisquito,
    name: 'Francisquito',
    description:
      'Biscoito de leve e crocante e açucarado, chegando a derreter na boca depois das primeiras mordidas',
  },
  {
    src: amanteigado,
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
              className='flex max-w-[272px] flex-col gap-2 rounded-3xl bg-default-600 p-4 text-center transition-transform duration-300 hover:scale-110 md:max-w-3xl md:flex-row md:items-center md:gap-16 md:even:flex-row-reverse min-[1440px]:max-w-[560px] min-[1440px]:gap-4 min-[1440px]:even:flex-row min-[1440px]:hover:scale-105'
            >
              <div className='flex max-h-56 items-center justify-center overflow-hidden rounded-xl object-cover md:max-h-60 md:max-w-[260px]'>
                <Image
                  src={src}
                  alt={'Biscoito ' + name}
                  className='object-cover pt-12'
                />
              </div>
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
