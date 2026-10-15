import React from 'react'
import { Helmet } from 'react-helmet-async'
import TestimonialHero from '../Components/Testimonial/TestimonialHero'
import TestimonialVideoSection from '../Components/Testimonial/TestimonialVideoSection'
import Testimonial from '../Components/Testimonial/Testimonial'
import ClientStory from '../Components/ClientReview/ClientStory'
import WhyUs from '../Components/ClientReview/WhyUs'
import LastCTA from '../Components/LastCTA/LastCTA'

const ClientTestimonial = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Client Testimonials | Venetus Interior Bangalore</title>
        <meta
          name="description"
          content="Hear real stories and reviews from Bangalore homeowners who transformed their living spaces with Venetus Interior. 10-year warranty, 100% on-time delivery."
        />
        <meta
          name="keywords"
          content="Venetus Interior reviews, client testimonials, Bangalore interior designers feedback, luxury apartment interior reviews"
        />
        <link rel="canonical" href="https://www.venetusinterior.in/testimonial" />

        <meta property="og:title" content="Client Testimonials | Venetus Interior Bangalore" />
        <meta
          property="og:description"
          content="Hear real stories and reviews from Bangalore homeowners who transformed their living spaces with Venetus Interior."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.venetusinterior.in/testimonial" />
      </Helmet>

      <div className="w-full bg-black min-h-screen text-white overflow-hidden">
        {/* Hero Section with Cloudinary Background Video */}
        <TestimonialHero />

        {/* YouTube Video Full Window Cinema Section */}
        <TestimonialVideoSection />

        {/* Live Client Testimonial Carousel */}
        <Testimonial showButton={false} />

        {/* Client Story Feature */}
        <ClientStory />

        {/* Why Families Trust Venetus Grid */}
        <WhyUs />

        {/* Final CTA */}
        <LastCTA />
      </div>
    </>
  )
}

export default ClientTestimonial