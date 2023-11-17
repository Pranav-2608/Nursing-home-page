import React from 'react'

const Card = (props) => {
    const service=props.service;
    const desc=service.desc;
  return (
    <div>
        <div className='flex flex-col gap-10 justify-evenly items-center '>
            <h2 className='text-orange-500 font-[500]'>{service.name}</h2>
            <img src={service.image} className='w-[300px] h-[300px]'/>
            <p>{desc.slice(0,80)}...</p>
            <button className='bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-6 rounded-full border-l-[1px] border-r-[1px]'>{service.btn}</button>
        </div>
    </div>
  )
}

export default Card