import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, CheckCircle2, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import LettersPullUp from '../Animations/LettersPullUp';
import FadeUp from '../Animations/FadeUp';

const CompanyIntro = ({ locationName = 'Bangalore' }) => {
  const [projectType, setProjectType] = useState('');
  const [isSelectFocused, setIsSelectFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const GOOGLE_SHEET_API_URL = import.meta.env.VITE_GOOGLE_SHEET_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(formRef.current);
    const userMsg = formData.get('message') || '';
    const projectLoc = formData.get('project_location') || 'N/A';
    const projectTypeVal = formData.get('project_type') || 'N/A';

    const fullMessage = `Type: ${projectTypeVal}, Location: ${projectLoc}${userMsg ? `, Message: ${userMsg}` : ''}`;

    const dataForSheet = {
      user_name: formData.get('user_name'),
      user_phone: formData.get('user_phone'),
      user_email: formData.get('user_email'),
      project_type: projectTypeVal,
      project_location: projectLoc,
      message: fullMessage
    };

    try {
      const promises = [];

      // EmailJS send (if keys are configured)
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
        );
      }

      // Google Sheet API send (if URL is configured)
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
        );
      }

      if (promises.length > 0) {
        await Promise.all(promises);
      }

      toast.success('Thank you! Your quote request has been received.');
      e.target.reset();
      setProjectType('');
    } catch (error) {
      console.error('Submission Error:', error);
      toast.error('Something went wrong. Please try again or WhatsApp us!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#18181b] py-14 sm:py-18 md:py-22 border-t border-b border-white/10 relative overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Subtle background ambient glow */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">

          {/* Left Column — Company Information (Matches form top and bottom exactly) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <h2 className="font-heading text-h2 font-medium text-white tracking-[-0.02em] leading-[1.15] mb-5 sm:mb-6 text-center lg:text-left text-balance">
                <LettersPullUp
                  text="Interior Design Company in Bangalore"
                  highlightWord="Bangalore"
                  highlightClass="text-[#E9C27A] italic font-heading font-medium"
                  startDelay={0.1}
                  charDelay={0.032}
                  align="responsive-lg"
                />
              </h2>

              <FadeUp delay={0.25} duration={0.65}>
                <div className="space-y-4 sm:space-y-4.5 font-body text-[15px] sm:text-[16px] text-[#D4D4D8] leading-[1.7] text-justify hyphens-auto px-1 sm:px-0">
                  <p>
                    At <strong className="text-white font-semibold">Venetus Interior</strong>, we create bespoke home interiors that bring together thoughtful design, functionality, and refined finishes. Started in 2023 with 40+ completed homes, we craft spaces that truly reflect your lifestyle, personal preferences, and daily requirements.
                  </p>

                  <p>
                    The name <strong className="text-white font-semibold">Venetus</strong> represents our foundational philosophy — master craftsmanship, architectural precision, and timeless elegance coming together to create beautiful, enduring homes.
                  </p>

                  <p>
                    As a trusted bespoke interior design studio in {locationName && locationName !== 'Bangalore' ? `${locationName}, Bangalore` : 'Bangalore'}, we focus on finesse, factory-grade precision manufacturing, and attention to detail at every phase of the journey. From ergonomic space planning and customized modular execution to final on-site installation, all backed by up to a <strong className="text-white font-semibold">10-year warranty</strong>.
                  </p>

                  <p>
                    If you are looking to create a home that is distinctly yours, our dedicated team of architects, interior designers, and project managers is here to bring your vision to life with complete transparency and on-time handover.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Trust Highlights (Aligned with the bottom of the form card) */}
            <FadeUp delay={0.35} duration={0.6}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 pt-5 border-t border-white/10 font-body">
                <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>10-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>In-House Execution</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>No Hidden Fees</span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right Column — Instant Quote Form Card */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-[#2e2e2e] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-9 shadow-2xl border-2 border-primary relative"
            >
              {/* Form Title */}
              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white text-center mb-6 sm:mb-7 tracking-tight leading-snug">
                Get Instant Quotes with{' '}
                <span className="text-primary italic font-medium">No Hidden Fees</span>
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="user_name"
                    id="intro_user_name"
                    required
                    placeholder=" "
                    className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-white bg-[#222222] border border-white/20 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent"
                  />
                  <label
                    htmlFor="intro_user_name"
                    className="absolute left-3.5 top-3.5 sm:top-4 px-1 bg-transparent text-xs sm:text-sm text-white/50 font-normal transition-all duration-200 pointer-events-none origin-left 
                    peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold
                    peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white/80 peer-[:not(:placeholder-shown)]:font-medium"
                  >
                    Your Name <span className="text-primary">*</span>
                  </label>
                </div>

                {/* Phone No */}
                <div className="relative">
                  <input
                    type="tel"
                    name="user_phone"
                    id="intro_user_phone"
                    required
                    placeholder=" "
                    className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-white bg-[#222222] border border-white/20 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent"
                  />
                  <label
                    htmlFor="intro_user_phone"
                    className="absolute left-3.5 top-3.5 sm:top-4 px-1 bg-transparent text-xs sm:text-sm text-white/50 font-normal transition-all duration-200 pointer-events-none origin-left 
                    peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold
                    peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white/80 peer-[:not(:placeholder-shown)]:font-medium"
                  >
                    Phone Number <span className="text-primary">*</span>
                  </label>
                </div>

                {/* Email ID */}
                <div className="relative">
                  <input
                    type="email"
                    name="user_email"
                    id="intro_user_email"
                    required
                    placeholder=" "
                    className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-white bg-[#222222] border border-white/20 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent"
                  />
                  <label
                    htmlFor="intro_user_email"
                    className="absolute left-3.5 top-3.5 sm:top-4 px-1 bg-transparent text-xs sm:text-sm text-white/50 font-normal transition-all duration-200 pointer-events-none origin-left 
                    peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold
                    peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white/80 peer-[:not(:placeholder-shown)]:font-medium"
                  >
                    Email Address <span className="text-primary">*</span>
                  </label>
                </div>

                {/* Choose Project (Select Dropdown) */}
                <div className="relative">
                  <select
                    name="project_type"
                    id="intro_project_type"
                    required
                    value={projectType}
                    onFocus={() => setIsSelectFocused(true)}
                    onBlur={() => setIsSelectFocused(false)}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-white bg-[#222222] border border-white/20 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer pr-10"
                  >
                    <option value="" disabled></option>
                    <option value="1 BHK Interior" className="bg-[#222222] text-white">1 BHK Interior</option>
                    <option value="2 BHK Interior" className="bg-[#222222] text-white">2 BHK Interior</option>
                    <option value="3 BHK Interior" className="bg-[#222222] text-white">3 BHK Interior</option>
                    <option value="4 BHK / Villa" className="bg-[#222222] text-white">4 BHK / Villa</option>
                    <option value="Modular Kitchen" className="bg-[#222222] text-white">Modular Kitchen</option>
                    <option value="Full Home Transformation" className="bg-[#222222] text-white">Full Home Transformation</option>
                    <option value="Others" className="bg-[#222222] text-white">Others</option>
                  </select>
                  <label
                    htmlFor="intro_project_type"
                    className={`absolute left-3.5 px-1 bg-transparent transition-all duration-200 pointer-events-none origin-left ${
                      projectType || isSelectFocused
                        ? '-top-2.5 left-3 text-xs font-semibold ' + (isSelectFocused ? 'text-primary' : 'text-white/80')
                        : 'top-3.5 sm:top-4 text-xs sm:text-sm text-white/50 font-normal'
                    }`}
                  >
                    Choose Project <span className="text-primary">*</span>
                  </label>
                  <ChevronDown
                    className={`w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-200 ${
                      isSelectFocused ? 'rotate-180 text-primary' : 'text-white/50'
                    }`}
                  />
                </div>

                {/* Project Location */}
                <div className="relative">
                  <input
                    type="text"
                    name="project_location"
                    id="intro_project_location"
                    placeholder=" "
                    className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-white bg-[#222222] border border-white/20 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent"
                  />
                  <label
                    htmlFor="intro_project_location"
                    className="absolute left-3.5 top-3.5 sm:top-4 px-1 bg-transparent text-xs sm:text-sm text-white/50 font-normal transition-all duration-200 pointer-events-none origin-left 
                    peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold
                    peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white/80 peer-[:not(:placeholder-shown)]:font-medium"
                  >
                    Project Location (e.g. Whitefield, Sarjapur, HSR...)
                  </label>
                </div>

                {/* Message / Requirements (Optional) */}
                <div className="relative">
                  <textarea
                    name="message"
                    id="intro_message"
                    placeholder=" "
                    rows="2"
                    className="peer w-full px-4 pt-3.5 pb-2 text-sm sm:text-base text-white bg-[#222222] border border-white/20 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent resize-none h-20"
                  />
                  <label
                    htmlFor="intro_message"
                    className="absolute left-3.5 top-3.5 px-1 bg-transparent text-xs sm:text-sm text-white/50 font-normal transition-all duration-200 pointer-events-none origin-left 
                    peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold
                    peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white/80 peer-[:not(:placeholder-shown)]:font-medium"
                  >
                    Message / Specific Requirements (Optional)
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-neutral-950 font-bold text-sm sm:text-[15px] py-3.5 px-6 rounded-xl shadow-md shadow-black/20 hover:shadow-lg hover:shadow-primary/15 transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer group"
                  >
                    <span>{isLoading ? 'Sending Quote Request...' : 'Get Instant Quote'}</span>
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin shrink-0 text-neutral-950" />
                    ) : (
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0 text-neutral-950" />
                    )}
                  </button>
                </div>

                <p className="text-center text-[12px] text-gray-500 pt-1">
                  🔒 100% Privacy Protected · Zero Spam Calls
                </p>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;

