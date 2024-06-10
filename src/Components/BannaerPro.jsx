import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from 'swiper/modules';

//slides array
const slides = [
  {
    title: "Best Video Calling Platform For Privacy",
    image: "https://images.unsplash.com/photo-1586985564259-6211deb4c122?q=80&w=1429&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Best Video Calling Platform For Privacy",
    image: "https://plus.unsplash.com/premium_photo-1663013500813-328e1ab77be7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Good Quality Video And Frequntly Connect",
    image: "https://images.unsplash.com/photo-1586980368323-8ce5db4c85ce?q=80&w=1429&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
]

const BannaerPro = () => {
  return (
    <div className="relative container mx-auto" style={{ maxWidth: "1600px" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination]}
        className="mySwiper"
      >
      {
        slides.map((slide, index) => (
          <SwiperSlide key={index}>
             <div className="block h-full w-full mx-auto md:flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
             style={{
              height: '50vh',
              backgroundImage: `url('${slide.image}')`,
              backgroundBlendMode: 'linear'
             }}>
                <div className="container mx-auto">
                   <div className="bg-black opacity-65 flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide rounded-sm">
                     <p className="text-white text-2xl my-4">{slide.title}</p>
                     <a href="#" className="texl-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-indigo-500 text-white hover:border-black mb-2">
                     View Features
                     </a>
                   </div>
                </div>
             </div>
          </SwiperSlide>
        ))
      }
        
       
      </Swiper>
    </div>
  );
};

export default BannaerPro;
