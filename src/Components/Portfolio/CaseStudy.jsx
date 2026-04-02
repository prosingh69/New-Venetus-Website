import React from 'react'
import PortfolioCard from './PortfolioCard'

const CaseStudy = () => {
  const HorizontalPortfolioData=[
        {
            id:1,
            Title:"Modern Kitchen Renovation",
            Location:"Indiranagar, Bangalore",
            Before:"/design.jpg",
            After:"/premium.jpg",
            Challenge:"Small kitchen space with poor lighting and outdated layout.",
            Solution:'Modular design with smart storage and integrated lighting. Premium appliances for functionality.',
            Result:"50% more storage, 3x better lighting, modern aesthetic.",
        },
        {
            id:2,
            Title:"Luxury Bedroom Makeover",
            Location:"Whitefield, Bangalore",
            Before:"/design.jpg",
            After:"/yellow.jpg",
            Challenge:"Basic bedroom needed transformation into a luxury retreat.",
            Solution:'Custom wardrobe, ambient lighting, premium materials, and elegant color palette.',
            Result:"Transformed into a sanctuary with 4.9/5 client satisfaction",
        },
        {
            id:3,
            Title:"Full Home Transformation",
            Location:"Koramangala, Bangalore",
            Before:"/yellow.jpg",
            After:"/premium.jpg",
            Challenge:"3BHK apartment needed complete redesign with cohesive style.",
            Solution:'Integrated design across all rooms, material coordination, smart storage.',
            Result:"Complete transformation in 45 days, 100% on-time delivery.",
        }
    ]
  return (
    <section className='py-10 px-7 md:p-10 flex flex-col justify-center items-center'>
        <h2 className='text-4xl font-bold mb-4 text-center'>Featured Case Studies</h2>
        <p className='text-lg text-[#6E4C40] mb-4 lg:mb-16'>Detailed look at our most impactful projects</p>
        <div className="w-full max-w-8xl mx-auto">
          {HorizontalPortfolioData.map((Data)=>(
            <PortfolioCard layout="horizontal" Title={Data.Title} Location={Data.Location} BeforeImg={Data.Before} AfterImg={Data.After} Challenge={Data.Challenge} Solution={Data.Solution} Result={Data.Result} /> 
          ))}
        </div>
    </section>
  )
}

export default CaseStudy