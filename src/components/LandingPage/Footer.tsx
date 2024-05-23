export default function Footer() {
  return (
    <section className='flex bg-default-950'>
      <div className='max-container flex justify-center py-4'>
        <p className='text-center'>
          Desenvolvido por:{' '}
          <a
            href='https://www.linkedin.com/in/emanuelboaventura/'
            target='_blank'
            className='cursor-pointer whitespace-nowrap text-default-50 hover:underline'
          >
            Emanuel-Boaventura
          </a>
        </p>
      </div>
    </section>
  )
}
