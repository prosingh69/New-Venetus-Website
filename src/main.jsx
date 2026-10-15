import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { initWebVitalsReporter } from './utils/reportWebVitals'

// Silently monitor Core Web Vitals (LCP, CLS, FCP) audited by Google PageSpeed Insights
initWebVitalsReporter()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
