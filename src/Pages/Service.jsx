import React from 'react'
import LastCTA from '../Components/LastCTA/LastCTA'
import ServiceHero from '../Components/Service/ServiceHero'
import AboutService from '../Components/Service/AboutService'
import ServiceGallery from '../Components/Service/ServiceGallery'
import ServicePackages from '../Components/Service/ServicePackages'
import SimpleProcess from '../Components/Process/SimpleProcess'
import { Helmet } from 'react-helmet-async'

const Service = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Interior Design Services | Venetus Interior</title>
        <meta name="description" content="From initial planning to complete home makeovers, explore Venetus Interior's comprehensive design services. We bring your dream space to life." />
        <meta name="keywords" content="interior design services, space planning, home makeover, custom room design, interior styling" />
        <link rel="canonical" href="https://www.venetusinterior.in/services" />
      </Helmet>

      <div className="w-full bg-black min-h-screen text-white overflow-hidden">
        <ServiceHero />
        <AboutService />
        <ServiceGallery />
        <ServicePackages />
        <SimpleProcess />
        <LastCTA />
      </div>
    </>
  )
}

export default Service