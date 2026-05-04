import React from 'react'
import WhyCard from './WhyCard'
import { Award, CheckCircle, Users, Zap, Shield } from "lucide-react"

const featuresData = [
  {
    id: 1,
    icon: Award,
    title: "Premium Materials",
    description: "We use certified brands and transparent material specifications for every project."
  },
  {
    id: 2,
    icon: CheckCircle,
    title: "Transparent Process",
    description: "From design to handover, we keep you informed at every step with regular updates."
  },
  {
    id: 3,
    icon: Users,
    title: "Expert Team",
    description: "Our designers specialize in Bangalore apartment layouts and local preferences."
  },
  {
    id: 4,
    icon: Zap,
    title: "Fast Execution",
    description: "Efficient project management ensures your home is ready on schedule."
  },
  {
    id: 5,
    icon: Shield,
    title: "Warranty Backend",
    description: "10-year warranty on all work gives you complete peace of mind."
  },
  {
    id: 6,
    icon: CheckCircle,
    title: "Proven Track Record",
    description: "4.9/5 rating from 500+ happy families across Bangalore."
  }
]

const WhyChoose = () => {
  return (
    // Mobile aur Desktop padding adjust ki
    <section className='bg-[#F9F8F8] py-16 md:py-24 px-5'>
        
        {/* Invalid max-w-350 ko hata kar valid max-w-7xl lagaya jo 3-grid ke liye perfect width hai */}
        <div className='max-w-7xl mx-auto'>
            
            <div className='flex flex-col items-center justify-center text-center mb-12 md:mb-16'>
                {/* Heading ko fully responsive kiya */}
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-gray-900'>
                    Why Choose Us
                </h2>
                {/* Orphan words rokne ke liye text-pretty aur responsive size add kiya */}
                <p className='text-base md:text-lg text-[#6E4C40] max-w-2xl text-pretty'>
                    We build trust through transparency, quality, and exceptional service.
                </p>
            </div>
            
            {/* Grid gap ko mobile/desktop ke hisaab se tweak kiya */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                {featuresData.map((feature) => (
                    <WhyCard 
                        key={feature.id} 
                        icon={feature.icon} 
                        title={feature.title} 
                        description={feature.description} 
                    />
                ))}
            </div>
            
        </div>
    </section>
  )
}

export default WhyChoose