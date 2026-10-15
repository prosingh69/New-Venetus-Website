import React from 'react'
import PortfolioCard from './PortfolioCard'

const PortfolioDetail = () => {
    
    const PortfolioData = [
        {
            id: 1,
            Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786154536/wmremove-transformed_hrezhf.png",
            After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786158021/WhatsApp_Image_2026-08-08_at_8.29.42_AM_gqiqg2.jpg",
            Title: "Modern Kitchen",
            Location: "Indiranagar",
            imagePosition: "object-[center_40%]"       
        },
        {
            id: 2,
            Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786159886/WhatsApp_Image_2026-08-08_at_9.00.10_AM_kdshal.jpg",
            After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.08_AM_2_w26yyi.jpg",
            Title: "Luxury Bedroom",
            Location: "Whitefield",
            imagePosition: "object-[center_20%]" 
        },
        {
            id: 3,
            Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786155339/wmremove-transformed_2_vtpsfv.png",
            After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786109877/WhatsApp_Image_2026-08-03_at_9.06.05_AM_1_imtq9p.jpg",
            Title: "Modern Kitchen",
            Location: "Indiranagar",
            imagePosition: "object-[30%_60%]"       
        },
        {
            id: 4,
            Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786160796/WhatsApp_Image_2026-08-08_at_9.15.27_AM_ntnmvq.jpg",
            After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786160796/WhatsApp_Image_2026-08-08_at_9.15.27_AM_1_fx3xel.jpg",
            Title: "Luxury Bedroom",
            Location: "Whitefield",
            imagePosition: "object-[30%_30%]" 
        },
        {
            id: 5,
            Before: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786157063/wmremove-transformed_5_xlwufw.png",
            After: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786157116/WhatsApp_Image_2026-08-07_at_6.44.25_PM_1_unfxvp.jpg",
            Title: "Luxury Bedroom",
            Location: "Whitefield",
            imagePosition: "object-center" 
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
                  imagePosition={Data.imagePosition}
                />
            ))
        }
    </section>
  )
}

export default PortfolioDetail