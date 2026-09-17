import React from 'react'
import AboutStory from '../Components/About/AboutStory'
import MeetTeam from '../Components/About/MeetTeam'
import AboutLastCta from '../Components/About/AboutLastCta'
import HeroCard from '../Components/CommonComponent/HeroCard'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>About Us | Venetus Interior</title>
        <meta name="description" content="Discover the vision behind Venetus Interior. We specialize in modern, elegant, and dark-themed interior styling that elevates your everyday living spaces." />
        <meta name="keywords" content="about Venetus Interior, interior design experts, luxury home styling, interior decor team, Bangalore interior design" />
        <link rel="canonical" href="https://www.venetusinterior.in/about" />

        <meta property="og:title" content="About Us | Venetus Interior" />
        <meta property="og:description" content="Discover the vision behind Venetus Interior. We specialize in modern, elegant, and dark-themed interior styling that elevates your everyday living spaces." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.venetusinterior.in/about" />
      </Helmet>

      <main className="w-full overflow-x-hidden">
        <HeroCard 
          Title={"About Our Team"} 
          Para={"We are a team of passionate interior designers dedicated to transforming Bangalore homes with elegance, transparency, and quality craftsmanship."} 
        />
        <AboutStory />
        <MeetTeam />
        <AboutLastCta />
      </main>
    </>
  )
}

export default About