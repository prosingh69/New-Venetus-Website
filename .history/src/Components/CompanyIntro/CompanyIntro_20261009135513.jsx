import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, CheckCircle2, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import FadeUp from '../Animations/FadeUp';

const CompanyIntro = () => {
  const [projectType, setProjectType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const GOOGLE_SHEET_API_URL = import.meta.env.VITE_GOOGLE_SHEET_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(formRef.current);
    const dataForSheet = {
      user_name: formData.get('user_name'),
      user_phone: formData.get('user_phone'),
      user_email: formData.get('user_email'),
      project_type: formData.get('project_type'),
      project_name: formData.get('project_name'),
      project_location: formData.get('project_location'),
      message: `Project: ${formData.get('project_name') || 'N/A'}, Location: ${formData.get('project_location') || 'N/A'}, Type: ${formData.get('project_type') || 'N/A'}`
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
    <section className="w-full bg-black py-16 sm:py-20 md:py-24 border-t border-b border-white/10 relative overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column — Company Information */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeUp delay={0.1} duration={0.6}>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-white tracking-tight leading-[1.18] mb-6">
                Interior Design Company in{' '}
                <span className="text-primary italic">Bangalore</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.25} duration={0.65}>
              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-[16px] text-gray-300 font-normal leading-relaxed">
                <p>
                  At <strong className="text-white font-semibold">Venetus Interior</strong>, we create bespoke home interiors that bring together thoughtful design, functionality, and refined finishes. With 10+ years of expertise and 50+ completed homes, we craft spaces that truly reflect your lifestyle, personal preferences, and daily requirements.
                </p>

                <p>
                  The name <strong className="text-white font-semibold">Venetus</strong> represents our foundational philosophy — master craftsmanship, architectural precision, and timeless elegance coming together to create beautiful, enduring homes.
                </p>

                <p>
                  As a trusted bespoke interior design studio in Bangalore, we focus on finesse, factory-grade precision manufacturing, and attention to detail at every phase of the journey. From ergonomic space planning and customized modular execution to final on-site installation, all backed by up to a <strong className="text-white font-semibold">10-year warranty</strong>.
                </p>

                <p>
                  If you are looking to create a home that is distinctly yours, our dedicated team of architects, interior designers, and project managers is here to bring your vision to life with complete transparency and on-time handover.
                </p>
              </div>
            </FadeUp>

            {/* Trust Highlights */}
            <FadeUp delay={0.35} duration={0.6}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/10">
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
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-9 shadow-2xl border-2 border-primary relative"
            >
              {/* Form Title */}
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-7 tracking-tight leading-snug">
                Get Instant Quotes with{' '}
                <span className="text-primary">No Hidden Fees</span>
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Name *"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-primary py-2.5 px-1 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 outline-none transition-colors"
                  />
                </div>

                {/* Phone No */}
                <div>
                  <input
                    type="tel"
                    name="user_phone"
                    required
                    placeholder="Phone No. *"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-primary py-2.5 px-1 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 outline-none transition-colors"
                  />
                </div>

                {/* Email ID */}
                <div>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Email ID *"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-primary py-2.5 px-1 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 outline-none transition-colors"
                  />
                </div>

                {/* Choose Project (Select Dropdown) */}
                <div className="relative">
                  <select
                    name="project_type"
                    required
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-300 focus:border-primary py-2.5 px-1 text-sm sm:text-base text-gray-900 outline-none transition-colors appearance-none cursor-pointer pr-8"
                  >
                    <option value="" disabled className="text-gray-400">
                      Choose Project *
                    </option>
                    <option value="1 BHK Interior" className="text-gray-900">1 BHK Interior</option>
                    <option value="2 BHK Interior" className="text-gray-900">2 BHK Interior</option>
                    <option value="3 BHK Interior" className="text-gray-900">3 BHK Interior</option>
                    <option value="4 BHK / Villa" className="text-gray-900">4 BHK / Villa</option>
                    <option value="Modular Kitchen" className="text-gray-900">Modular Kitchen</option>
                    <option value="Full Home Transformation" className="text-gray-900">Full Home Transformation</option>
                    <option value="Others" className="text-gray-900">Others</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-500 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Project Name */}
                <div>
                  <input
                    type="text"
                    name="project_name"
                    placeholder="Your Project Name (e.g. Prestige, Sobha...)"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-primary py-2.5 px-1 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 outline-none transition-colors"
                  />
                </div>

                {/* Project Location */}
                <div>
                  <input
                    type="text"
                    name="project_location"
                    placeholder="Your Project Location (e.g. Whitefield, HSR...)"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-primary py-2.5 px-1 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 outline-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white font-semibold text-sm sm:text-[15px] py-3.5 px-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer group"
                  >
                    <span>{isLoading ? 'Sending Quote Request...' : 'Get Instant Quote'}</span>
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                    ) : (
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0" />
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

