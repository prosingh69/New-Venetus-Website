import React from 'react'
import PortfolioCard from './PortfolioCard'

const PortfolioDetail = () => {
    const PortfolioData = [
        {
            id:1,
            Before:"/premium.jpg",
            After:"/yellow.jpg",
            Title:"Modern Kitchen",
            Location:"Indiranagar"        
        },
        {
            id:2,
            Before:"/design.jpg",
            After:"/premium.jpg",
            Title:"Luxury Bedroom",
            Location:"Whitefield"
        },
        {
            id:3,
            Before:"/premium.jpg",
            After:"/yellow.jpg",
            Title:"Modern Kitchen",
            Location:"Indiranagar"        
        },
        {
            id:4,
            Before:"/premium.jpg",
            After:"/yellow.jpg",
            Title:"Modern Kitchen",
            Location:"Indiranagar"        
        },
        {
            id:5,
            Before:"/premium.jpg",
            After:"/yellow.jpg",
            Title:"Modern Kitchen",
            Location:"Indiranagar"        
        },
        {
            id:6,
            Before:"/design.jpg",
            After:"/premium.jpg",
            Title:"Luxury Bedroom",
            Location:"Whitefield"
        },
    ]
    
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-10 px-7 py-4 lg:pb-30 bg-[#F9F8F8]'>
        {
            PortfolioData.map((Data)=>(
                <PortfolioCard key={Data.id} BeforeImg={Data.Before} AfterImg={Data.After} Title={Data.Title} Location={Data.Location}/>
            ))

        }
    </section>
  )
}

export default PortfolioDetail