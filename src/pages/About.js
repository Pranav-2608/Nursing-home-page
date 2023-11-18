import React from 'react'
import doctor from '../assets/doctor.webp'

const About = () => {
  return (
    <div className='bg-black my-10'>
        <div className='relative flex flex-col items-center justify-center gap-5 lg:block'>
            <h1 className='text-[48px] font-[700] text-white my-10 text-center'><span className='text-orange-500'>About</span> Nursing Home</h1>
            <div>
                <img src={doctor} className='w-[60%] mx-auto mb-5'/>
            </div>
            <div className='lg:absolute top-[185px] right-20 z-20 bg-white w-[300px] px-5 flex flex-col gap-3 mx-auto'>
                 <h2 className='text-[36px] font-[700] text-orange-500'>Welcome to Swarnakamal Nursing Home</h2>
                 <p className='text-[20px] font-[500]'>Dear Friends And Collegaues</p>
                 <p className='text-[18px] font-[400]'>My Happy greetings to all</p>
                 <p className='text-[14px]'>
                 With profound privilege, I take this opportunity to introduce our facilities, Departments & Consultants for your kind referral.
                 </p>
                 <div>
                    <p className='text-[16px]'>Sincerely</p>
                    <p className='text-[16px]'><span className='font-[700]'>Dr.XYZ</span></p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default About