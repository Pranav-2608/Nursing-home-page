import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import { NavLink,Link } from 'react-router-dom'
import { useEffect,useRef } from 'react'
import { BiMenu } from 'react-icons/bi' 
import { IoMdCloseCircle } from "react-icons/io";

const navItems=[
    {
        path:'/',
        item:'Home',
    },
    {
        path:'/services',
        item:'Services',
    },
    {
        path:'/about',
        item:'About',
    },
    {
        path:'/consultants',
        item:'Consultants',
    },
    {
        path:'/department',
        item:'Departments',
    },
]

const Header = () => {

    const[head,setHead]=useState(false);
    const[toggle,setToggle]=useState(false);

    const handleHeader= ()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>80){
                setHead(true);
            }
            else{
                setHead(false);
            }
        })
    }

    useEffect(()=>{
        handleHeader();
    },[])

  return (
    <div onClick={()=>{
        if(toggle)setToggle(!toggle);
    }}>
        <header className={`${head?'sticky ':''} header flex items-center`}>
          <div className='container'>
            <div className='flex items-center justify-between'>
               {/* Logo */}
               <div>
                 <img src={Logo}/>
               </div>

               {/* list */}
               <div className='navigation'>
                 <ul className={`lg:flex gap-10 items-center  ${toggle == true ? `flex flex-col bg-[#fff] gap-10 z-50 absolute top-0 right-0 items-center justify-center h-screen w-[200px]` : `hidden`}`}>
                    {
                        navItems.map((list,index)=>(
                        <li key={index}>
                            <NavLink to={list.path} className={navClass=> navClass.isActive?'text-blue-600 text-[16px] leading-7 font-[600]':
                            'text-black text-[16px] leading-7 font-[500] hover:text-red-600'}>{list.item}</NavLink>
                        </li>
                        ))
                        
                    }
                    
                  <Link to="/login"><button className='lg:hidden bg-blue-600 py-2 px-6 text-white font-[600] h-[40px] flex items-center justify-center rounded-[50px]'>Login/Sign In</button></Link>
                
                 </ul>
               </div>

                 {/* Login Button */}
                <div className='gap-10 flex items-center'>
                
                <div className='hidden lg:block'>
                  <Link to="/login"><button className='bg-blue-600 py-2 px-6 text-white font-[600] h-[40px] flex items-center justify-center rounded-[50px]'>Login/Sign In</button></Link>
                </div>
                <span className={`lg:hidden z-200 ${toggle?'absolute top4 right-2':''} `}>
                    {!toggle?<BiMenu className="cursor-pointer w-7 h-7" onClick={()=>setToggle(!toggle)} />:<IoMdCloseCircle className="cursor-pointer w-7 h-7" onClick={()=>setToggle(!toggle)} />}
                </span>
                </div>
            </div>
          </div>
        </header>
    </div>
  )
}

export default Header