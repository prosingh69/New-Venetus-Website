import React, { useEffect, useRef } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import FloatingContactButtons from '../CommonComponent/FloatingContactButtons'
import { ConsultationModalProvider } from '../../context/ConsultationModalContext'
import { Toaster } from 'react-hot-toast'
import { trackEvent, contactLinkEvent } from '../../utils/analytics'

const AppLayout = () => {
  const location = useLocation()
  const isVideosPage = location.pathname.toLowerCase().includes('video')
  // The first page view is already sent by the base code in index.html
  const lastTrackedPath = useRef(window.location.pathname + window.location.search)

  // Track page views on route changes in Google Analytics (GA4) & Meta Pixel
  useEffect(() => {
    // Only when the address really changes, so a page is never counted twice
    const path = location.pathname + location.search
    if (path === lastTrackedPath.current) return
    lastTrackedPath.current = path

    // 1. Google Analytics (GA4)
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-B2W4KYFRN4', {
        page_path: path,
        page_location: window.location.href,
        page_title: document.title,
      })
    }

    // 2. Meta Pixel (Track PageView on SPA route navigation)
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView')
    }
  }, [location])

  // Track every call / WhatsApp / email link click on the site as a conversion event
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.('a[href]')
      const event = link && contactLinkEvent(link.getAttribute('href'))
      if (event) trackEvent(event, { link_url: link.href, page_path: window.location.pathname })
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return (
    <ConsultationModalProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{ top: 24, zIndex: 99999999 }}
        toastOptions={{
          duration: 4500,
          style: {
            background: '#18181b',
            color: '#ffffff',
            border: '1px solid rgba(233, 194, 122, 0.45)',
            boxShadow: '0 12px 35px rgba(0,0,0,0.65)',
            fontSize: '14px',
            borderRadius: '12px',
            padding: '12px 18px',
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
          },
          success: {
            iconTheme: {
              primary: '#E9C27A',
              secondary: '#000000',
            },
          },
        }}
      />
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