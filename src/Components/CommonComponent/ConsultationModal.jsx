import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Loader2, ChevronDown, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ConsultationModal = ({ isOpen, onClose, modalData = {} }) => {
  const [projectType, setProjectType] = useState('');
  const [isSelectFocused, setIsSelectFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef(null);

  const title = modalData.title || 'Book a Free Design Consultation';
  const subtitle = modalData.subtitle || 'Connect with our senior architects · Free 3D space planning & transparent quotes';
  const defaultProjectType = modalData.projectType || '';

  useEffect(() => {
    if (defaultProjectType) {
      setProjectType(defaultProjectType);
    }
  }, [defaultProjectType]);

  // Lock background scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSuccess(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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

      toast.success('Thank you! Your consultation request has been received.');
      setIsSuccess(true);

      // Meta Pixel: Track Lead Event
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {
          content_name: dataForSheet.service_title || 'Free Design Consultation',
          currency: 'INR',
        });
      }

      if (formRef.current) {
        formRef.current.reset();
      }
      setProjectType('');

      // Auto close after brief confirmation
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
      }, 1600);

    } catch (error) {
      console.error('Submission Error:', error);
      toast.error('Something went wrong. Please try again or WhatsApp us!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3.5 sm:p-5 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Outer Container — Dark Luxury Venetus Theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg bg-[#111114] rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] border border-[#E9C27A]/35 max-h-[90dvh] flex flex-col overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient luxury glow inside modal */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-36 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close form"
              type="button"
              className="absolute top-3.5 sm:top-4 right-3.5 sm:right-4 z-20 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 hover:border-primary/40 flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Inner Scrollable Body — Custom sleek primary scrollbar */}
            <div className="w-full flex-1 overflow-y-auto custom-modal-scrollbar p-5 sm:p-7 md:p-8 relative z-10">
              {isSuccess ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 text-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/10">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white mb-2 tracking-tight">
                    Request Confirmed!
                  </h3>
                  <p className="font-body text-[#CCCCCC] text-sm max-w-sm leading-relaxed">
                    Our senior design consultant will contact you within 24 hours to schedule your session.
                  </p>
                </div>
              ) : (
                <>
                  {/* Heading */}
                  <div className="text-center pr-7 pl-1 mb-6 sm:mb-7">
                    <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-body text-[10px] tracking-[0.2em] uppercase mb-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Venetus Interior
                    </div>
                    <h3 className="font-heading text-2xl sm:text-[28px] font-medium text-white tracking-tight leading-snug">
                      {title}
                    </h3>
                    <p className="font-body text-[#CCCCCC] text-xs sm:text-[13.5px] mt-1.5 leading-relaxed">
                      {subtitle}
                    </p>
                  </div>

                  {/* Form with Animated Floating Outline Labels */}
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Name */}
                    <div className="relative">
                      <input
                        type="text"
                        name="user_name"
                        id="modal_user_name"
                        required
                        placeholder=" "
                        className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-white bg-white/[0.03] border border-white/15 rounded-xl outline-none transition-all duration-200 focus:border-[#E9C27A] focus:bg-white/[0.06] focus:ring-1 focus:ring-[#E9C27A]/30 placeholder-transparent"
                      />
                      <label
                        htmlFor="modal_user_name"
                        className="absolute left-3.5 top-3.5 sm:top-4 px-1.5 bg-[#111114] text-xs sm:text-sm text-white/45 font-normal transition-all duration-200 pointer-events-none origin-left 
                        peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#E9C27A] peer-focus:font-medium
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
                        id="modal_user_phone"
                        required
                        placeholder=" "
                        className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-white bg-white/[0.03] border border-white/15 rounded-xl outline-none transition-all duration-200 focus:border-[#E9C27A] focus:bg-white/[0.06] focus:ring-1 focus:ring-[#E9C27A]/30 placeholder-transparent"
                      />
                      <label
                        htmlFor="modal_user_phone"
                        className="absolute left-3.5 top-3.5 sm:top-4 px-1.5 bg-[#111114] text-xs sm:text-sm text-white/45 font-normal transition-all duration-200 pointer-events-none origin-left 
                        peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#E9C27A] peer-focus:font-medium
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
                        id="modal_user_email"
                        required
                        placeholder=" "
                        className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-white bg-white/[0.03] border border-white/15 rounded-xl outline-none transition-all duration-200 focus:border-[#E9C27A] focus:bg-white/[0.06] focus:ring-1 focus:ring-[#E9C27A]/30 placeholder-transparent"
                      />
                      <label
                        htmlFor="modal_user_email"
                        className="absolute left-3.5 top-3.5 sm:top-4 px-1.5 bg-[#111114] text-xs sm:text-sm text-white/45 font-normal transition-all duration-200 pointer-events-none origin-left 
                        peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#E9C27A] peer-focus:font-medium
                        peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white/80 peer-[:not(:placeholder-shown)]:font-medium"
                      >
                        Email Address <span className="text-primary">*</span>
                      </label>
                    </div>

                    {/* Choose Project (Select Dropdown with Floating Notch) */}
                    <div className="relative">
                      <select
                        name="project_type"
                        id="modal_project_type"
                        required
                        value={projectType}
                        onFocus={() => setIsSelectFocused(true)}
                        onBlur={() => setIsSelectFocused(false)}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-white bg-[#111114] border border-white/15 rounded-xl outline-none transition-all duration-200 focus:border-[#E9C27A] focus:ring-1 focus:ring-[#E9C27A]/30 appearance-none cursor-pointer pr-10"
                      >
                        <option value="" disabled className="bg-[#18181b] text-white/40"></option>
                        <option value="1 BHK Interior" className="bg-[#18181b] text-white">1 BHK Interior</option>
                        <option value="2 BHK Interior" className="bg-[#18181b] text-white">2 BHK Interior</option>
                        <option value="3 BHK Interior" className="bg-[#18181b] text-white">3 BHK Interior</option>
                        <option value="4 BHK / Villa" className="bg-[#18181b] text-white">4 BHK / Villa</option>
                        <option value="Modular Kitchen" className="bg-[#18181b] text-white">Modular Kitchen</option>
                        <option value="Full Home Transformation" className="bg-[#18181b] text-white">Full Home Transformation</option>
                        <option value="Others" className="bg-[#18181b] text-white">Others</option>
                      </select>
                      <label
                        htmlFor="modal_project_type"
                        className={`absolute left-3.5 px-1.5 bg-[#111114] transition-all duration-200 pointer-events-none origin-left ${
                          projectType || isSelectFocused
                            ? '-top-2.5 left-3 text-xs font-medium ' + (isSelectFocused ? 'text-[#E9C27A]' : 'text-white/80')
                            : 'top-3.5 sm:top-4 text-xs sm:text-sm text-white/45 font-normal'
                        }`}
                      >
                        Choose Project <span className="text-primary">*</span>
                      </label>
                      <ChevronDown
                        className={`w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-200 ${
                          isSelectFocused ? 'rotate-180 text-[#E9C27A]' : 'text-white/40'
                        }`}
                      />
                    </div>

                    {/* Project Location */}
                    <div className="relative">
                      <input
                        type="text"
                        name="project_location"
                        id="modal_project_location"
                        placeholder=" "
                        className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-white bg-white/[0.03] border border-white/15 rounded-xl outline-none transition-all duration-200 focus:border-[#E9C27A] focus:bg-white/[0.06] focus:ring-1 focus:ring-[#E9C27A]/30 placeholder-transparent"
                      />
                      <label
                        htmlFor="modal_project_location"
                        className="absolute left-3.5 top-3.5 sm:top-4 px-1.5 bg-[#111114] text-xs sm:text-sm text-white/45 font-normal transition-all duration-200 pointer-events-none origin-left 
                        peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#E9C27A] peer-focus:font-medium
                        peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white/80 peer-[:not(:placeholder-shown)]:font-medium"
                      >
                        Project Location (e.g. Whitefield, Sarjapur, HSR...)
                      </label>
                    </div>

                    {/* Message / Requirements (Optional) */}
                    <div className="relative">
                      <textarea
                        name="message"
                        id="modal_message"
                        placeholder=" "
                        rows="2"
                        className="peer w-full px-4 pt-3.5 pb-2 text-sm sm:text-base text-white bg-white/[0.03] border border-white/15 rounded-xl outline-none transition-all duration-200 focus:border-[#E9C27A] focus:bg-white/[0.06] focus:ring-1 focus:ring-[#E9C27A]/30 placeholder-transparent resize-none h-20"
                      />
                      <label
                        htmlFor="modal_message"
                        className="absolute left-3.5 top-3.5 px-1.5 bg-[#111114] text-xs sm:text-sm text-white/45 font-normal transition-all duration-200 pointer-events-none origin-left 
                        peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#E9C27A] peer-focus:font-medium
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
                        className="w-full inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-neutral-950 font-semibold text-sm sm:text-[15px] py-3.5 sm:py-4 px-6 rounded-xl shadow-lg shadow-black/40 hover:shadow-primary/20 transition-all duration-300 active:scale-95 disabled:opacity-60 cursor-pointer group"
                      >
                        <span>{isLoading ? 'Scheduling Consultation...' : 'Confirm Free Consultation'}</span>
                        {isLoading ? (
                          <Loader2 className="w-4 h-4 animate-spin shrink-0 text-neutral-950" />
                        ) : (
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0 text-neutral-950" />
                        )}
                      </button>
                    </div>

                    <p className="text-center text-[11px] sm:text-[12px] text-white/40 pt-0.5 font-body">
                      🔒 100% Privacy Protected · Zero Spam Calls
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
