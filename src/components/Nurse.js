import React from 'react'
import { nurses } from '../data'
import nurse1 from '../assets/nurse1.webp'

const Nurse = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center'>
            <label for="nurse" className='mr-4'>Name:</label>
            <input type="text" name="nurse" placeholder="Enter a nurse name" className='p-4 '/>
            <button className='p-4 bg-orange-500 text-white '>Search</button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:gris-cols-3 gap-10 mt-4'>
            {
                nurses.map((nurse,index)=>(
                  <div key={index}>

                     <div className='flex flex-col items-center justify-center'>
                        <img src={nurse1}/>
                        <p className='text-[18px] font-[500]'>{nurse.name}</p>
                        <p>{nurse.desc}</p>
                        <button className='bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 px-3 rounded-full border-l-[1px] border-r-[1px]'>Consult Now</button>
                     </div>
                  </div>
                ))
            }
        </div>
    </div>
  )
}

export default Nurse