import React from 'react'
import WhyServiceCard from './WhyServiceCard'

const WhyService = () => {
    const whyServiceData = [
        {
            id:1,
            Title:"Bangalore Expertise",
            Para:"We understand the unique challenges and opportunities of Bangalore apartments, from space constraints to local climate considerations."
        },
        {
            id:2,
            Title:"Transparent Pricing",
            Para:"No hidden costs. We provide detailed quotes upfront and stick to our budgets. Material brands and grades are clearly specified."
        },
        {
            id:3,
            Title:"Quality Materials",
            Para:"We partner with certified suppliers and use premium materials that are built to last. Every product comes with warranty."
        },
        {
            id:4,
            Title:"On-Time Delivery",
            Para:"Our project management ensures your home is ready when promised. We've maintained 100% on-time delivery for 15+ years."
        },
        {
            id:5,
            Title:"Professional Team",
            Para:"Our designers are certified professionals with years of experience in luxury interior design and space optimization."
        },
        {
            id:6,
            Title:"10-Year Warranty",
            Para:"We stand behind our work with a comprehensive 10-year warranty on all installations and materials."
        }
    ]
  return (
    <section className='bg-[#FFFFFF] px-15 py-20'>
        <h2 className='text-4xl font-bold mb-12 text-center'>Why Choose Our Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-13'>
            {whyServiceData.map((Data,index)=>(
                <WhyServiceCard key={index} Data={Data}/>
            ))}
        </div>

    </section>
  )
}

export default WhyService