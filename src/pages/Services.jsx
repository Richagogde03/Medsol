import React from 'react'
import { services } from '../assets/data/services'
import ServiceList from '../components/Services/ServiceList'

const Services = () => {
  return <section>
    <div className='container'>
    <ServiceList/>
    </div>
  </section>
}

export default Services