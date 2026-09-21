import React from 'react'
import ContactDetail from './ContactDetail'
import { Phone, Mail, MapPin } from "lucide-react"
import Form from './Form'
import Whatsapp from './Whatsapp'
import WhyContact from './WhyContact'
import Review from './Review'
import FAQ from './FAQ'
import { motion } from 'framer-motion'
import FadeUp from '../Animations/FadeUp'

const ContactDetailData = [
  { id:1, Icon: Phone,  Title:"Call Us",   Method:"tel",    Detail:"+91 7830015110",          Para:"Available Mon-Sat, 9 AM - 6 PM" },
  { id:2, Icon: Mail,   Title:"Email Us",  Method:"mailto", Detail:"info@venetusinterior.com",  Para:"We'll respond within 24 hours" },
  { id:3, Icon: MapPin, Title:"Visit Us",  Method:"map",    Detail:"Bangalore, India",         Para:"By appointment" },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.93 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 22 },
  },
}

const ContactSection = () => {
  return (
    <div>
      {/* Contact detail cards — staggered */}
      <div className='w-full bg-[#F9F8F8]'>
        <motion.section
          className='max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14 py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7'
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {ContactDetailData.map((Data) => (
          <motion.div key={Data.id} variants={itemVariants}>
            <ContactDetail Icon={Data.Icon} Method={Data.Method} Detail={Data.Detail} Para={Data.Para} />
          </motion.div>
        ))}
        </motion.section>
      </div>

      {/* Form + sidebar — slide in from opposite sides */}
      <div className='w-full bg-[#F9F8F8] pb-14 sm:pb-20'>
        <section className='max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Form />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col gap-4 sm:gap-6"
        >
          <Whatsapp />
          <WhyContact />
          <Review />
        </motion.div>
        </section>
      </div>

      {/* FAQ — fade up */}
      <FadeUp delay={0.05} duration={0.65}>
        <FAQ />
      </FadeUp>
    </div>
  )
}

export default ContactSection
