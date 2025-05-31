import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
// import doctoranima from '../assets/images/doctoranima.json'
import icon01 from  '../assets/images/icon01.png'
import icon02 from  '../assets/images/icon02.png'
import icon03 from  '../assets/images/icon03.png'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import {Link} from 'react-router-dom'


import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png"
 
import avatarIcon from "../assets/images/avatar-icon.png";
import DoctorList from '../components/Doctors/DoctorList'

  
// import Lottie from "medsol2.0"

// import heroImg02 from '../assets/images/hero-img02.png'
// import heroImg03 from '../assets/images/hero-img03.png'

const Home = () => {
  return (
     <>
     {/* main home */}
     <>
     <section className="hero_section pt-[60px] 2xl:h-[800px]">
      <div className='container'> 
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
          {/* home content */}
          <div>
            <div className='lg:w-[570px]'>
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[50px] md:leading-[70px]'>
                 Medsol making appointments easier!
              </h1>
              <p className='text_para'>Forget the hassle of making tedious appointments ,with the help of Medsol the appointments are just a few click away with your desired doctors.

              </p>

              <button className='btn'>Book an appoitment</button>

              {/* main counter */}

              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                        30+
                  </h2>
                  <span className='w-[100px] h-2 bg-[#06b6d4] rounded-full block mt-[-14px]'>

                  </span>
                  <p className='text_para'>
                       years of experience
                  </p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-[#18181b]'>
                        15+
                  </h2>
                  <span className='w-[100px] h-2 bg-[#a855f7] rounded-full block mt-[-14px]'>

                  </span>
                  <p className='text_para'>
                       clinic locations
                  </p>
                </div>


                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-[#18181b]'>
                        100%
                  </h2>
                  <span className='w-[100px] h-2 bg-[#c026d3] rounded-full block mt-[-14px]'>

                  </span>
                  <p className='text_para'>
                       patient satisfaction
                  </p>
                </div>
                
              </div>
          
            </div>
          </div>
          {/* home content */}
          <div className='flex gap-[100px] justify-end'>
            <img className='w-full ' src={heroImg01} alt="" /> 
            {/* <div>
              <img className='w-full ' src={heroImg01} alt="" />
            </div> */}
             {/* <div className='mt-[30px]'> */}
              {/* <img src={heroImg02} alt=""  className='w-full mb-[30px]'/> */}
              {/* <img src={heroImg03} alt=""  className='w-full'/> */}
             {/* </div> */}
          </div>
        </div>
      </div>
     </section>
      {/* main home end */}

     <section>
         <div className='container  '>
          <div className='lg:w-[470px] mx-auto' >
            <h2 className='heading text-center'>
                   providing the best medical services
            </h2>
            <p className='text_para text-center'>
                  world class care for everyone.Our health system offers unmatched,expert health care
            </p>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] hero_section '>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01} alt="" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                    Find a doctor
                </h2>
                <p className=' text_para text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                     find the best doctor and book doctors according to your symptoms
                </p>
              </div>
            </div>


            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt="" />
                {/* <Lottie animationData={doctoranima}/> */}
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                    Find the nearest clinic
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                       get to know about the nearest clinic around you with just a click
                </p>
              </div>
            </div>


            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt="" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                    know about medsol
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                       know more about medsol as how it helps the patients to book appointments easily.
                </p>
              </div>
            </div>
          </div>
         </div>
     </section>

     <About/>


     {/* service section start */}
     <section>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>

            <h2 className='heading text-center'>our medical services</h2>
            <p className='text_para text-center'> world class care for everyone.our health system offers unmatched expert health care </p>
      
        </div>

        <ServiceList/>
      </div>
     </section>

     {/* service section end */}

      {/* feature section  */}

      <section>
         <div className="container hero_section">
              <div className="flex items-center justify-between flex-col lg:flex-row">
             {/* feature content*/}
           <div className="xl:w-[670px]">
            <h2 className="heading">
            Get virtual treatment <br /> anytime.
            </h2>
             <ul className="pl-4">
           <li className="text_para">
               1. Schedule the appointment directly.
            </li>
           <li className="text_para">
              2. Search for your physician here, and contact their office.
            </li>
          < li className="text_para">
             3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.

</li>
</ul>
<Link to="/">
<button className="btn">Learn More</button>
</Link>
</div>

{/* feature img */}
<div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-30 lg:mb-10">
   <img src={featureImg} className="w-3/4" alt="" />
  <div className="w-[150px] 1g:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]"> 
   <div className="flex items-center justify-between">
     <div className='flex items-center gap-[6px] lg:gap-3'>
      <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
            Tue,24
      </p>
      <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]'>
        10:00 AM
      </p>
     </div>
     <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg-px-[9px]'>
      <img src={videoIcon} alt="" />
     </span>
</div>
<div className="w-[65px] 1g:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] 1g:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4">
Consultation
</div>
 
       <div className="flex items-center gap-[6px] 1g:gap-[10px] mt-2 lg:mt-[18px]">
     <img src={avatarIcon}alt="" />
<h4 className="text-[10px] leading-3 lg:text-[16px] 1g:leading-[22px] font-[700] text-headingColor">
Wayne Collins
</h4>
</div>
</div>
</div>
</div>
</div>
</section>

       {/* feature section end */}

       {/* our doctors */}

       <section>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>

            <h2 className='heading text-center'>our superb doctors</h2>
            <p className='text_para text-center'> world class care for everyone.our health system offers unmatched expert health care </p>
      
        </div>
       <DoctorList/>
       
      </div>
     </section>
         {/* our doctors */}



     </>
     </>
  )
}

export default Home