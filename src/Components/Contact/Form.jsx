import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'

const Form = () => {
  const [projectType, setProjectType] = useState("");
  const HandleData = (e) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={HandleData} className='rounded-2xl bg-white p-7 lg:h-169 shadow-xl hover:shadow-2xl'>
      <h1 className='text-2xl font-semibold mb-3'>Send us a Message</h1>
      <label className='block mb-1' >Name</label>
      <input type="text" placeholder='Your Name' className='border border-black/20 w-full rounded-xl py-2 px-4 mb-3' />
      <label className='block mb-1' >Email</label>
      <input type="text" placeholder='Your@gmail.com' className='border border-black/20 w-full rounded-xl py-2 px-4 mb-3' />
      <label className='block mb-1' >Phone</label>
      <input type="text" placeholder='+91 XXXXX XXXXX' className='border border-black/20 w-full rounded-xl py-2 px-4 mb-3' />
      <label className='block mb-1' >Project type</label>
      <select className='border border-black/20 w-full rounded-xl p-2 outline-none pr-20 bg-white mb-3' value={projectType} onChange={(e) => setProjectType(e.target.value)} name="" id="">
        <option value="">Select a porject type</option>
        <option value="Kitchen Design">Kitchen Design</option>
        <option value="Bedroom Design">Bedroom Design</option>
        <option value="Living Room Design">Living Room Design</option>
        <option value="Full Home Design">Full Home Design</option>
        <option value="Others">Others</option>
      </select>
      {projectType === 'Others' && (
        <div className="mb-3">
          <label className='block mb-1'>Please specify project type</label>
          <input
            type="text"
            placeholder='What is the other project?'
            className='border border-black/20 w-full rounded-xl py-2 px-4'
          />
        </div>
      )}
      <label className='block mb-1' >Message</label>
      <textarea type="text" placeholder='Tell us about your project....' className='border border-black/20 w-full rounded-xl py-2 px-4 h-24 max-h-36' />

      <button
        type="submit"
        className='active:scale-98 w-full text-white flex items-center justify-center gap-2 py-3 mt-2 rounded-xl bg-[#B74B21] cursor-pointer transition-all'
      >
        <span>Send Message</span>
        <ArrowRight size={20} className="mt-1.25" />
      </button>
    </form>
  )
}

export default Form