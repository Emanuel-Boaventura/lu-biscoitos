export default function Contact() {
  return (
    <section id='contact' className='flex bg-default-800'>
      <div className='max-container flex flex-col items-center justify-between gap-4 py-10 text-center'>
        <h2 className='text-2xl font-bold lg:text-4xl'>Ficou interessado?</h2>

        <p className='lg:text-lg'>
          Entre em contato conosco pelo{' '}
          <a
            target='_blank'
            href='https://api.whatsapp.com/send?phone=65999029120'
            className='cursor-pointer hover:underline '
          >
            WhatsApp!
          </a>
        </p>
      </div>
    </section>
  )
}
