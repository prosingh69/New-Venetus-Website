import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Loader2, ChevronDown, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ConsultationModal = ({ isOpen, onClose, modalData = {} }) => {
  const [projectType, setProjectType] = useState('');
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
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
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
      if (formRef.current) {
        formRef.current.reset();
      }
      setProjectType('');

      // Auto close after brief celebration
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-5 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl border-2 border-primary max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close form"
              type="button"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/15 text-primary flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-sans text-2xl font-bold text-gray-900 mb-2">
                  Request Confirmed!
                </h3>
                <p className="text-secondary text-sm max-w-sm">
                  Our senior design consultant will contact you within 24 hours to schedule your session.
                </p>
              </div>
            ) : (
              <>
                {/* Heading */}
                <div className="text-center pr-6 pl-1 mb-5 sm:mb-6">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-gray-900 tracking-tight leading-snug">
                    {title}
                  </h3>
                  <p className="text-secondary text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {subtitle}
                  </p>
                </div>

                {/* Form identical to CompanyIntro */}
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="Name *"
                      className="w-full bg-transparent border-b border-gray-300 focus:border-primary py-2 px-1 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 outline-none transition-colors"
                    />
                  </div>

                  {/* Phone No */}
                  <div>
                    <input
                      type="tel"
                      name="user_phone"
                      required
                      placeholder="Phone No. *"
                      className="w-full bg-transparent border-b border-gray-300 focus:border-primary py-2 px-1 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 outline-none transition-colors"
                    />
                  </div>

                  {/* Email ID */}
                  <div>
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="Email ID *"
                      className="w-full bg-transparent border-b border-gray-300 focus:border-primary py-2 px-1 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 outline-none transition-colors"
                    />
                  </div>

                  {/* Choose Project (Select Dropdown) */}
                  <div className="relative">
                    <select
                      name="project_type"
                      required
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-transparent border-b border-gray-300 focus:border-primary py-2 px-1 text-sm sm:text-base text-gray-900 outline-none transition-colors appearance-none cursor-pointer pr-8"
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

                  {/* Project Location */}
                  <div>
                    <input
                      type="text"
                      name="project_location"
                      placeholder="Your Project Location (e.g. Whitefield, Sarjapur, HSR...)"
                      className="w-full bg-transparent border-b border-gray-300 focus:border-primary py-2 px-1 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 outline-none transition-colors"
                    />
                  </div>

                  {/* Message / Requirements (Optional) */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message / Specific Requirements (Optional)..."
                      className="w-full bg-transparent border-b border-gray-300 focus:border-primary py-2 px-1 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 outline-none transition-colors resize-none h-14 max-h-20"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white font-semibold text-sm sm:text-[15px] py-3.5 px-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer group"
                    >
                      <span>{isLoading ? 'Scheduling Consultation...' : 'Confirm Free Consultation'}</span>
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                      ) : (
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0" />
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[11px] sm:text-[12px] text-gray-500 pt-0.5">
                    🔒 100% Privacy Protected · Zero Spam Calls
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;

