import React from 'react'
import DoctorList from '../../components/Doctors/DoctorList'
import {doctors} from "./../../assets/data/doctors"

const Doctors = () => {
  return <>

  <section className='bg-[#ff9ea]'>
    <div className='container text-center'>
      <h2 className='heading'>
Find a Doctor
      </h2>
      <div className='max-w-[570px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
        <input type="search" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder="search the doctor" />
        <button className='btn mt-0 rounded-[0px] rounded-r-md'>search</button>

      </div>
    </div>

  </section>
  <div>
    <DoctorList/>
  </div>
  </>
}

export default Doctors