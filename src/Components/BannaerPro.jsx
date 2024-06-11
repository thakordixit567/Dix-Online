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
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Best Video Calling Platform For Privacy",
    image: "https://images.pexels.com/photos/821948/pexels-photo-821948.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Good Quality Video And Frequntly Connect",
    image: "https://images.pexels.com/photos/4145196/pexels-photo-4145196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                     <p className="text-white text-2xl my-4 pt-4">{slide.title}</p>
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
