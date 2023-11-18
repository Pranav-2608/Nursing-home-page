import React from 'react'
import ConsultantCard from '../components/ConsultantCard'
import { consultants } from '../data'

const Consultants = () => {
  return (
    <div>
      <div>
        <h1 className='text-orange-500 text-[48px] text-center'>Our Consultants</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {
          consultants.map((consultant,index)=>(
            <ConsultantCard consultant={consultant} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Consultants