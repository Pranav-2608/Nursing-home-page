import React from 'react'
import Nurse from '../components/Nurse'
import Appointment from '../components/Appointment'

const Services = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Optional: for smooth scrolling
  });
  return (
    <div>
      <h1 className='text-[48px] text-orange-500 text-center'>Our Services</h1>
      <div className='flex items-center flex-col gap-10'>
        <h2 className='text-[24px] text-black text-center'>Find a Nurse</h2>
        <Nurse id={1}/>
        <hr className='w-full text-black'/>
        <Appointment id={3}/>
      </div>
    </div>
  )
}

export default Services