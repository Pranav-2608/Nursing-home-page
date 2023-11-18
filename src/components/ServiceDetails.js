import React from 'react'
import { department } from '../data'
import Card from './Card'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ServiceDetails = () => {
    const desc=department.desc;
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: for smooth scrolling
    });
  return (
    <div className='max-w-[1250px] mx-auto mt-[65px] mb-10'>
        <div className='flex flex-col items-center gap-10'>
            <h1 className='text-[48px] font-[700]'>Providing the best Services</h1>
            <p className='text-[18px]'>World Class care for everyone.Our health system offers unmatched healthcare</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
               {
                
                department.map((item,index)=>(
                    <div key={index}>
                    <div className='flex flex-col gap-7 justify-evenly items-center '>
                    <h2 className='text-orange-500 font-[700] text-[20px]'>{item.name}</h2>
                   <img src={item.image} className='w-[300px] h-[300px]'/>
                     <p>{desc}</p>
                <Link to={`/services`}>  <button className='bg-white hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 text-black hover:text-white py-3 
             px-6 rounded-full border-l-[1px] border-r-[1px]'>
             <FaArrowRight/>
             </button></Link>   
             </div>
             </div>
                ))
               }
            </div>
        </div>
    </div>
  )
}

export default ServiceDetails