import React from 'react'
import HeroCard from '../Components/CommonComponent/HeroCard'
import PortfolioTrust from "../Components/Portfolio/PortfolioTrust"
import PortfolioDetail from '../Components/Portfolio/PortfolioDetail'
import CaseStudy from '../Components/Portfolio/CaseStudy'
import AboutLastCta from '../Components/About/AboutLastCta'
import { Helmet } from 'react-helmet-async'
const Portfolio = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Design Portfolio & Transformations | Venetus Interiors</title>
        <meta name="description" content="Browse the Venetus Interiors portfolio. View our interactive before-and-after galleries and discover our signature sleek, modern room designs." />
        <meta name="keywords" content="interior design portfolio, before and after interiors, modern home gallery, design projects" />
        <link rel="canonical" href="https://new-venetus-website.vercel.app/portfolio" />
      </Helmet>

      <div>
        <HeroCard Title={"Our Portfolio"} Para={"Explore our collection of completed projects showcasing our expertise in Bangalore interior design."} />
        <PortfolioTrust />
        <PortfolioDetail />
        <CaseStudy />
        <AboutLastCta />
      </div>
    </>
  )
}

export default Portfolio