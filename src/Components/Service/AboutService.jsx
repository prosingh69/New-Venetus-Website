import React from 'react'
import ServiceCard from './ServiceCard'
import { Armchair, House, Bed, ChefHat } from 'lucide-react'
import { motion } from 'framer-motion'

const ServiceData = [
  { id: 1, Icon: ChefHat,  Title: "Kitchen Design",    Para: "Modern, functional kitchens with premium materials and smart storage solutions. We specialize in compact Bangalore apartment layouts.",  Points: ["Modular cabinets","Premium appliances","Efficient layout","Warranty included"] },
  { id: 2, Icon: Bed,      Title: "Bedroom Design",    Para: "Create your personal sanctuary with elegant bedroom designs that maximize comfort and space.",  Points: ["Custom wardrobes","Lighting design","Comfort-focused","Peaceful aesthetics"] },
  { id: 3, Icon: Armchair, Title: "Living Room Design",Para: "Sophisticated living spaces that bring families together with style and functionality.", Points: ["Entertainment zones","Seating arrangements","Ambient lighting","Luxury finishes"] },
  { id: 4, Icon: House,    Title: "Full Home Design",  Para: "Complete home transformation with cohesive design across all rooms and spaces.", Points: ["Integrated design","Material coordination","Project management","Timeline guarantee"] },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.94 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 250, damping: 22 },
  },
}

const AboutService = () => {
  return (
    <motion.section
      className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 bg-[#F8F7F7] p-4 sm:p-8 md:p-12 lg:p-16 max-w-7xl mx-auto'
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {ServiceData.map((Data) => (
        <ServiceCard
          key={Data.id}
          Icon={Data.Icon}
          Title={Data.Title}
          Para={Data.Para}
          Points={Data.Points}
          motionVariants={cardVariants}
        />
      ))}
    </motion.section>
  )
}

export default AboutService;
