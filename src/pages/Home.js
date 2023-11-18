import React from "react";
import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.png'
import DepartmentDetails from "../components/DepartmentDetails";
import ServiceDetails from "../components/ServiceDetails";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div>
        <section className="hero_section pt-[60px] 2xl:h-[800px] header">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">
              {/* hero Content left part */}
              <div>
                <div className="">
                  <h1 className="text-[36px] leading-[46px] text-black font-[700] md:text-[60px] md:leading-[70px] no-scrollbar ">
                    We help patients<br/> live a healthy,<br/> longer life
                  </h1>
                  <p className="text_para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt<br/> ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    
                  </p>

                  <Link to="/services"><button className="btn">Request An Appointment</button></Link>
                </div>

                {/* hero counter */}
                <div className="mt-[30px] lg:mt-[50px] flex flex-col lg:flex-row lg:items-center gap:5 lg:gap-[30px]">

                    <div>
                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] ">30+</h2>
                        <span className="w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px]"></span>
                        <p className="text_para">Years Of Experience</p>
                    </div>

                    <div>
                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] ">15+</h2>
                        <span className="w-[100px] h-2 bg-purple-400 rounded-full block mt-[-14px]"></span>
                        <p className="text_para">Clinic Location</p>
                    </div>

                    <div>
                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] ">100%</h2>
                        <span className="w-[100px] h-2 bg-pink-400 rounded-full block mt-[-14px]"></span>
                        <p className="text_para">Customer Satisfaction</p>
                    </div>

                </div>
              </div>

              {/* heroContent right part */}
              <div className="flex gap-[30px] justify-end">
                <div>
                    <img className="w-full h-full" src={hero1}/>
                </div>
                <div className="mt-[30px]">
                    <img src={hero2} className="w-full "/>
                    <img src={hero3} className="w-full mb-[30px]"/>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      {/* Hero Section End*/}
      <DepartmentDetails/>
      <AboutSection/>
      <ServiceDetails/>
      <div className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white ">
      <div className="flex items-center justify-between max-w-[1250px] mx-auto ">

         <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="text-[18px] md:text-[30px] ">For an emergency,Please To Contact</h2>
            <h1 className=" text-[22px] md:text-[38px]">+91 7549365428</h1>
         </div>

         <div>
           <button className="text-orange-500 bg-white py-3 px-6 rounded-full border-l-[1px] border-r-[1px]">Contact Us</button>
         </div>
      </div>
      
      </div>
      <Testimonials/>
    </div>
    
  );
};

export default Home;
