import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel({images}) {
  return (
    <div className='flex items-center justify-center rounded-xl'>
      <div className='h-full w-full rounded-xl'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        {
          images.map((image,index) => {
            return (
              <SwiperSlide key={index}>
                <div className='relative'>
                  <img src={image.src} className='w-full h-[500px] rounded-xl object-cover object-bottom'/>
                  <div 
                  className='absolute bg-black/40 rounded-md z-10 bottom-0 right-0 mr-2 mb-2 p-2 text-white'
                  >
                    <p className='flex items-center gap-2 font-bold italic'><i className="fa-solid fa-location-dot"></i>{image.location || 'City Name'}</p>
                    <p className='text-xs text-right'>{image.date || '01 Jan 2025'}</p>
                    <p className='flex items-center gap-2'><i className="fa-solid fa-camera"></i> {image.author || 'Author Name'}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
          }
      </Swiper>
    </div>
    </div>
    
  );
}
