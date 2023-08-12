import ImageCarousel from '../components/ImageCarousel'

export default function Product() {
  return (
    <section className='flex bg-default-100 text-default-950'>
      <div className='max-container flex flex-col /sm:flex-row justify-between items-center py-10'>
        <h1 className='text-3xl sm:text-4xl font-bold mb-5 tracking-wider'>
          Diversos Sabores
        </h1>

        <div className='flex flex-col  items-center sm:items-start'>
          <ImageCarousel />
        </div>
      </div>
    </section>
  )
}
