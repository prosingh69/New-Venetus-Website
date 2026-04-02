import React from 'react'
import HeroCard from '../Components/CommonComponent/HeroCard'
import ContactSection from '../Components/Contact/ContactSection'

const Contact = () => {
  return (
    <div>
      <HeroCard Title={"Get In Touch"} Para={"Ready to transform your Bangalore home? Contact us for a free consultation."} />
      <ContactSection/>
    </div>
  )
}

export default Contact