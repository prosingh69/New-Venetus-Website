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
        <title>About Us | Venetus Interiors</title>
        <meta name="description" content="Discover the vision behind Venetus Interiors. We specialize in modern, elegant, and dark-themed interior styling that elevates your everyday living spaces." />
        <meta name="keywords" content="about Venetus Interiors, interior design experts, luxury home styling, interior decor team, Bangalore interior design" />
        <link rel="canonical" href="https://new-venetus-website.vercel.app/about" />

        
        <meta property="og:title" content="About Us | Venetus Interiors" />
        <meta property="og:description" content="Discover the vision behind Venetus Interiors. We specialize in modern, elegant, and dark-themed interior styling that elevates your everyday living spaces." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://new-venetus-website.vercel.app/about" />
        
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