import React from 'react'
import LastCTA from '../Components/LastCTA/LastCTA'
import HeroCard from '../Components/CommonComponent/HeroCard'
import AboutService from '../Components/Service/AboutService'
import WhyService from '../Components/Service/WhyService'

const Service = () => {
  return (
    <div>
      <HeroCard Title={"Our Services"} Para={"Specialized interior design services for Bangalore homes, from single rooms to complete home transformations."}/>
      <AboutService/>
      <WhyService/>
      <LastCTA/>
    </div>
  )
}

export default Service