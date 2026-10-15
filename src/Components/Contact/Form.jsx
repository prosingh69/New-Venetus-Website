import { ArrowRight, Loader2, ChevronDown } from 'lucide-react'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

const Form = () => {
  const [projectType, setProjectType] = useState('')
  const [isSelectFocused, setIsSelectFocused] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const formRef = useRef()
  const GOOGLE_SHEET_API_URL = import.meta.env.VITE_GOOGLE_SHEET_API_URL

  const HandleData = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(formRef.current)
    const projectLoc = formData.get('project_location') || 'N/A'
    const userMsg = formData.get('message') || ''
    const selectedType = formData.get('project_type') === 'Others' ? formData.get('other_project_type') : formData.get('project_type')

    const fullMessage = `Type: ${selectedType || 'N/A'}, Location: ${projectLoc}${userMsg ? `, Message: ${userMsg}` : ''}`

    const dataForSheet = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      user_phone: formData.get('user_phone'),
      project_type: selectedType,
      project_location: projectLoc,
      message: fullMessage,
    }

    try {
      const promises = []

      if (
        import.meta.env.VITE_EMAILJS_SERVICE_ID &&
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ) {
        promises.push(
          emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
        )
      }

      if (GOOGLE_SHEET_API_URL) {
        promises.push(
          fetch(GOOGLE_SHEET_API_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(dataForSheet),
          })
        )
      }

      if (promises.length > 0) {
        await Promise.all(promises)
      }

      toast.success('Thank you! Details submitted successfully.')
      e.target.reset()
      setProjectType('')
    } catch (error) {
      console.error('❌ Error:', error)
      toast.error('Something went wrong! Please try again or WhatsApp us.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <form
        ref={formRef}
        onSubmit={HandleData}
        className="rounded-[24px] bg-[#151518] p-6 sm:p-8 md:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/[0.08] text-white h-full flex flex-col justify-between"
      >
        <div className="flex-1 flex flex-col">
          <h2 className="font-heading text-2xl sm:text-[28px] font-medium text-white tracking-tight leading-snug mb-5">
            Get Instant Quotes with <span className="text-[#E9C27A] italic">No Hidden Fees</span>
          </h2>

          <div className="space-y-4 sm:space-y-4.5 flex-1 flex flex-col">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="user_name"
                id="contact_user_name"
                required
                placeholder=" "
                className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-white bg-[#0D0D0F] border border-white/[0.12] rounded-xl outline-none transition-all duration-200 focus:border-[#E9C27A] focus:ring-1 focus:ring-[#E9C27A]/25 placeholder-transparent font-body font-sans lining-nums"
              />
              <label
                htmlFor="contact_user_name"
                className="absolute left-3.5 top-3.5 sm:top-4 px-1 bg-transparent text-xs sm:text-sm text-white/50 font-normal transition-all duration-200 pointer-events-none origin-left 
                peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#E9C27A] peer-focus:font-semibold
                peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white/70 peer-[:not(:placeholder-shown)]:font-medium font-body"
              >
                Your Name <span className="text-[#E9C27A]">*</span>
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                name="user_phone"
                id="contact_user_phone"
                required
                placeholder=" "
                className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-white bg-[#0D0D0F] border border-white/[0.12] rounded-xl outline-none transition-all duration-200 focus:border-[#E9C27A] focus:ring-1 focus:ring-[#E9C27A]/25 placeholder-transparent font-body font-sans lining-nums tabular-nums"
              />
              <label
                htmlFor="contact_user_phone"
                className="absolute left-3.5 top-3.5 sm:top-4 px-1 bg-transparent text-xs sm:text-sm text-white/50 font-normal transition-all duration-200 pointer-events-none origin-left 
                peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#E9C27A] peer-focus:font-semibold
                peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white/70 peer-[:not(:placeholder-shown)]:font-medium font-body"
              >
                Phone Number <span className="text-[#E9C27A]">*</span>
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="user_email"
                id="contact_user_email"
                required
                placeholder=" "
                className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-white bg-[#0D0D0F] border border-white/[0.12] rounded-xl outline-none transition-all duration-200 focus:border-[#E9C27A] focus:ring-1 focus:ring-[#E9C27A]/25 placeholder-transparent font-body font-sans lining-nums"
              />
              <label
                htmlFor="contact_user_email"
                className="absolute left-3.5 top-3.5 sm:top-4 px-1 bg-transparent text-xs sm:text-sm text-white/50 font-normal transition-all duration-200 pointer-events-none origin-left 
                peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#E9C27A] peer-focus:font-semibold
                peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white/70 peer-[:not(:placeholder-shown)]:font-medium font-body"
              >
                Email Address <span className="text-[#E9C27A]">*</span>
              </label>
            </div>

            {/* Choose Project (Select Dropdown) */}
            <div className="relative">
              <select
                name="project_type"
                id="contact_project_type"
                value={projectType}
                onFocus={() => setIsSelectFocused(true)}
                onBlur={() => setIsSelectFocused(false)}
                onChange={(e) => setProjectType(e.target.value)}
                required
                className="w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-white bg-[#0D0D0F] border border-white/[0.12] rounded-xl outline-none transition-all duration-200 focus:border-[#E9C27A] focus:ring-1 focus:ring-[#E9C27A]/25 appearance-none cursor-pointer pr-10 font-body font-sans lining-nums"
              >
                <option value="" disabled className="bg-[#151518] text-white/60"></option>
                <option value="1 BHK Interior" className="bg-[#151518] text-white font-sans lining-nums">1 BHK Interior</option>
                <option value="2 BHK Interior" className="bg-[#151518] text-white font-sans lining-nums">2 BHK Interior</option>
                <option value="3 BHK Interior" className="bg-[#151518] text-white font-sans lining-nums">3 BHK Interior</option>
                <option value="4 BHK / Villa" className="bg-[#151518] text-white font-sans lining-nums">4 BHK / Villa</option>
                <option value="Modular Kitchen" className="bg-[#151518] text-white font-sans lining-nums">Modular Kitchen</option>
                <option value="Full Home Transformation" className="bg-[#151518] text-white font-sans lining-nums">Full Home Transformation</option>
                <option value="Others" className="bg-[#151518] text-white font-sans lining-nums">Others</option>
              </select>
              <label
                htmlFor="contact_project_type"
                className={`absolute left-3.5 px-1 bg-transparent transition-all duration-200 pointer-events-none origin-left font-body ${
                  projectType || isSelectFocused
                    ? '-top-2.5 left-3 text-xs font-semibold ' + (isSelectFocused ? 'text-[#E9C27A]' : 'text-white/70')
                    : 'top-3.5 sm:top-4 text-xs sm:text-sm text-white/50 font-normal'
                }`}
              >
                Choose Project <span className="text-[#E9C27A]">*</span>
              </label>
              <ChevronDown
                className={`w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-200 ${
                  isSelectFocused ? 'rotate-180 text-[#E9C27A]' : 'text-white/40'
                }`}
              />
            </div>

            {/* If Others is selected */}
            {projectType === 'Others' && (
              <div className="relative">
                <input
                  type="text"
                  name="other_project_type"
                  id="contact_other_project_type"
                  required
                  placeholder=" "
                  className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-white bg-[#0D0D0F] border border-white/[0.12] rounded-xl outline-none transition-all duration-200 focus:border-[#E9C27A] focus:ring-1 focus:ring-[#E9C27A]/25 placeholder-transparent font-body font-sans lining-nums"
                />
                <label
                  htmlFor="contact_other_project_type"
                  className="absolute left-3.5 top-3.5 sm:top-4 px-1 bg-transparent text-xs sm:text-sm text-white/50 font-normal transition-all duration-200 pointer-events-none origin-left 
                  peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#E9C27A] peer-focus:font-semibold
                  peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white/70 peer-[:not(:placeholder-shown)]:font-medium font-body"
                >
                  Please Specify Project <span className="text-[#E9C27A]">*</span>
                </label>
              </div>
            )}

            {/* Project Location */}
            <div className="relative">
              <input
                type="text"
                name="project_location"
                id="contact_project_location"
                placeholder=" "
                className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-white bg-[#0D0D0F] border border-white/[0.12] rounded-xl outline-none transition-all duration-200 focus:border-[#E9C27A] focus:ring-1 focus:ring-[#E9C27A]/25 placeholder-transparent font-body font-sans lining-nums"
              />
              <label
                htmlFor="contact_project_location"
                className="absolute left-3.5 top-3.5 sm:top-4 px-1 bg-transparent text-xs sm:text-sm text-white/50 font-normal transition-all duration-200 pointer-events-none origin-left 
                peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#E9C27A] peer-focus:font-semibold
                peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white/70 peer-[:not(:placeholder-shown)]:font-medium font-body"
              >
                Project Location (e.g. Whitefield, Sarjapur, HSR...)
              </label>
            </div>

            {/* Message / Additional Note — Flexes and expands so Form bottom matches Review card exactly */}
            <div className="relative flex-1 flex flex-col">
              <textarea
                name="message"
                id="contact_message"
                placeholder=" "
                className="peer w-full px-4 pt-3.5 pb-2 text-sm sm:text-base text-white bg-[#0D0D0F] border border-white/[0.12] rounded-xl outline-none transition-all duration-200 focus:border-[#E9C27A] focus:ring-1 focus:ring-[#E9C27A]/25 placeholder-transparent resize-none flex-1 min-h-[120px] sm:min-h-[140px] font-body font-sans lining-nums"
              />
              <label
                htmlFor="contact_message"
                className="absolute left-3.5 top-3.5 px-1 bg-transparent text-xs sm:text-sm text-white/50 font-normal transition-all duration-200 pointer-events-none origin-left 
                peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#E9C27A] peer-focus:font-semibold
                peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white/70 peer-[:not(:placeholder-shown)]:font-medium font-body"
              >
                Message / Specific Requirements (Optional)
              </label>
            </div>
          </div>
        </div>

        <div className="pt-5 sm:pt-6">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-black flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#E9C27A] hover:bg-[#d8b066] text-sm sm:text-base font-semibold shadow-lg shadow-[#E9C27A]/20 transition-all font-body ${
              isLoading ? 'opacity-70 cursor-not-allowed' : 'active:scale-98 cursor-pointer'
            }`}
          >
            <span>{isLoading ? 'Sending Quote Request...' : 'Get Instant Quote'}</span>
            {isLoading ? <Loader2 size={18} className="animate-spin text-black" /> : <ArrowRight size={18} className="text-black" />}
          </button>

          <p className="text-center text-[12px] text-white/50 pt-2.5 font-body font-sans lining-nums">
            🔒 100% Privacy Protected · Zero Spam Calls
          </p>
        </div>
      </form>
    </>
  )
}

export default Form
