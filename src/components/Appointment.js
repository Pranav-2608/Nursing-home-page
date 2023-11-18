import React from 'react'

const Appointment = () => {
  return (
    <div className='flex flex-col justify-evenly gap-20 mt-10'>
    <div>
        <h1 className='text-[48px] text-orange-500 text-center mb-6'>Book An Appointment Now!</h1>
    </div>
      <div className='flex flex-col items-center gap-10 '>
        <div>
        <label for="name">Enter Your Name: </label>
        <input type="text" name="name" className='border'/>
        </div>
        <div className='flex gap-4'>
        <label>Gender:</label>
        <label for="gender">Male </label>
        <input type="radio" name="gender"/>
        <label for="gender">Female </label>
        <input type="radio" name="gender"/>
        </div>
        <div>
            <p>Address:</p>
            <textarea rows={10} cols={35} className='border'></textarea>
        </div>
        <button className='bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 px-3 rounded-full border-l-[1px] border-r-[1px]'>Submit</button>
      </div>
    </div>
  )
}

export default Appointment