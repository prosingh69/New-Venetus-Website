import React from 'react'
import ClientTrust from './ClientTrust'

const WhyUs = () => {
  const familyData = [
    {
      id:1,
      Title:"Transparent Communication",
      Para:"We keep you updated at every step. No surprises, only honest conversations."
    },
    {
      id:2,
      Title:"Quality Guarantee",
      Para:"Premium materials and expert craftsmanship backed by 10-year warranty."
    },
    {
      id:3,
      Title:"On-Time Delivery",
      Para:"We respect your time. 100% on-time delivery record for 15+ years."
    },
    {
      id:4,
      Title:"Fair Pricing",
      Para:"Transparent quotes with no hidden costs. You know exactly what you're paying for."
    },
    {
      id:5,
      Title:"Expert Team",
      Para:"Certified designers with specialized experience in Bangalore apartments."
    },
    {
      id:6,
      Title:"Post-Project Support",
      Para:"Ongoing support and maintenance for 10 years after project completion."
    }
  ]
  return (
    <section className='lg:py-20 py-10 px-7'>
        <h2 className='text-4xl font-bold text-center'>Why Families Trust Us</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 md:mt-10'>
             {familyData.map((Data)=>(
              <ClientTrust key={Data.id} Title={Data.Title} Para={Data.Para}/>
             ))}
        </div>
    </section>
  )
}

export default WhyUs