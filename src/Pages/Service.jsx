import React from 'react'
import LastCTA from '../Components/LastCTA/LastCTA'
import HeroCard from '../Components/CommonComponent/HeroCard'
import AboutService from '../Components/Service/AboutService'
import WhyService from '../Components/Service/WhyService'
import { Helmet } from 'react-helmet-async'

const Service = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Interior Design Services | Venetus Interiors</title>
        <meta name="description" content="From initial planning to complete home makeovers, explore Venetus Interiors' comprehensive design services. We bring your dream space to life." />
        <meta name="keywords" content="interior design services, space planning, home makeover, custom room design, interior styling" />
        <link rel="canonical" href="https://new-venetus-website.vercel.app/services" />
      </Helmet>

      <div>
        <HeroCard Title={"Our Services"} Para={"Specialized interior design services for Bangalore homes, from single rooms to complete home transformations."} />
        <AboutService />
        <WhyService />
        <LastCTA />
      </div>
    </>
  )
}

export default Service