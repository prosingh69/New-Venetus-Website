import React from 'react'
import ClientReviewCard from './ClientReviewCard'

const ClientStory = () => {
    const reviewData = [
        {
            id:1,
            Para:"Absolutely transformed our kitchen! The team was professional, transparent about costs, and delivered exactly on time. Highly recommended!",
            Name:"Priya Desai",
            Location:"Indiranagar, Bangalore",
            Type:"Kitchen Renovation"
        },
        {
            id:2,
            Para:"Best decision we made for our home. The designers understood our vision perfectly and the quality of materials is outstanding.",
            Name:"Rajesh Nair",
            Location:"Whitefield, Bangalore",
            Type:"Full Home Design"
        },
        {
            id:3,
            Para:"The 10-year warranty gives us complete peace of mind. Everything is perfect and they've been responsive to any follow-up needs",
            Name:"Anjali Sharma",
            Location:"Koramangala, Bangalore",
            Type:"Bedroom & Living Room"
        },
        {
            id:4,
            Para:"Transparent pricing, no hidden costs, and exceptional execution. This is how interior design should be done!",
            Name:"Vikram Kumar",
            Location:"Indiranagar, Bangalore",
            Type:"Kitchen Design"
        },
        {
            id:5,
            Para:"The team was incredibly professional. They explained every step and kept us updated throughout the project",
            Name:"Neha Gupta",
            Location:"Whitefield, Bangalore",
            Type:"Full Home Transformation"
        },
        {
            id:6,
            Para:"Outstanding attention to detail. Our home looks like a luxury showroom now. Worth every penny!",
            Name:"Arjun Verma",
            Location:"Koramangala, Bangalore",
            Type:"Living Room Design"
        }
    ]
  return (
    <section className='flex justify-center items-center flex-col bg-[#F9F4F1] px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20'>
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-center text-balance'>All Client Testimonials</h2>
        <p className='text-[#6E4C40] text-sm sm:text-base md:text-lg mb-8 sm:mb-10 text-center text-balance px-2'>Read what 500+ satisfied families have to say</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full'>
            {reviewData.map((Data)=>(
                <ClientReviewCard key={Data.id} Para={Data.Para} Name={Data.Name} Location={Data.Location} Type={Data.Type}/>
            ))}
        </div>
      </div>
    </section>
  )
}

export default ClientStory
