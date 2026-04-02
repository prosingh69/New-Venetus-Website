import React from 'react'
import ServiceCard from './ServiceCard'
import { Armchair, House, Bed, ChefHat } from 'lucide-react'

const AboutService = () => {
    const ServiceData = [
       
        {
            id:1,
            Icon: ChefHat,
            Title: "Kitchen Design",
            Para: "Modern, functional kitchens with premium materials and smart storage solutions. We specialize in compact Bangalore apartment layouts.",
            Points: ["Modular cabinets","Premium appliances","Efficient layout","Warranty included"]
        },
        {
            id:2,
            Icon: Bed,
            Title: "Bedroom Design",
            Para: "Create your personal sanctuary with elegant bedroom designs that maximize comfort and space.",
            Points: ["Custom wardrobes","Lighting design","Comfort-focused","Peaceful aesthetics"]
        },
        {
            id:3,
            Icon: Armchair,
            Title: "Living Room Design",
            Para: "Sophisticated living spaces that bring families together with style and functionality.",
            Points: ["Entertainment zones","Seating arrangements","Ambient lighting","Luxury finishes"]
        },
        {
            id:4,
            Icon: House,
            Title: "Full Home Design",
            Para: "Complete home transformation with cohesive design across all rooms and spaces.",
            Points: ["Integrated design","Material coordination","Project management","Timeline guarantee"]
        }
    ]
    
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#F8F7F7] p-8 md:p-16'>
        {ServiceData.map((Data) => (
            <ServiceCard 
               key={Data.id}
               Icon={Data.Icon}
               Title={Data.Title}
               Para={Data.Para}
               Points={Data.Points}
            />
        ))}
    </section>
  )
}

export default AboutService;