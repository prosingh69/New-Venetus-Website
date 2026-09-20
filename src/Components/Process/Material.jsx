import React from 'react'
import MaterialCard from './MaterialCard'
import { motion } from 'framer-motion'
import FadeUp from '../Animations/FadeUp'

const MaterialData = [
  { id:1, Name:"Plywood",  Brands:["Greenply","Merino","BWR Grade"],       Grades:"Marine Grade" },
  { id:2, Name:"Hardware", Brands:["Hafele","Blum","Hettich"],             Grades:"Premium" },
  { id:3, Name:"Paints",   Brands:["Asian Paints","Berger","Nippon"],      Grades:"Premium Emulsion" },
  { id:4, Name:"Flooring", Brands:["Kajaria","Somany","Vitrified Tiles"],  Grades:"Premium" },
  { id:5, Name:"Lighting", Brands:["Philips","Havells","Crompton"],        Grades:"LED Energy Efficient" },
  { id:6, Name:"Fixtures", Brands:["Jaquar","Hindware","Cera"],            Grades:"Premium" },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const Material = () => {
  return (
    <section className='py-20 bg-white'>
      <FadeUp delay={0.05} duration={0.65}>
        <h2 className='text-4xl font-bold text-center mb-1'>Material Transparency</h2>
      </FadeUp>
      <FadeUp delay={0.2} duration={0.6}>
        <p className='text-lg text-center text-[#6E4C5F] mb-2'>We use certified premium brands and grades for every project</p>
      </FadeUp>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 gap-6 py-4 px-7'
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {MaterialData.map((Data) => (
          <MaterialCard key={Data.id} Name={Data.Name} Brands={Data.Brands} Grades={Data.Grades} motionVariants={cardVariants} />
        ))}
      </motion.div>
    </section>
  )
}

export default Material
