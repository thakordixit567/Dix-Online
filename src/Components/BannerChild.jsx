import React from 'react'

const BannerChild = () => {
  return (
    <section className='w-full mx-auto flex pt-12 md:pt-0 md:items-center bg-cover bg-right' 
    style={{
      maxWidth: '1600px',
      height: '30rem',
      backgroundImage: "url('https://img.freepik.com/free-photo/friends-family-making-videocall-catching-up_23-2149019120.jpg?w=740&t=st=1718267344~exp=1718267944~hmac=42e715dca53a4fc37f70876a872f59e6c54b8f5b5e7904044932b5760d2d4590')"
    }}>
    <div className=' container mx-auto'>
      <div className=' flex flex-col w-full lg:w-1/2 justify-center items-start px-6 tracking-wide'>
      <h1 className=' text-2xl font-semibold text-white my-4 font-fortext'>Best In The Class</h1>
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