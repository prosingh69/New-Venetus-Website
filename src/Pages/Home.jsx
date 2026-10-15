import React from 'react'
import Hero from '../Components/Hero/Hero'
import OurDesignService from '../Components/OurDesignService/OurDesignService'
import SimpleProcess from '../Components/Process/SimpleProcess'
import CompanyIntro from '../Components/CompanyIntro/CompanyIntro'
import InteriorsByProperty from '../Components/InteriorsByProperty/InteriorsByProperty'
import ResidentialProjects from '../Components/ResidentialProjects/ResidentialProjects'
import WhyChoose from '../Components/WhyChoose/WhyChoose'
import Testimonial from '../Components/Testimonial/Testimonial'
import TestimonialVideoSection from '../Components/Testimonial/TestimonialVideoSection'
import HomeFAQ from '../Components/HomeFAQ/HomeFAQ'
import LastCTA from '../Components/LastCTA/LastCTA'
import { Helmet } from 'react-helmet-async'
// import ReviewByBackend from './../Components/GoogleReview/ReviewByBackend';
const Home = () => {
  return (
    <>
    
    <Helmet prioritizeSeoTags>
        <title>Venetus Interior | Premium Home & Interior Design</title>
        <meta name="description" content="Transform your living space with Venetus Interior. Experience modern home design, stunning before-and-after room transformations, and premium aesthetics." />
        <meta name="keywords" content="interior design, home decor, modern interior design, living room transformation, Venetus Interior" />
        <link rel="canonical" href="https://www.venetusinterior.in/" />
      </Helmet>
    <div className="w-full bg-black min-h-screen text-white overflow-hidden">
        <Hero/>
        <OurDesignService/>
        <InteriorsByProperty/>
        <SimpleProcess/>
        <CompanyIntro/>
        <ResidentialProjects/>
        <WhyChoose/>
        <Testimonial/>
        <TestimonialVideoSection/>
        <HomeFAQ/>
        <LastCTA/>
    </div>
    </>
  )
}

export default Home