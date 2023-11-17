import React from 'react'
import { services } from '../data'
import Card from './Card';
import { Swiper,SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import 'swiper/swiper-bundle.css';



const DepartmentDetails = () => {

    const sliderSettings={
        slidesPerView:4,
        spaceBetween:50,

        breakpoints:{
            240:{
                slidesPerView:1
            },
            480:{
                slidesPerView:2 
            },
            750:{
                slidesPerView:3
            },
            1100:{
                slidesPerView:4
            }
    
        },
        pagination: {
            clickable: true,
          },
          autoplay: {
            delay: 5000, // Adjust the delay as needed (in milliseconds)
            disableOnInteraction: false,
          },
    }
  return (
    <div className='max-w-[1250px] mx-auto mt-8 flex  flex-col gap-10'>
        <div className='flex items-center justify-between'>
            <h1 className='font-[700] text-[45px]'><span className=' text-orange-500'>Our</span> Departments</h1>
            <button className='bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-6 rounded-full border-l-[1px] border-r-[1px]'>View All</button>
        </div>
        <p className='text-[18px] font-[400]'>Combining the best specialists and equipment to provide you nothing short of the best in healthcare</p>
        <div>
        {/* <Swiper {...sliderSettings} className='flex justify-between items-center flex-col lg:flex-row'>
              
                {
                    services.map((service,index)=>(
                        <SwiperSlide key={index}>
                            <Card service={service}/>
                        </SwiperSlide>
                    ))
                }
        </Swiper> */}
        <Swiper {...sliderSettings} className='flex justify-between items-center flex-col lg:flex-row'>
              <SliderButtons/>
                {
                    services.map((service,index)=>(
                        <SwiperSlide key={index}>
                            <Card service={service}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
         </div>
    </div>
  )
}

export default DepartmentDetails

const SliderButtons= ()=>{
    const swiper=useSwiper();
   return(
    <div className=''>
       <button onClick={()=>swiper.slidePrev()} className='absolute top-0 left-0 text-[24px]'> &lt; </button> 
       <button onClick={()=>swiper.slideNext()} className='absolute top-0 right-0 text-[24px]'> &gt; </button>
    </div>
   )
}