import React from 'react'

const BannerChild = () => {
  return (
    <section className='w-full mx-auto flex pt-12 md:pt-0 md:items-center bg-cover bg-right' 
    style={{
      maxWidth: '1600px',
      height: '32rem',
      backgroundImage: "url('https://cdn.wedevs.com/uploads/2020/06/Free-online-meeting-tools_-Which-One-to-Choose-and-Why.png')"
    }}>
    <div className=' container mx-auto'>
      <div className=' flex flex-col w-full lg:w-1/2 justify-center items-start px-6 tracking-wide'>
      <h1 className=' text-2xl font-bold text-black my-4 font-fortext'>Best In The Class</h1>
      <a href="#" 
      className=' text-xl text-white inline-block no-underline  border-b border-gray-600 leading-relaxed hover:text-indigo-500  hover:border-black mb-2'>
      Watch Preview
      </a>
      </div>
    </div>
    </section>
  )
}

export default BannerChild