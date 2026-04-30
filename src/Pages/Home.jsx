import React from 'react'
import Hero from '../Components/Hero/Hero'
import TrustBelt from '../Components/TrustBelt/TrustBelt'
import WhyChoose from '../Components/WhyChoose/WhyChoose'
import Testimonial from '../Components/Testimonial/Testimonial'
import LastCTA from '../Components/LastCTA/LastCTA'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
    
    <Helmet prioritizeSeoTags>
        <title>Venetus Interiors | Premium Home & Interior Design</title>
        <meta name="description" content="Transform your living space with Venetus Interiors. Experience modern home design, stunning before-and-after room transformations, and premium aesthetics." />
        <meta name="keywords" content="interior design, home decor, modern interiors, living room transformation, Venetus Interiors" />
        <link rel="canonical" href="https://new-venetus-website.vercel.app/" />
      </Helmet>
    <div>
        <Hero/>
        <TrustBelt/>
        <WhyChoose/>
        <Testimonial/>
        <LastCTA/>
    </div>
    </>
  )
}

export default Home