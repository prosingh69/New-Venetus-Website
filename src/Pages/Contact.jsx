import React from 'react'
import ContactHero from '../Components/Contact/ContactHero'
import ContactSection from '../Components/Contact/ContactSection'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Contact Us | Book a Consultation with Venetus Interior</title>
        <meta
          name="description"
          content="Ready to elevate your home? Get in touch with Venetus Interior today to schedule an architectural consultation and start your bespoke interior journey."
        />
        <meta
          name="keywords"
          content="contact interior designer, book design consultation, Venetus Interior contact, hire interior decorator Bangalore"
        />
        <link rel="canonical" href="https://www.venetusinterior.in/contact" />
      </Helmet>

      <div className="w-full bg-black min-h-screen text-white overflow-hidden">
        <ContactHero />
        <ContactSection />
      </div>
    </>
  )
}

export default Contact