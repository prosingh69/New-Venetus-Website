import React from 'react'
import TeamCard from './TeamCard'
import { motion } from 'framer-motion'
import FadeUp from '../Animations/FadeUp'

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.93 },
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
    <section className='flex flex-col justify-center items-center bg-white py-10 md:py-20 px-5 md:px-10'>
      <FadeUp delay={0.05} duration={0.65}>
        <h2 className='text-3xl md:text-4xl font-bold mb-3 md:mb-4 lg:mb-3 text-center'>
          Meet Our Team
        </h2>
      </FadeUp>
      <FadeUp delay={0.2} duration={0.6}>
        <p className='text-[#6E4C40] text-base md:text-lg mb-8 md:mb-10 lg:mb-12 text-center max-w-2xl'>
          Expert designers with years of experience in Bangalore interior design
        </p>
      </FadeUp>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 w-full max-w-6xl'
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {TeamMemberData.map((data) => (
          <TeamCard key={data.id} data={data} motionVariants={cardVariants} />
        ))}
      </motion.div>
    </section>
  )
}

export default MeetTeam
