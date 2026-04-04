import React from 'react'
import ContactDetail from './ContactDetail'
import {Phone,Mail,MapPin} from "lucide-react"
import Form from './Form'
import Whatsapp from './Whatsapp'
import WhyContact from './WhyContact'
import Review from './Review'
import FAQ from './FAQ'

const ContactSection = () => {
    const ContactDetailData = [
        {
            id:1,
            Icon: Phone,
            Title:"Call Us",
            Method:"tel",
            Detail:"+91 7830015110",
            Para:"Available Mon-Sat, 9 AM - 6 PM"
        },
        {
            id:2,
            Icon:Mail,
            Title:"Email Us",
            Method:"mailto",
            Detail:"info@interiordesign.com",
            Para:"We'll respond within 24 hours"
        },
        {
            id:3,
            Icon:MapPin,
            Title:"Visit Us",
            Method: "map",
            Detail:"Bangalore, India",
            Para:"By appointment"
        }
    ]
  return (
    <div>
    <section className='grid grid-cols-1 lg:grid-cols-3 gap-7 bg-[#F9F8F8] px-7 py-15'>
        {ContactDetailData.map((Data)=>(
            <ContactDetail Icon={Data.Icon} Method ={Data.Method} Detail={Data.Detail} Para={Data.Para}/>
        ))}
    </section>
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-7 bg-[#F9F8F8] pb-20'>
        <Form/>
        <div>
            <Whatsapp/>
            <WhyContact/>
            <Review/>
        </div>
    </section>
        <FAQ/>

    </div>
  )
}

export default ContactSection