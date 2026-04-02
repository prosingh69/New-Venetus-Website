import React from 'react'
import Hero from '../Components/Hero/Hero'
import TrustBelt from '../Components/TrustBelt/TrustBelt'
import WhyChoose from '../Components/WhyChoose/WhyChoose'
import Testimonial from '../Components/Testimonial/Testimonial'
import LastCTA from '../Components/LastCTA/LastCTA'

const Home = () => {
  return (
    <div>
        <Hero/>
        <TrustBelt/>
        <WhyChoose/>
        <Testimonial/>
        <LastCTA/>
    </div>
  )
}

export default Home