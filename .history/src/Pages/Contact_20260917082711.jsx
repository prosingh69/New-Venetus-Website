import React from 'react'
import HeroCard from '../Components/CommonComponent/HeroCard'
import ContactSection from '../Components/Contact/ContactSection'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Contact Us | Book a Consultation with Venetus Interior</title>
        <meta name="description" content="Ready to elevate your home? Get in touch with Venetus Interior today to schedule a consultation and start your interior design journey." />
        <meta name="keywords" content="contact interior designer, book design consultation, Venetus Interior contact, hire interior decorator" />
        <link rel="canonical" href="https://www.venetusinterior.in/contact" />
      </Helmet>

      <div>
        <HeroCard Title={"Get In Touch"} Para={"Ready to transform your Bangalore home? Contact us for a free consultation."} />
        <ContactSection />
      </div>
    </>
  )
}

export default Contact