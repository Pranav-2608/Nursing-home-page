import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube,AiFillGithub,AiOutlineInstagram } from 'react-icons/ai'

const socialLinks=[
  {
    path:"Linkedin" ,
    icon:<RiLinkedinFill className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"Instagram",
    icon:<AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"Youtube" ,
    icon:<AiFillYoutube className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"GitHub" ,
    icon:<AiFillGithub className='group-hover:text-white w-4 h-5'/>
  },
];

const implinks=[
  {
    path:'/',
    name:"Home"
  },
  {
    path:'/consultant',
    name:"Consultants"
  },
  {
    path:'/department',
    name:'Department'
  },
  {
    path:'/contact',
    name:'Contacts'
  },
  {
    path:'/services',
    name:"Services"
  }
]
const Footer = () => {

  const year=new Date().getFullYear();
  return (
    <div className='pb-16 pt-10'>
       <div className='container max-w-[1250px]'>
         <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
           <div className='flex items-start flex-col'>
             <img src={Logo} className='-translate-x-[54px]'/>
             <p className='text-[16px] leading-7 font-[400] text-gray-400'>Copyright &copy; {year} All rights reserved.</p>
             <div className='flex items-center gap-3 mt-4'>
            {
              socialLinks.map((link,index)=>(
                <Link key={index} to={link.path} className='w-9 h-9 border border-solid border-black rounded-full
                flex items-center justify-center group hover:bg-orange-500 hover:border-none
                '>{link.icon}</Link>
              ))
            }
           </div>
           </div>
           
           <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-black '>Quick Links</h2>
            <ul>
              {
                implinks.map((item,index)=>(
                  <li key={index} className='mb-4'>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))
              }
            </ul>
           </div>
          
         </div>
       </div>
    </div>
  )
}

export default Footer