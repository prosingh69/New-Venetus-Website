import React from 'react'
import HeroCard from '../Components/CommonComponent/HeroCard'
import ClientTrustBelt from '../Components/ClientReview/ClientTrustBelt'
import ClientStory from '../Components/ClientReview/ClientStory'
import Testimonial from '../Components/Testimonial/Testimonial'
import WhyUs from '../Components/ClientReview/WhyUs'
import LastCTA from "../Components/LastCTA/LastCTA"
const ClientTestimonial = () => {
  return (
    <div>
        <HeroCard Title={"Client Testimonials"} Para={"Hear from families who have transformed their Bangalore homes with us. Your trust is our greatest achievement."}/>
        <ClientTrustBelt/>
        <Testimonial showButton={false}/>
        <ClientStory/>
        <WhyUs/>
        <LastCTA/>
        
    </div>
    
  )
}

export default ClientTestimonial