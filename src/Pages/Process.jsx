import React from 'react'
import LastCTA from '../Components/LastCTA/LastCTA'
import HeroCard from '../Components/CommonComponent/HeroCard'
import ProcessStep from '../Components/Process/ProcessStep'
import Material from '../Components/Process/Material'
import WhyWorks from '../Components/Process/WhyWorks'

const Process = () => {
  return (
    <div>
        <HeroCard Title={"Our Process"} Para={"Transparent, step-by-step process from initial consultation to final handover with complete material transparency."}/>
        <ProcessStep/>
        <Material/>
        <WhyWorks/>
        <LastCTA/>
    </div>
  )
}

export default Process