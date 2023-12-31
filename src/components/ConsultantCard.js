import React from 'react'

const ConsultantCard = (props) => {
    const consultant=props.consultant;
    const desc=consultant.desc;
  return (
    <div className='flex flex-col gap-10 justify-evenly items-center p-3 border border-black'>
            <h2 className='text-orange-500 font-[500]'>{consultant.name}</h2>
            <img src={consultant.image} className='w-[300px] h-[300px]'/>
            <p>{desc.slice(0,80)}...</p>
            <button className='bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-6 rounded-full border-l-[1px] border-r-[1px]'>Contact</button>
        </div>
  )
}

export default ConsultantCard