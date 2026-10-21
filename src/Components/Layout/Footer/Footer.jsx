import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

// Social SVG Icons (Clean, lightweight vector paths)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: "Modular Kitchen", path: "/Services" },
    { name: "Bedroom Design", path: "/Services" },
    { name: "Living Room Design", path: "/Services" },
    { name: "Wardrobe Design", path: "/Services" },
    { name: "Bathroom Vanity Unit", path: "/Services" },
    { name: "Landscape Design", path: "/Services" },
    { name: "Commercial Interiors", path: "/Services" },
    { name: "Home Theatre", path: "/Services" },
    { name: "Home Renovation", path: "/Services" }
  ];

  const serviceAreaBacklinks = [
    { name: "Interior Designers in Sarjapur Road", path: "/interior-designers-in-sarjapur-road" },
    { name: "Interior Designers in Dommasandra", path: "/interior-designers-in-dommasandra" },
    { name: "Interior Designers in Varthur", path: "/interior-designers-in-varthur" },
    { name: "Interior Designers in Sompura", path: "/interior-designers-in-sompura" },
    { name: "Interior Designers in Muthanallur", path: "/interior-designers-in-muthanallur" },
    { name: "Interior Designers in Whitefield", path: "/interior-designers-in-whitefield" },
    { name: "Interior Designers in HSR Layout", path: "/interior-designers-in-hsr-layout" },
    { name: "Interior Designers in Bellandur", path: "/interior-designers-in-bellandur" },
    { name: "Interior Designers in Indiranagar", path: "/interior-designers-in-indiranagar" }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/About" },
    { name: "Projects", path: "/Portfolio" },
    { name: "Our Process", path: "/Process" },
    { name: "Client Reviews", path: "/testimonial" },
    { name: "Contact", path: "/Contact" },
    { name: "Privacy Policy", path: "/Contact" }
  ];

  const socialLinks = [
    { name: "Instagram", icon: <InstagramIcon />, url: "https://www.instagram.com/venetus_interior/" },
    { name: "LinkedIn", icon: <LinkedinIcon />, url: "https://www.linkedin.com/company/venetus-interior/?viewAsMember=true" },
    { name: "YouTube", icon: <YoutubeIcon />, url: "https://www.youtube.com/@VenetusInterior" },
    { name: "Facebook", icon: <FacebookIcon />, url: "https://www.facebook.com/profile.php?id=61595260975869" }
  ];

  return (
    <footer className="w-full bg-[#0a0a0a] text-white pt-14 md:pt-20 pb-8 border-t border-[#1a1a1a]">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14">
        
        {/* Main 4-Column Footer Grid */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#222222]"
        >
          
          {/* Column 1: Brand & Logo (Spans 4 columns on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            {/* Top section: Logo + Intro Paragraph */}
            <div className="space-y-3 sm:space-y-3.5">
              <NavLink to="/" className="inline-block transition-transform hover:scale-105 duration-300">
                <img
                  src="https://res.cloudinary.com/lbei6xmb/image/upload/v1792067711/Venetus_Interior_gold-and-white_logo_gqrlmw.png"
                  alt="Venetus Interior Bangalore"
                  className="h-16 sm:h-20 md:h-[84px] w-auto object-contain"
                />
              </NavLink>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">
                Venetus Interior crafts bespoke luxury homes and modern living spaces in Bangalore with up to 10-year warranty and guaranteed workmanship.
              </p>
            </div>

            {/* Bottom section: Info with equal gap above & below, followed by Social Icons */}
            <div className="flex flex-col flex-1 justify-end">
              {/* Contact Info (Equal margin above from paragraph & below to social icons) */}
              <div className="space-y-1.5 text-xs text-gray-400 my-4 sm:my-4.5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                  <a href="tel:+919916565945" className="hover:text-primary transition-colors">
                    +91 99165 65945
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                  <a href="mailto:support@venetusinterior.in" className="hover:text-primary transition-colors">
                    support@venetusinterior.in
                  </a>
                </div>
              </div>

              {/* Social Icons — Perfectly aligned with the bottom of Services */}
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: SERVICES (Spans 3 columns on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {servicesLinks.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: SERVICE AREAS - Local SEO Backlinks (Spans 3 columns on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-5">
              Service Areas
            </h3>
            <ul className="space-y-2.5">
              {serviceAreaBacklinks.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: QUICK LINKS (Spans 2 columns on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

        </motion.div>

        {/* Bottom Copyright & SEO Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500"
        >
          <p>
            &copy; {currentYear} Venetus Interior. All rights reserved.
          </p>
          <p className="text-gray-400">
            Bangalore's Premier Luxury Interior Design Studio
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
