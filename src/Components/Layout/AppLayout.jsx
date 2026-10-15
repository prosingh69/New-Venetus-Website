import React, { useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import FloatingContactButtons from '../CommonComponent/FloatingContactButtons'
import { ConsultationModalProvider } from '../../context/ConsultationModalContext'
import { Toaster } from 'react-hot-toast'

const AppLayout = () => {
  const location = useLocation()
  const isVideosPage = location.pathname.toLowerCase().includes('video')

  // Track page views on route changes in Google Analytics (GA4)
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-B2W4KYFRN4', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      })
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