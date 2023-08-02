export default function Home() {
  return (
    <main className='flex flex-col w-full'>
      <div className='flex bg-slate-200'>
        <p>Header</p>
      </div>
      <div className='flex bg-slate-300'>
        <p>Hero</p>
      </div>
      <div className='flex bg-slate-100'>
        <p>Product</p>
      </div>
      <div className='flex bg-slate-900 text-white'>
        <p>Footer</p>
      </div>
    </main>
  )
}
