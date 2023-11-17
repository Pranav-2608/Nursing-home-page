import React from 'react'
import { AiFillStar } from 'react-icons/ai';

const TestiCard = (props) => {
    const test=props.test;
  return (
    <div>
        <div className='p-6 rounded-xl md:w-[30%] shadow-md shadow-gray-800'>
                        <h2 className=' text-xl font-semibold opacity-90'>{test.name}</h2>
                        <p className=' text-gray-500'>{test.date}</p>
                        <div className='flex'>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                        </div>
                        <p className=' text-md my-2 text-gray-600'>{test.desc}</p>
        </div>
    </div>
  )
}

export default TestiCard