import React from 'react'
import PortfolioCard from './PortfolioCard'

const PortfolioDetail = () => {
    
    const PortfolioData = [
        {
            id: 1,
            Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786154536/wmremove-transformed_hrezhf.png",
            After: "  https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.09_AM_1_d40pc4.jpg",
            Title: "Modern Kitchen",
            Location: "Indiranagar"        
        },
        {
            id: 2,
            Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786155105/wmremove-transformed_1_shcdkh.png",
            After: "    https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.08_AM_2_w26yyi.jpg",
            Title: "Luxury Bedroom",
            Location: "Whitefield"
        },
        {
            id: 3,
            Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786155339/wmremove-transformed_2_vtpsfv.png ",
            After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.05_AM_1_imtq9p.jpg",
            Title: "Modern Kitchen",
            Location: "Indiranagar"        
        },
        {
            id: 4,
            Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786155944/wmremove-transformed_4_duhcva.png",
            After: "https://res.cloudinary.com/lbei6xmb/image/upload/v1786155951/wmremove-transformed_3_lbhehr.png",
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