import { ArrowRight, Loader2 } from 'lucide-react'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { PopupModal } from 'react-calendly'

const Form = () => {
  const [projectType, setProjectType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  
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
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(dataForSheet),
        })
      ]);

      toast.success("Details saved! Let's book a meeting.");
      setIsOpen(true); // Popup open
      
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

      <PopupModal
        url="https://calendly.com/priyanshu1singh9/30min" // <-- Apna URL daalna mat bhoolna
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById("root")}
        
        /* 🎨 UI aur Design Customization (Venetus Theme) */
        pageSettings={{
          backgroundColor: 'ffffff', // White background
          primaryColor: 'B74B21',    // Tumhara theme color (Buttons aur links ke liye)
          textColor: '333333',       // Dark grey text
          hideEventTypeDetails: false,
          hideLandingPageDetails: false
        }}
      />

      <form ref={formRef} onSubmit={HandleData} className='rounded-2xl bg-white p-7 lg:h-169 shadow-xl hover:shadow-2xl transition-all'>
        <h1 className='text-2xl font-semibold mb-3'>Send us a Message</h1>
        
        <label className='block mb-1'>Name</label>
        <input type="text" name="user_name" placeholder='Your Name' className='border border-black/20 w-full rounded-xl py-2 px-4 mb-3' required />
        
        <label className='block mb-1'>Email</label>
        <input type="email" name="user_email" placeholder='Your@gmail.com' className='border border-black/20 w-full rounded-xl py-2 px-4 mb-3' required />
        
        <label className='block mb-1'>Phone</label>
        <input type="text" name="user_phone" placeholder='+91 XXXXX XXXXX' className='border border-black/20 w-full rounded-xl py-2 px-4 mb-3' required />
        
        <label className='block mb-1'>Project type</label>
        <select name="project_type" className='border border-black/20 w-full rounded-xl p-2 outline-none pr-20 bg-white mb-3' value={projectType} onChange={(e) => setProjectType(e.target.value)} required>
          <option value="">Select a project type</option>
          <option value="Kitchen Design">Kitchen Design</option>
          <option value="Bedroom Design">Bedroom Design</option>
          <option value="Living Room Design">Living Room Design</option>
          <option value="Full Home Design">Full Home Design</option>
          <option value="Others">Others</option>
        </select>

        {projectType === 'Others' && (
          <div className="mb-3">
            <label className='block mb-1'>Please specify</label>
            <input type="text" name="other_project_type" placeholder='What is the other project?' className='border border-black/20 w-full rounded-xl py-2 px-4' required />
          </div>
        )}

        <label className='block mb-1'>Message</label>
        <textarea name="message" placeholder='Tell us about your project....' className='border border-black/20 w-full rounded-xl py-2 px-4 h-24 max-h-36' required />

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full text-white flex items-center justify-center gap-2 py-3 mt-2 rounded-xl bg-[#B74B21] transition-all 
            ${isLoading ? 'opacity-70 cursor-not-allowed' : 'active:scale-98 cursor-pointer hover:bg-[#a0411d]'}`}
        >
          <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
          {isLoading ? <Loader2 size={20} className="mt-1.25 animate-spin" /> : <ArrowRight size={20} className="mt-1.25" />}
        </button>
      </form>
    </>
  )
}

export default Form