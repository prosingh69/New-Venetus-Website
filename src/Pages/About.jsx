import React from 'react'
import AboutStory from '../Components/About/AboutStory'
import MeetTeam from '../Components/About/MeetTeam'
import AboutLastCta from '../Components/About/AboutLastCta'
import HeroCard from '../Components/CommonComponent/HeroCard'

const About = () => {
  return (
    <div>
        <HeroCard Title={"About Our Team"} Para={"We are a team of passionate interior designers dedicated to transforming Bangalore homes with elegance, transparency, and quality craftsmanship."}/>
        <AboutStory/>
        <MeetTeam/>
        <AboutLastCta/>
    </div>
  )
}

export default About