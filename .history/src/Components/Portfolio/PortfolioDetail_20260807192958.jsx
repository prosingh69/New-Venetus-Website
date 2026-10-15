import React from 'react'
import PortfolioCard from './PortfolioCard'

const PortfolioDetail = () => {
    
    const PortfolioData = [
        {
            id: 1,
            Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109878/WhatsApp_Image_2026-08-03_at_9.07.37_AM_dduhue.jpg",
            After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109878/WhatsApp_Image_2026-08-03_at_9.07.37_AM_dduhue.jpg",
            Title: "Modern Kitchen",
            Location: "Indiranagar"        
        },
        {
            id: 2,
            Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.08_AM_2_w26yyi.jpg",
            After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.09_AM_1_d40pc4.jpg",
            Title: "Luxury Bedroom",
            Location: "Whitefield"
        },
        {
            id: 3,
            Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.07.27_AM_guqlkg.jpg",
            After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.05_AM_1_imtq9p.jpg",
            Title: "Modern Kitchen",
            Location: "Indiranagar"        
        },
        {
            id: 4,
            Before: "     https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109878/WhatsApp_Image_2026-08-03_at_9.07.43_AM_2_gsyod4.jpg  https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.07.30_AM_lbqzry.jpg",
            After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109876/WhatsApp_Image_2026-08-03_at_9.06.04_AM_cifong.jpg",
            Title: "Luxury Bedroom",
            Location: "Whitefield"
        }
    ]
    
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-10 px-7 py-4 lg:pb-30 bg-[#F9F8F8]'>
        {
            PortfolioData.map((Data)=>(
                <PortfolioCard 
                  key={Data.id} 
                  BeforeImg={Data.Before} 
                  AfterImg={Data.After} 
                  Title={Data.Title} 
                  Location={Data.Location}
                />
            ))
        }
    </section>
  )
}

export default PortfolioDetail