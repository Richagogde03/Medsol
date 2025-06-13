import React from 'react'
import signupImg from "../assets/images/signup.gif"
import {Link} from 'react-router-dom'


const Signup = () => {
  return (
    <section className='px-5 xl:px-0 '>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 hero_section'>

          {/* img box */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg' >
              <img src={signupImg} alt="" className='w-full rounded-l-lg'/>
            </figure>
          </div>

          {/* sign up form */}

          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
              create an <span className='text-primaryColor'>
                account
              </span>

            </h3>

<form >
<div className="mb-5">
<input 
type="text" 
placeholder="Enter Your name" 
name="name" 
value="" 

className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
focus: border-b-primaryColor text-[16px] leading-7 Otext-headingColor
placeholder:text-textColor cursor-pointer"
required
/>
</div>

<div className="mb-5">
<input 
type="email" 
placeholder="Enter Your email" 
name="email" 
value="" 

className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
focus: border-b-primaryColor text-[16px] leading-7 Otext-headingColor
placeholder:text-textColor cursor-pointer"
required
/>
</div>


<div className="mb-5">
<input 
type="password" 
placeholder="password" 
name="password" 
value="" 

className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
focus: border-b-primaryColor text-[16px] leading-7 Otext-headingColor
placeholder:text-textColor cursor-pointer"
required
/>
</div>

<div className='mb-5 flex items-center justify-between'>
  <label htmlFor=""
  className='text-headingColor font-bold text-[10px] leading-7'>
    are you a:
    <select name="role" className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
      <option value="patient">Patient</option>

      <option value="doctor">Doctor</option>
    </select>
  </label>

  <label htmlFor=""
  className='text-headingColor font-bold text-[10px] leading-7'>
    Gender:
    <select name="gender" className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
      <option value="patient">select</option>

      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </label>
</div>


<div className="mt-7">
<button
type="submit"
className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
>
Sign Up
</button>
</div>

<p className="mt-5 text-textColor text-center">
already have an account? 
<Link to="/login" className="text-primaryColor font-medium ml-1">
Login
</Link>
</p>
</form>

              
      
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup