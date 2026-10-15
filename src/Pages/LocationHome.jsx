import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LocationHero from '../Components/Hero/LocationHero';
import OurDesignService from '../Components/OurDesignService/OurDesignService';
import InteriorsByProperty from '../Components/InteriorsByProperty/InteriorsByProperty';
import SimpleProcess from '../Components/Process/SimpleProcess';
import CompanyIntro from '../Components/CompanyIntro/CompanyIntro';
import ResidentialProjects from '../Components/ResidentialProjects/ResidentialProjects';
import WhyChoose from '../Components/WhyChoose/WhyChoose';
import Testimonial from '../Components/Testimonial/Testimonial';
import TestimonialVideoSection from '../Components/Testimonial/TestimonialVideoSection';
import HomeFAQ from '../Components/HomeFAQ/HomeFAQ';
import LastCTA from '../Components/LastCTA/LastCTA';

// Predefined location configurations with tailored metadata and hyper-local project details
export const locationsData = {
  'sarjapur-road': {
    name: 'Sarjapur Road',
    title: 'Interior Designers in Sarjapur Road, Bangalore | Venetus Interior',
    desc: 'Top interior designers on Sarjapur Road, Bangalore. Completed and ongoing projects at Sobha Royal Pavilion & top residential communities. 10-year warranty & flawless execution.',
    image: '/premium.jpg',
    highlightProject: 'Sobha Royal Pavilion (Completed & 2 Ongoing Projects)',
    secondHeroStatement: 'Delivering turnkey luxury interiors at Sobha Royal Pavilion & top residential communities across Sarjapur Road. From customized modular kitchens to complete living room woodwork, every home is crafted with German fittings, in-house factory precision, and a guaranteed 10-year warranty.',
    apartments: ['Sobha Royal Pavilion', 'Prestige Ferns Residency', 'Assetz 63 Degree East', 'Mana Foresta'],
    subTag: 'Sarjapur Road · Sobha Royal Pavilion Living'
  },
  'dommasandra': {
    name: 'Dommasandra',
    title: 'Interior Designers in Dommasandra, Bangalore | Venetus Interior',
    desc: 'Leading interior designers in Dommasandra & The Prestige City, Bangalore. Premium modular kitchens, custom wardrobes, and luxury turnkey interiors.',
    image: '/design.jpg',
    highlightProject: 'The Prestige City (Active Ongoing Designs)',
    secondHeroStatement: 'Transforming luxury residences at The Prestige City township and Dommasandra. We specialize in bespoke modular woodwork, custom acrylic and PU finish kitchens, and full turnkey transformations crafted with seamless precision and up to 10-year warranty.',
    apartments: ['The Prestige City', 'Prestige Avalon Park', 'Prestige Eden Park', 'Prestige Meridian Park'],
    subTag: 'Dommasandra · The Prestige City Communities'
  },
  'varthur': {
    name: 'Varthur',
    title: 'Interior Designers in Varthur, Bangalore | Venetus Interior',
    desc: 'Best interior designers in Varthur, Bangalore. Active projects at SSVR Niyaara & nearby apartments. Luxury living spaces crafted with transparent pricing.',
    image: '/kitchen1.jpeg',
    highlightProject: 'SSVR Niyaara (Active Ongoing Project)',
    secondHeroStatement: 'Creating modern living spaces at SSVR Niyaara & premier apartment communities in Varthur. Turnkey residential interiors, ergonomic modular storage, and bespoke finishes delivered with transparent timelines and 10-year warranty.',
    apartments: ['SSVR Niyaara', 'Prestige Lakeside Habitat', 'Candeur Landmark'],
    subTag: 'Varthur · SSVR Niyaara Residences'
  },
  'sompura': {
    name: 'Sompura',
    title: 'Interior Designers in Sompura, Bangalore | Venetus Interior',
    desc: 'Specialized interior designers in Sompura Gate & Modern Spaces, Sarjapur Road. Turnkey residential design, modular woodwork, and 10-year warranty.',
    image: '/bedroom.jpeg',
    highlightProject: 'Modern Spaces (Completed & Ongoing Projects)',
    secondHeroStatement: 'Bespoke apartment interiors at Modern Spaces & Sompura Gate, Sarjapur Road. In-house factory manufacturing, premium hardware, and complete turnkey execution designed to match modern Bangalore lifestyle.',
    apartments: ['Modern Spaces', 'Sompura Gate Residences', 'Sarjapur Enclave'],
    subTag: 'Sompura · Modern Spaces Living'
  },
  'muthanallur': {
    name: 'Muthanallur',
    title: 'Interior Designers in Muthanallur Cross, Bangalore | Venetus Interior',
    desc: 'Premier interior design experts in Muthanallur Cross & Nambiar Millennia, Bangalore. Bespoke modular interiors, premium finishes, and guaranteed on-time handover.',
    image: '/bedroom2.jpeg',
    highlightProject: 'Nambiar Millennia (Active Ongoing Project)',
    secondHeroStatement: 'Executing high-end turnkey home interiors at Nambiar Millennia and Muthanallur Cross. Custom modular kitchens, tailored wardrobes, and elegant living spaces executed with 10-year warranty and on-time handover.',
    apartments: ['Nambiar Millennia', 'Nambiar Bellezea', 'Muthanallur Hub Residences'],
    subTag: 'Muthanallur Cross · Nambiar Millennia'
  },
  'indiranagar': {
    name: 'Indiranagar',
    title: 'Interior Designers in Indiranagar, Bangalore | Venetus Interior',
    desc: 'Transform your home with the leading interior designers in Indiranagar, Bangalore. Venetus Interior crafts luxury modular kitchens, bedrooms & turnkey interiors with 10-year warranty.',
    image: '/design.jpg',
    highlightProject: 'Indiranagar Prime Homes & Penthouses',
    secondHeroStatement: 'Crafting timeless luxury and bespoke aesthetics for homes in Indiranagar. Turnkey execution, premium German fittings, and customized modular woodwork built with lifetime durability.',
    apartments: ['Defence Colony Residences', '100ft Road Luxury Suites', 'Indiranagar Prime Homes'],
    subTag: 'Indiranagar · Timeless Urban Elegance'
  },
  'sarjapura': {
    name: 'Sarjapur',
    title: 'Interior Designers in Sarjapur, Bangalore | Venetus Interior',
    desc: 'Looking for top interior designers in Sarjapur, Bangalore? Venetus Interior provides bespoke home transformations with transparent pricing and premium German hardware.',
    image: '/premium.jpg',
    highlightProject: 'Sobha Royal Pavilion & Sarjapur Corridors',
    secondHeroStatement: 'Top-rated interior designers across Sarjapur and surrounding corridors. Transforming villas and apartments with bespoke modular carpentry, flawless finishes, and transparent project timelines.',
    apartments: ['Sobha Royal Pavilion', 'Modern Spaces', 'Prestige City Vicinity'],
    subTag: 'Sarjapur · Bespoke Residential Interiors'
  },
  'sarjapur': {
    name: 'Sarjapur',
    title: 'Interior Designers in Sarjapur, Bangalore | Venetus Interior',
    desc: 'Looking for top interior designers in Sarjapur, Bangalore? Venetus Interior provides bespoke home transformations with transparent pricing and premium German hardware.',
    image: '/premium.jpg',
    highlightProject: 'Sobha Royal Pavilion & Sarjapur Corridors',
    secondHeroStatement: 'Top-rated interior designers across Sarjapur and surrounding corridors. Transforming villas and apartments with bespoke modular carpentry, flawless finishes, and transparent project timelines.',
    apartments: ['Sobha Royal Pavilion', 'Modern Spaces', 'Prestige City Vicinity'],
    subTag: 'Sarjapur · Bespoke Residential Interiors'
  },
  'hsr-layout': {
    name: 'HSR Layout',
    title: 'Interior Designers in HSR Layout, Bangalore | Venetus Interior',
    desc: 'Top interior designers in HSR Layout, Bangalore. Venetus Interior crafts modern living rooms, modular kitchens, and full luxury home transformations.',
    image: '/design.jpg',
    highlightProject: 'HSR Layout Apartments & Independent Floors',
    secondHeroStatement: 'Architectural and interior transformations across HSR Layout. Modern modular kitchens, bespoke bedroom suites, and turnkey execution designed for seamless urban living.',
    apartments: ['Purva Vantage', 'Salarpuria Sattva Greenage', 'HSR Sector Enclaves'],
    subTag: 'HSR Layout · Sophisticated Home Design'
  },
  'koramangala': {
    name: 'Koramangala',
    title: 'Interior Designers in Koramangala, Bangalore | Venetus Interior',
    desc: 'Best interior designers in Koramangala, Bangalore. Exceptional design, premium materials, and on-time execution backed by a 10-year warranty.',
    image: '/bedroom.jpeg',
    highlightProject: 'Koramangala Elite Homes & Penthouses',
    secondHeroStatement: 'Sophisticated turnkey home interiors in Koramangala. High-end modular kitchens, custom living rooms, and luxury bedroom aesthetics backed by a 10-year warranty.',
    apartments: ['Raheja Residency', 'Prestige Acropolis', 'Koramangala 3rd Block Residences'],
    subTag: 'Koramangala · Bespoke Residential Design'
  },
  'whitefield': {
    name: 'Whitefield',
    title: 'Interior Designers in Whitefield, Bangalore | Venetus Interior',
    desc: 'Premium interior designers in Whitefield, Bangalore. Specialist apartment and villa interiors designed to suit modern lifestyles and budgets.',
    image: '/design.jpg',
    highlightProject: 'Whitefield Luxury Apartments & Villas',
    secondHeroStatement: 'Crafting luxury living experiences across Whitefield’s iconic gated communities. Premium modular kitchens, aesthetic living spaces, and turnkey home decor built with world-class materials and 10-year warranty.',
    apartments: ['Prestige Shantiniketan', 'Godrej Air', 'Total Environment Pursuit', 'Divyasree Republic'],
    subTag: 'Whitefield · Modern Living Spaces'
  },
  'electronic-city': {
    name: 'Electronic City',
    title: 'Interior Designers in Electronic City, Bangalore | Venetus Interior',
    desc: 'Leading interior designers in Electronic City, Bangalore. Ergonomic, elegant home interiors delivered on guaranteed timelines.',
    image: '/premium.jpg',
    highlightProject: 'Electronic City Phase 1 & 2 Residences',
    secondHeroStatement: 'Smart, ergonomic, and aesthetic home interiors in Electronic City. Space-saving modular furniture, turnkey solutions, and durable materials crafted for modern tech families.',
    apartments: ['Ajmera Infinity', 'Godrej E-City', 'Prestige Sunrise Park'],
    subTag: 'Electronic City · Smart Home Interiors'
  },
  'jp-nagar': {
    name: 'JP Nagar',
    title: 'Interior Designers in JP Nagar, Bangalore | Venetus Interior',
    desc: 'Experienced interior designers in JP Nagar, Bangalore. Turnkey solutions for modular kitchens, bedrooms, and custom furniture.',
    image: '/kitchen1.jpeg',
    highlightProject: 'JP Nagar Residential Apartments',
    secondHeroStatement: 'Thoughtfully designed residential interiors in JP Nagar. Custom modular woodwork, elegant living spaces, and transparent pricing delivered with complete peace of mind.',
    apartments: ['Brigade Millennium', 'HM Indigo', 'Purva Highlands'],
    subTag: 'JP Nagar · Tailored Living Spaces'
  },
  'bellandur': {
    name: 'Bellandur',
    title: 'Interior Designers in Bellandur, Bangalore | Venetus Interior',
    desc: 'Top-rated interior design company in Bellandur, Bangalore. Beautiful spaces crafted with attention to detail and durable materials.',
    image: '/design.jpg',
    highlightProject: 'Bellandur & Outer Ring Road Communities',
    secondHeroStatement: 'Elevating contemporary apartment lifestyles in Bellandur and Outer Ring Road. Bespoke storage, elegant modular carpentry, and full turnkey interiors delivered on guaranteed timelines.',
    apartments: ['Sobha Hibiscus', 'Adarsh Palm Retreat', 'DNR Reflection'],
    subTag: 'Bellandur · Contemporary Apartment Living'
  },
  'yelahanka': {
    name: 'Yelahanka',
    title: 'Interior Designers in Yelahanka, Bangalore | Venetus Interior',
    desc: 'Best interior designers in Yelahanka, Bangalore. Luxury designs made affordable with transparent pricing and complete peace of mind.',
    image: '/bedroom2.jpeg',
    highlightProject: 'Yelahanka Villas & Luxury Apartments',
    secondHeroStatement: 'Premium villa and apartment interiors in Yelahanka, North Bangalore. Turnkey execution, luxury modular kitchens, and 10-year warranty with zero compromise on quality.',
    apartments: ['Godrej Avenues', 'Prestige Garden Bay', 'Purva Venezia'],
    subTag: 'Yelahanka · North Bangalore Living'
  }
};

const LocationHome = () => {
  const { slug } = useParams();
  const location = useLocation();

  // Extract location slug from url: /interior-designers-in-indiranagar or /interior-designers-sarjapura
  let currentSlug = slug || '';
  if (!currentSlug) {
    const path = location.pathname.toLowerCase().replace(/^\/+|\/+$/g, '');
    currentSlug = path
      .replace(/^interior-designers-in-/, '')
      .replace(/^interior-designers-/, '');
  }

  // Lookup location configuration or generate fallback dynamically
  const locConfig = locationsData[currentSlug] || {
    name: currentSlug
      ? currentSlug
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      : 'Bangalore',
    title: `Interior Designers in ${
      currentSlug
        ? currentSlug
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        : 'Bangalore'
    }, Bangalore | Venetus Interior`,
    desc: `Transform your home with top interior designers in ${
      currentSlug
        ? currentSlug
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        : 'Bangalore'
    }. Venetus Interior crafts luxury living spaces with up to 10-year warranty.`,
    image: '/design.jpg',
    highlightProject: `${
      currentSlug
        ? currentSlug
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        : 'Bangalore'
    } Residential Projects`,
    secondHeroStatement: `Bespoke luxury homes and modular interiors crafted for apartments and villas in ${
      currentSlug
        ? currentSlug
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        : 'Bangalore'
    }, Bangalore — backed by up to 10-year warranty and in-house execution.`,
    apartments: [`Top Apartments in ${currentSlug || 'Bangalore'}`, 'Luxury Communities', 'Gated Residences'],
    subTag: `${
      currentSlug
        ? currentSlug
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        : 'Bangalore'
    } Living`
  };

  const canonicalUrl = `https://www.venetusinterior.in${location.pathname}`;

  // Structured Data (JSON-LD) for Google Local SEO & Rich Snippets
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: `Venetus Interior - Interior Designers in ${locConfig.name}`,
    description: locConfig.desc,
    url: canonicalUrl,
    telephone: '+919916565945',
    priceRange: '₹₹₹',
    image: `https://www.venetusinterior.in${locConfig.image || '/design.jpg'}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: locConfig.name,
      addressRegion: 'Karnataka',
      addressCountry: 'IN'
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: `${locConfig.name}, Bangalore`
      },
      {
        '@type': 'City',
        name: 'Bangalore'
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.venetusinterior.in/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `Interior Designers in ${locConfig.name}`,
        item: canonicalUrl
      }
    ]
  };

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{locConfig.title}</title>
        <meta name="description" content={locConfig.desc} />
        <meta
          name="keywords"
          content={`interior designers in ${locConfig.name}, interior design ${locConfig.name}, home decor ${locConfig.name}, modular kitchen ${locConfig.name}, Venetus Interior`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={locConfig.title} />
        <meta property="og:description" content={locConfig.desc} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="w-full bg-black min-h-screen text-white overflow-hidden">
        {/* Two-Panel Location Hero: Panel 1 (Homepage Centered Design) + Panel 2 (Bottom TrustBelt & Hyper-local Projects) */}
        <LocationHero locConfig={locConfig} locationName={locConfig.name} bgImage={locConfig.image} />

        {/* Design Services tailored for location */}
        <OurDesignService locationName={locConfig.name} />

        {/* Interiors by Property (Apartments, Villas, Penthouses) */}
        <InteriorsByProperty locationName={locConfig.name} />

        {/* Process tailored for location */}
        <SimpleProcess locationName={locConfig.name} />

        {/* Company Intro & Consultation Form tailored for location */}
        <CompanyIntro locationName={locConfig.name} />

        {/* Residential Video Projects tailored for location */}
        <ResidentialProjects locationName={locConfig.name} />

        {/* Why Choose Us tailored for location */}
        <WhyChoose locationName={locConfig.name} />

        {/* Testimonials */}
        <Testimonial locationName={locConfig.name} />

        {/* YouTube Video Window Cinema Section */}
        <TestimonialVideoSection />

        {/* FAQ tailored for location */}
        <HomeFAQ locationName={locConfig.name} />

        {/* Final CTA */}
        <LastCTA />
      </div>
    </>
  );
};

export default LocationHome;

