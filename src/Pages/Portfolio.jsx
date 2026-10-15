import React from 'react'
import PortfolioHero from '../Components/Portfolio/PortfolioHero'
import PortfolioShowcaseSequence from '../Components/Portfolio/PortfolioShowcaseSequence'
import PortfolioDetail from '../Components/Portfolio/PortfolioDetail'
import CaseStudy from '../Components/Portfolio/CaseStudy'
import AboutLastCta from '../Components/About/AboutLastCta'
import { Helmet } from 'react-helmet-async'

const Portfolio = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Design Portfolio & Transformations | Venetus Interior</title>
        <meta name="description" content="Browse the Venetus Interior portfolio. View our interactive before-and-after galleries and discover our signature sleek, modern room designs." />
        <meta name="keywords" content="interior design portfolio, before and after interior design, modern home gallery, design projects" />
        <link rel="canonical" href="https://www.venetusinterior.in/portfolio" />
      </Helmet>

      <div className="w-full bg-black min-h-screen text-white overflow-hidden">
        <PortfolioHero />
        <PortfolioShowcaseSequence />
        <PortfolioDetail />
        <CaseStudy />
        <AboutLastCta />
      </div>
    </>
  )
}

export default Portfolio