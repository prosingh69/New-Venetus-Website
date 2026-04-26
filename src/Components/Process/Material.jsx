import React from 'react'
import MaterialCard from './MaterialCard'

const Material = () => {
    const MaterialData=[
        {
            id:1,
            Name:"Plywood",
            Brands:["Greenply","Merino","BWR Grade"],
            Grades:"Marine Grade"
        },
        {
            id:2,
            Name:"Hardware",
            Brands:["Hafele","Blum","Hettich"],
            Grades:"Premium"
        },
        {
            id:3,
            Name:"Paints",
            Brands:["Asian Paints","Berger","Nippon"],
            Grades:"Premium Emulsion"
        },
        {
            id:4,
            Name:"Flooring",
            Brands:["Kajaria","Somany","Vitrified Tiles"],
            Grades:"Premium"
        },
        {
            id:5,
            Name:"Lighting",
            Brands:["Philips","Havells","Crompton"],
            Grades:"LED Energy Efficient"
        },
        {
            id:6,
            Name:"Fixtures",
            Brands:["Jaquar","Hindware","Cera"],
            Grades:"Premium"
        }
    ]
  return (
    <section className='py-20 bg-white'>
        <h2 className='text-4xl font-bold text-center mb-1'>Material Transparency</h2>
        <p className='text-lg text-center text-[#6E4C5F] mb-2'>We use certified premium brands and grades for every project</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-4 px-7'>
            {MaterialData.map((Data)=>(
                <MaterialCard key={Data.id} Name={Data.Name} Brands={Data.Brands} Grades={Data.Grades} />
            ))}

        </div>
    </section>
  )
}

export default Material