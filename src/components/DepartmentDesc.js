import React from 'react'
import { services } from '../data'
import { useParams } from 'react-router-dom'
import Appointment from './Appointment';

const DepartmentDesc = () => {
  
    const { id }=useParams();
    const service=services.find((service)=>{
        return service.id === Number(id)
    })

    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Optional: for smooth scrolling
      });

  return (
    <div className='flex items-center justify-center gap-10 flex-col'>
        <div>
            <h1 className='text-[48px] text-orange-500'>{service.head}</h1>
        </div>
        <div className='border-2 '>
            <img src={service.image} className='w-[500px]'/>
        </div>
        <div >
            <p className='p-5'>{service.fulldesc}</p>
        </div>
        <Appointment/>
    </div>
  )
}

export default DepartmentDesc