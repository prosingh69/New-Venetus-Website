import React from 'react'
import {Check} from "lucide-react"
const WhyContact = () => {
    const Points = ["Free consultation - no obligation","Expert advice tailored to your needs","Transparent pricing and timelines","Quick response within 24 hours","Customized design solutions"]
  return (
    <div className='bg-white px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl mt-8'>
        <h2 className='text-2xl font-bold mb-3 '>Why Contact Us?</h2>
        <ul>
          {  Points.map((Data,index)=>(
              <li key={index} className='flex mb-2 gap-2 '><Check color='#B74B21'/>{Data}</li>
          ))}
        </ul>
    </div>
  )
}

export default WhyContact