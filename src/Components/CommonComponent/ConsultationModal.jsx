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

          {/* Modal Outer Container — strictly contains scrollbar within rounded border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-primary max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close form"
              type="button"
              className="absolute top-3.5 sm:top-4 right-3.5 sm:right-4 z-20 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Inner Scrollable Body — Custom sleek primary scrollbar */}
            <div className="w-full flex-1 overflow-y-auto custom-modal-scrollbar p-5 sm:p-7 md:p-8">
              {isSuccess ? (
                <div className="py-10 text-center flex flex-col items-center">
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
                  <div className="text-center pr-7 pl-1 mb-6 sm:mb-7">
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-gray-900 tracking-tight leading-snug">
                      {title}
                    </h3>
                    <p className="text-secondary text-xs sm:text-sm mt-1.5 leading-relaxed">
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
                        className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-300 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent"
                      />
                      <label
                        htmlFor="modal_user_name"
                        className="absolute left-3.5 top-3.5 sm:top-4 px-1 bg-transparent text-xs sm:text-sm text-gray-400 font-normal transition-all duration-200 pointer-events-none origin-left 
                        peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold
                        peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600 peer-[:not(:placeholder-shown)]:font-medium"
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
                        className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-300 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent"
                      />
                      <label
                        htmlFor="modal_user_phone"
                        className="absolute left-3.5 top-3.5 sm:top-4 px-1 bg-transparent text-xs sm:text-sm text-gray-400 font-normal transition-all duration-200 pointer-events-none origin-left 
                        peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold
                        peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600 peer-[:not(:placeholder-shown)]:font-medium"
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
                        className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-300 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent"
                      />
                      <label
                        htmlFor="modal_user_email"
                        className="absolute left-3.5 top-3.5 sm:top-4 px-1 bg-transparent text-xs sm:text-sm text-gray-400 font-normal transition-all duration-200 pointer-events-none origin-left 
                        peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold
                        peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600 peer-[:not(:placeholder-shown)]:font-medium"
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
                        className="w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-300 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer pr-10"
                      >
                        <option value="" disabled></option>
                        <option value="1 BHK Interior" className="text-gray-900">1 BHK Interior</option>
                        <option value="2 BHK Interior" className="text-gray-900">2 BHK Interior</option>
                        <option value="3 BHK Interior" className="text-gray-900">3 BHK Interior</option>
                        <option value="4 BHK / Villa" className="text-gray-900">4 BHK / Villa</option>
                        <option value="Modular Kitchen" className="text-gray-900">Modular Kitchen</option>
                        <option value="Full Home Transformation" className="text-gray-900">Full Home Transformation</option>
                        <option value="Others" className="text-gray-900">Others</option>
                      </select>
                      <label
                        htmlFor="modal_project_type"
                        className={`absolute left-3.5 px-1 bg-transparent transition-all duration-200 pointer-events-none origin-left ${
                          projectType || isSelectFocused
                            ? '-top-2.5 left-3 text-xs font-semibold ' + (isSelectFocused ? 'text-primary' : 'text-gray-600')
                            : 'top-3.5 sm:top-4 text-xs sm:text-sm text-gray-400 font-normal'
                        }`}
                      >
                        Choose Project <span className="text-primary">*</span>
                      </label>
                      <ChevronDown
                        className={`w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-200 ${
                          isSelectFocused ? 'rotate-180 text-primary' : 'text-gray-500'
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
                        className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-300 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent"
                      />
                      <label
                        htmlFor="modal_project_location"
                        className="absolute left-3.5 top-3.5 sm:top-4 px-1 bg-transparent text-xs sm:text-sm text-gray-400 font-normal transition-all duration-200 pointer-events-none origin-left 
                        peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold
                        peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600 peer-[:not(:placeholder-shown)]:font-medium"
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
                        className="peer w-full px-4 pt-3.5 pb-2 text-sm sm:text-base text-gray-900 bg-white border border-gray-300 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent resize-none h-20"
                      />
                      <label
                        htmlFor="modal_message"
                        className="absolute left-3.5 top-3.5 px-1 bg-transparent text-xs sm:text-sm text-gray-400 font-normal transition-all duration-200 pointer-events-none origin-left 
                        peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold
                        peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600 peer-[:not(:placeholder-shown)]:font-medium"
                      >
                        Message / Specific Requirements (Optional)
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-neutral-950 font-semibold text-sm sm:text-[15px] py-3.5 sm:py-4 px-6 rounded-xl shadow-md shadow-black/20 hover:shadow-lg hover:shadow-primary/15 transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer group"
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
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
