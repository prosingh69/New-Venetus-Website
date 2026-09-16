import React from 'react'
import LastCTA from '../Components/LastCTA/LastCTA'
import HeroCard from '../Components/CommonComponent/HeroCard'
import ProcessStep from '../Components/Process/ProcessStep'
import Material from '../Components/Process/Material'
import WhyWorks from '../Components/Process/WhyWorks'
import { Helmet } from 'react-helmet-async'

const Process = () => {
  return (
    <div>
    <>
      <Helmet prioritizeSeoTags>
        <title>Our Process | Venetus Interior</title>
        <meta name="description" content="Transparent, step-by-step interior design process from initial consultation to final handover with Venetus Interior." />
        <link rel="canonical" href="https://www.venetusinterior.in/process" />
      </Helmet>
      <div>
        <HeroCard Title={"Our Process"} Para={"Transparent, step-by-step process from initial consultation to final handover with complete material transparency."}/>
        <ProcessStep/>
        <Material/>
        <WhyWorks/>
        <LastCTA/>
    </div>
      </div>
    </>
  )
}

export default Process