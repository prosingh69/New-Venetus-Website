import React from 'react'
import ProcessCard from './ProcessCard'

const ProcessStep = () => {
    const processData = [
        {
            id:"01",
            Name:"Initial Consultation",
            Para:"Free consultation to understand your vision, requirements, and budget. We discuss your lifestyle and preferences.",
            Duration:"1-2 hours"
        },
        {
            id:"02",
            Name:"Design & Planning",
            Para:"Our designers create detailed 3D renderings and floor plans. We present multiple options and refine based on feedback.",
            Duration:"1-2 weeks"
        },
        {
            id:"03",
            Name:"Material Selection",
            Para:"Choose from premium materials with transparent pricing. We provide detailed specifications and warranty information.",
            Duration:"1 week"
        },
        {
            id:"04",
            Name:"Project Execution",
            Para:"Our skilled team handles all work with regular updates. Quality checks at each stage ensure perfection.",
            Duration:"4-8 weeks"
        },
        {
            id:"05",
            Name:"Final Handover",
            Para:"Complete walkthrough, testing of all systems, and final adjustments. You receive warranty documentation.",
            Duration:"1 day"
        },
        {
            id:"06",
            Name:"Post-Project Support",
            Para:"We provide 10-year warranty and ongoing support for any maintenance or adjustments needed.",
            Duration:"Ongoing"
        }
    ]
  return (
    <section className='py-20 bg-[#F9F8F8]'>
        <h2 className='text-4xl font-bold text-center mb-2'>6-Step Design & Execution Process</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-7 p-7'>
            {processData.map((Data)=>(
                <ProcessCard key={Data.id} id={Data.id} Name={Data.Name} Para={Data.Para} Duration={Data.Duration}/>
            ))}
        </div>
    </section>
  )
}

export default ProcessStep