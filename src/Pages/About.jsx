import React from 'react'
import AboutStory from '../Components/About/AboutStory'
import MeetTeam from '../Components/About/MeetTeam'
import HomeFAQ from '../Components/HomeFAQ/HomeFAQ'
import AboutLastCta from '../Components/About/AboutLastCta'
import AboutHero from '../Components/About/AboutHero'
import AboutIntro from '../Components/About/AboutIntro'
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

      <div className="w-full bg-black min-h-screen text-white overflow-hidden">
        <AboutHero />
        <AboutIntro />
        <AboutStory />
        <MeetTeam />
        <HomeFAQ />
        <AboutLastCta />
      </div>
    </>
  )
}

export default About