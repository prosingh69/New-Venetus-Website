import React from 'react'
import HeroCard from '../Components/CommonComponent/HeroCard'
import PortfolioTrust from "../Components/Portfolio/PortfolioTrust"
import PortfolioDetail from '../Components/Portfolio/PortfolioDetail'
import CaseStudy from '../Components/Portfolio/CaseStudy'
import AboutLastCta from '../Components/About/AboutLastCta'
const Portfolio = () => {
  return (
    <div>
        <HeroCard Title={"Our Portfolio"} Para={"Explore our collection of completed projects showcasing our expertise in Bangalore interior design."}/>
        <PortfolioTrust/>
        <PortfolioDetail/>
        <CaseStudy/>
        <AboutLastCta/>
    </div>
  )
}

export default Portfolio