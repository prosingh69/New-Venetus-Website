import React from 'react'
import ContactDetail from './ContactDetail'
import { Phone, Mail, MapPin } from 'lucide-react'
import Form from './Form'
import Whatsapp from './Whatsapp'
import WhyContact from './WhyContact'
import Review from './Review'
import HomeFAQ from '../HomeFAQ/HomeFAQ'
import { motion } from 'framer-motion'
import FadeUp from '../Animations/FadeUp'

const ContactDetailData = [
  {
    id: 1,
    Icon: Phone,
    Title: 'Call Us Directly',
    Method: 'tel',
    Detail: '+91 99165 65945',
    Para: 'Available Mon-Sat, 9 AM - 6 PM',
  },
  {
    id: 2,
    Icon: Mail,
    Title: 'Email Us',
    Method: 'mailto',
    Detail: 'support@venetusinterior.in',
    Para: "We'll respond within 24 hours",
  },
  {
    id: 3,
    Icon: MapPin,
    Title: 'Visit Our Studio',
    Method: 'map',
    Detail: 'Bangalore, India',
    Para: 'By appointment with senior architect',
  },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 240, damping: 22 },
  },
}

const ContactSection = () => {
  return (
    <div className="w-full bg-[#0A0A0B] text-white relative">
      {/* ── Contact detail 3-card cards (Staggered) ── */}
      <div className="w-full bg-[#0A0A0B] border-b border-white/[0.08] relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/[0.03] blur-[140px] rounded-full pointer-events-none" />

        <motion.section
          className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14 py-12 sm:py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 relative z-10"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {ContactDetailData.map((Data) => (
            <motion.div key={Data.id} variants={itemVariants}>
              <ContactDetail
                Icon={Data.Icon}
                Title={Data.Title}
                Method={Data.Method}
                Detail={Data.Detail}
                Para={Data.Para}
              />
            </motion.div>
          ))}
        </motion.section>
      </div>

      {/* ── Main Form + Sidebar Section ── */}
      <div className="w-full bg-[#0A0A0B] py-14 sm:py-20 md:py-24 relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-primary/[0.025] blur-[150px] rounded-full pointer-events-none" />

        <section className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-9 relative z-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full flex flex-col"
          >
            <Form />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-5 sm:gap-6 h-full justify-between"
          >
            <Whatsapp />
            <WhyContact />
            <Review />
          </motion.div>
        </section>
      </div>

      {/* ── FAQ Section (Matching Home & About Pages) ── */}
      <HomeFAQ />
    </div>
  )
}

export default ContactSection
