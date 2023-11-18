import React from 'react'
import { services } from '../data'
import Card from './Card';
import { Link } from 'react-router-dom';



const DepartmentDetails = () => {

  const services1=services.splice(0,3);
    
  return (
    <div className='max-w-[1250px] mx-auto mt-8 flex  flex-col gap-10'>
        <div className='flex items-center justify-between'>
            <h1 className='font-[700] text-[45px]'><span className=' text-orange-500'>Our</span> Departments</h1>
          <Link to={`/department`}>  <button className='bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-6 
            rounded-full border-l-[1px] border-r-[1px]'
    
            >View All</button></Link>
        </div>
        <p className='text-[18px] font-[400]'>Combining the best specialists and equipment to provide you nothing short of the best in healthcare</p>
        
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 p-3 '>
                {
                    services1?.map((service,index)=>(
                        <div key={index} className='border border-black '>
                            <Card service={service}/>
                        </div>
                    ))
                }
        </div>
         </div>
    </div>
  )
}

export default DepartmentDetails

