import React from 'react'
import TeamCard from './TeamCard'
import { motion } from 'framer-motion'
import FadeUp from '../Animations/FadeUp'

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.93 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 250, damping: 22 },
  },
}

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const MeetTeam = () => {
  const TeamMemberData = [
    {
      id: 1,
      Profile: "https://randomuser.me/api/portraits/men/32.jpg",
      Name: "Abhinay Singh",
      Profession: "Designer",
      Detail: "15+ years of experience in luxury interior design. Specializes in modern and contemporary designs."
    },
    {
      id: 2,
      Profile: "https://randomuser.me/api/portraits/men/45.jpg",
      Name: "Rahul Sharma",
      Profession: "Project Manager",
      Detail: "10+ years managing high-end residential projects. Ensures timely and seamless execution."
    },
    {
      id: 3,
      Profile: "https://randomuser.me/api/portraits/women/44.jpg",
      Name: "Priya Patel",
      Profession: "Design Planner",
      Detail: "Expert in spatial planning and functional layouts. Maximizes utility without compromising style."
    }
  ]

  return (
    <section className='w-full bg-white py-10 sm:py-16 md:py-20'>
      <div className='max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14 flex flex-col items-center'>
        <FadeUp delay={0.05} duration={0.65}>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-center text-balance'>
          Meet Our Team
        </h2>
      </FadeUp>
      <FadeUp delay={0.18} duration={0.6}>
        <p className='text-[#6E4C40] text-sm sm:text-base md:text-lg mb-8 sm:mb-10 text-center text-balance max-w-2xl px-2'>
          Expert designers with years of experience in Bangalore interior design
        </p>
      </FadeUp>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl'
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {TeamMemberData.map((data) => (
          <TeamCard key={data.id} data={data} motionVariants={cardVariants} />
        ))}
      </motion.div>
      </div>
    </section>
  )
}

export default MeetTeam
