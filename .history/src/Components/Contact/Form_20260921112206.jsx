import { ArrowRight, Loader2 } from 'lucide-react'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

const Form = () => {
  const [projectType, setProjectType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef();
  const GOOGLE_SHEET_API_URL = import.meta.env.VITE_GOOGLE_SHEET_API_URL;

  const HandleData = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(formRef.current);

    const dataForSheet = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      user_phone: formData.get("user_phone"),
      project_type: formData.get("project_type") === "Others" ? formData.get("other_project_type") : formData.get("project_type"),
      message: formData.get("message")
    };

    try {
      await Promise.all([
        emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ),
        fetch(GOOGLE_SHEET_API_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(dataForSheet),
        })
      ]);

      toast.success("Details saved successfully!");

      e.target.reset();
      setProjectType("");

    } catch (error) {
      console.error('❌ Error:', error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <form ref={formRef} onSubmit={HandleData} className='rounded-xl sm:rounded-2xl bg-white p-5 sm:p-7 shadow-lg hover:shadow-xl transition-all'>
        <h2 className='text-xl sm:text-2xl font-semibold mb-3 text-gray-900'>Send us a Message</h2>
      <form
        ref={formRef}
        onSubmit={HandleData}
        className='rounded-xl sm:rounded-2xl bg-white p-5 sm:p-7 md:p-8 shadow-lg hover:shadow-xl transition-all h-full flex flex-col justify-between'
      >
        <h2 className='text-xl sm:text-2xl font-semibold mb-4 text-gray-900'>Send us a Message</h2>

        <label className='block mb-1 text-xs sm:text-sm font-medium text-gray-700'>Name</label>
        <input type="text" name="user_name" placeholder='Your Name' className='border border-black/20 w-full rounded-lg sm:rounded-xl py-2 px-3 sm:px-4 mb-3 text-sm sm:text-base focus:border-[#B74B21] outline-none' required />
        <div className="flex flex-col gap-3.5 flex-1">
          <div>
            <label className='block mb-1 text-xs sm:text-sm font-medium text-gray-700'>Name</label>
            <input
              type="text"
              name="user_name"
              placeholder='Your Name'
              className='border border-black/20 w-full rounded-lg sm:rounded-xl py-2.5 px-3 sm:px-4 text-sm sm:text-base focus:border-[#B74B21] outline-none transition-colors'
              required
            />
          </div>

        <label className='block mb-1 text-xs sm:text-sm font-medium text-gray-700'>Email</label>
        <input type="email" name="user_email" placeholder='Your@gmail.com' className='border border-black/20 w-full rounded-lg sm:rounded-xl py-2 px-3 sm:px-4 mb-3 text-sm sm:text-base focus:border-[#B74B21] outline-none' required />
          <div>
            <label className='block mb-1 text-xs sm:text-sm font-medium text-gray-700'>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder='Your@gmail.com'
              className='border border-black/20 w-full rounded-lg sm:rounded-xl py-2.5 px-3 sm:px-4 text-sm sm:text-base focus:border-[#B74B21] outline-none transition-colors'
              required
            />
          </div>

        <label className='block mb-1 text-xs sm:text-sm font-medium text-gray-700'>Phone</label>
        <input type="text" name="user_phone" placeholder='+91 XXXXX XXXXX' className='border border-black/20 w-full rounded-lg sm:rounded-xl py-2 px-3 sm:px-4 mb-3 text-sm sm:text-base focus:border-[#B74B21] outline-none' required />
          <div>
            <label className='block mb-1 text-xs sm:text-sm font-medium text-gray-700'>Phone</label>
            <input
              type="text"
              name="user_phone"
              placeholder='+91 XXXXX XXXXX'
              className='border border-black/20 w-full rounded-lg sm:rounded-xl py-2.5 px-3 sm:px-4 text-sm sm:text-base focus:border-[#B74B21] outline-none transition-colors'
              required
            />
          </div>

        <label className='block mb-1 text-xs sm:text-sm font-medium text-gray-700'>Project type</label>
        <select name="project_type" className='border border-black/20 w-full rounded-lg sm:rounded-xl p-2 sm:p-2.5 outline-none bg-white mb-3 text-sm sm:text-base focus:border-[#B74B21]' value={projectType} onChange={(e) => setProjectType(e.target.value)} required>
          <option value="">Select a project type</option>
          <option value="Kitchen Design">Kitchen Design</option>
          <option value="Bedroom Design">Bedroom Design</option>
          <option value="Living Room Design">Living Room Design</option>
          <option value="Full Home Design">Full Home Design</option>
          <option value="Others">Others</option>
        </select>
          <div>
            <label className='block mb-1 text-xs sm:text-sm font-medium text-gray-700'>Project type</label>
            <select
              name="project_type"
              className='border border-black/20 w-full rounded-lg sm:rounded-xl p-2.5 outline-none bg-white text-sm sm:text-base focus:border-[#B74B21] transition-colors'
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              required
            >
              <option value="">Select a project type</option>
              <option value="Kitchen Design">Kitchen Design</option>
              <option value="Bedroom Design">Bedroom Design</option>
              <option value="Living Room Design">Living Room Design</option>
              <option value="Full Home Design">Full Home Design</option>
              <option value="Others">Others</option>
            </select>
          </div>

        {projectType === 'Others' && (
          <div className="mb-3">
            <label className='block mb-1 text-xs sm:text-sm font-medium text-gray-700'>Please specify</label>
            <input type="text" name="other_project_type" placeholder='What is the other project?' className='border border-black/20 w-full rounded-lg sm:rounded-xl py-2 px-3 sm:px-4 text-sm sm:text-base' required />
          {projectType === 'Others' && (
            <div>
              <label className='block mb-1 text-xs sm:text-sm font-medium text-gray-700'>Please specify</label>
              <input
                type="text"
                name="other_project_type"
                placeholder='What is the other project?'
                className='border border-black/20 w-full rounded-lg sm:rounded-xl py-2.5 px-3 sm:px-4 text-sm sm:text-base focus:border-[#B74B21] outline-none transition-colors'
                required
              />
            </div>
          )}

          <div className="flex flex-col flex-1">
            <label className='block mb-1 text-xs sm:text-sm font-medium text-gray-700'>Message</label>
            <textarea
              name="message"
              placeholder='Tell us about your project....'
              className='border border-black/20 w-full rounded-lg sm:rounded-xl py-2.5 px-3 sm:px-4 flex-1 min-h-[110px] text-sm sm:text-base outline-none focus:border-[#B74B21] transition-colors resize-none'
              required
            />
          </div>
        )}
        </div>

        <label className='block mb-1 text-xs sm:text-sm font-medium text-gray-700'>Message</label>
        <textarea name="message" placeholder='Tell us about your project....' className='border border-black/20 w-full rounded-lg sm:rounded-xl py-2 px-3 sm:px-4 h-20 max-h-24 text-sm sm:text-base outline-none focus:border-[#B74B21]' required />

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full text-white flex items-center justify-center gap-2 py-2.5 sm:py-3 mt-3 rounded-lg sm:rounded-xl bg-[#B74B21] text-sm sm:text-base font-semibold transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : 'active:scale-98 cursor-pointer hover:bg-[#a0411d]'}`}
          className={`w-full text-white flex items-center justify-center gap-2 py-3 mt-5 rounded-lg sm:rounded-xl bg-[#B74B21] text-sm sm:text-base font-semibold transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : 'active:scale-98 cursor-pointer hover:bg-[#a0411d]'}`}
        >
          <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
          {isLoading ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={18} />}
        </button>
      </form>
    </>
  )
}

export default Form
