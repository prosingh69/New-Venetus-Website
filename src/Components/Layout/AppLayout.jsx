import React, { useEffect, useRef } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import FloatingContactButtons from '../CommonComponent/FloatingContactButtons'
import { ConsultationModalProvider } from '../../context/ConsultationModalContext'
import { Toaster } from 'react-hot-toast'

const AppLayout = () => {
  const location = useLocation()
  const isVideosPage = location.pathname.toLowerCase().includes('video')
  const isFirstRender = useRef(true)

  // Track page views on route changes in Google Analytics (GA4) & Meta Pixel
  useEffect(() => {
    // 1. Google Analytics (GA4)
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-B2W4KYFRN4', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      })
    }

    // 2. Meta Pixel (Track PageView on SPA route navigation)
    if (isFirstRender.current) {
      isFirstRender.current = false // Initial load is handled by index.html base code
    } else {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'PageView')
      }
    }
  }, [location])

  return (
    <ConsultationModalProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar/>
      <main className="w-full">
        <Outlet/>
      </main>
      {!isVideosPage && <Footer/>}
      {!isVideosPage && <FloatingContactButtons />}
      <ScrollRestoration/>
    </ConsultationModalProvider>
  )
}

export default AppLayout