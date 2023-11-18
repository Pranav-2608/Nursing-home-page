import React from 'react';

// import AiFillStar from 'aiFillStar'
import { AiFillStar } from 'react-icons/ai';
import { testimonials } from '../data';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



import profile from '../assets/profile.webp'

const Testimonials = () => {

    const sliderSettings = {
       
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
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                testimonials.map((item,index)=>(
                <div key={index}>
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
               
               </div>

                ))
               
            }
            </div>
           
          </section>
              
        </div>
    );
}

export default Testimonials;