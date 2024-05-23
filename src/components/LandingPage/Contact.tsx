import { title } from 'process'

const options = [
  {
    title: 'Saquinho',
    price: 'R$ 4,00',
  },
  {
    title: 'Pote 500ml',
    price: 'R$ 15,00',
  },
  {
    title: 'Pote 1000ml',
    price: 'R$ 28,00',
  },
]

export default function Contact() {
  return (
    <section id='contact' className='flex bg-default-800'>
      <div className='max-container flex flex-col items-center justify-between gap-8 py-10 text-center'>
        <h2 className='border-b text-3xl font-bold tracking-wider sm:text-4xl'>
          Valores
        </h2>

        <div className='flex flex-wrap justify-center gap-4'>
          {options.map(({ title, price }) => (
            <div
              key={title}
              className='flex w-40 flex-col gap-2 rounded-lg bg-default-600 p-4 transition-transform hover:scale-110 lg:w-48'
            >
              <h3 className='text-xl font-semibold lg:text-2xl'>{title}:</h3>
              <p className='mx-auto w-fit border-b text-lg lg:text-xl'>
                {price}
              </p>
            </div>
          ))}
        </div>

        <p className='-mt-4 text-sm'>Taxa de entrega: R$ 10,00</p>

        <p className='lg:text-lg'>
          Ficou interessado? Entre em contato conosco pelo{' '}
          <a
            target='_blank'
            href='https://api.whatsapp.com/send?phone=65981298243'
            className='cursor-pointer hover:underline '
          >
            WhatsApp!
          </a>
        </p>
      </div>
    </section>
  )
}
