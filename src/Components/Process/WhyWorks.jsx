import React from 'react'
import WhyWorkCard from './WhyWorkCard'
import { NotepadText , CheckCheck , Timer, HandCoins , Phone , ShieldUser } from 'lucide-react';
const WhyWorks = () => {
    const WhyWorkData = [
        {
            id:1,
            Badge:  NotepadText,
            Name:"Transparency",
            Para:"Every step is documented. You know exactly what materials are used and why."
        },
        {
            id:2,
            Badge: CheckCheck , 
            Name:"Quality Control",
            Para:"Multiple quality checks ensure perfection at each stage of execution."
        },
        {
            id:3,
            Badge:Timer ,
            Name:"Timeline Guarantee",
            Para:"We commit to delivery dates and have maintained 100% on-time delivery for 15+ years."
        },
        {
            id:4,
            Badge:HandCoins,
            Name:"Budget Adherence",
            Para:"No hidden costs. We provide detailed quotes and stick to budget."
        },
        {
            id:5,
            Badge:Phone,
            Name:"Regular Updates",
            Para:"Weekly progress updates keep you informed throughout the project."
        },
        {
            id:6,
            Badge:ShieldUser,
            Name:"Warranty Backed",
            Para:"10-year comprehensive warranty on all work and materials."
        }
    ]
  return (
    <section className='bg-[#F9F8F8] py-20'>
        <h1 className='text-4xl font-bold text-center mb-4 '>Why Our Process Works</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-7'>
            {
                WhyWorkData.map((Data)=>(
                    <WhyWorkCard Badge={Data.Badge} Name={Data.Name} Para={Data.Para}/>
                ))
            }

        </div>

    </section>
  )
}

export default WhyWorks