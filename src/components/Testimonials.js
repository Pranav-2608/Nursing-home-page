import React from 'react';

// import AiFillStar from 'aiFillStar'
import { AiFillStar } from 'react-icons/ai';

import TestiCard from './TestiCard';
import { testimonials } from '../data';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import 'swiper/swiper.min.css';


import profile from '../assets/profile.webp'

SwiperCore.use([Pagination]);
const Testimonials = () => {

    const sliderSettings = {
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: { clickable: true },
        breakpoints: {
            640:{
                slidesPerView:1,
                spaceBetween:0,
            },
            768:{
                slidesPerView:2,
                spaceBetween:20,
            },
            1024:{
                slidesPerView:3,
                spaceBetween:30,
            }
        },
      };
    return (
        <div className='mt-[30px] lg:mt-[55px]'> 
          <section>
            <div className='container'>
            <div className='xl:w-[470px] mx-auto'>
              <h2 className='heading text-center'>Testimonials</h2>
              <p className='text_para text-center'>
                 
              </p>
            </div>

            </div>
            <div className='swiper-container'>
            <Swiper {...sliderSettings} >
            {
                testimonials.map((item,index)=>(
                <SwiperSlide key={index}>
                 <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img className="w-[200px]" src={profile}/>
                    </div>
                    <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                       {item.name}
                    </h4>
                    <div className='flex items-center gap-[2px]'>
                       <AiFillStar className='text-yellow-400 w-[18px] h-5'/>
                       <AiFillStar className='text-yellow-400 w-[18px] h-5'/>
                       <AiFillStar className='text-yellow-400 w-[18px] h-5'/>
                       <AiFillStar className='text-yellow-400 w-[18px] h-5'/>
                       <AiFillStar className='text-yellow-400 w-[18px] h-5'/>
                    </div>
                 </div>
                 <p className='text-[16px] leading-7 mt-4 mx-4 text-black/50 font-[400]' >
                       {item.desc}
                 </p>
               
               </SwiperSlide>

                ))
               
            }
            </Swiper>
            </div>
          </section>
              
        </div>
    );
}

export default Testimonials;