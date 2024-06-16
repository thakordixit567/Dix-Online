import React from 'react'

const BannerChild = () => {
  return (
    <section className='w-full mx-auto flex pt-12 md:pt-0 md:items-center bg-cover bg-right' 
    style={{
      maxWidth: '1600px',
      height: '32rem',
      backgroundImage: "url('/box/boxpro.png')",
    }}>
    <div className=' container mx-auto'>
      <div className=' flex flex-col w-full lg:w-1/2 justify-center items-start px-6 tracking-wide mr-4'>
      <h1 className=' text-7xl hover:text-yellow-500 text-left mb-6 font-bold text-green-700 my-4 font-fortext'>Best In The Class</h1>
      <a href="#" 
      className=' text-xl mb-24 text-black  inline-block no-underline  border-b border-gray-900 leading-relaxed hover:text-indigo-900  hover:border-black '>
      Watch Preview
      </a>
      </div>
    </div>
    </section>
  )
}

export default BannerChild