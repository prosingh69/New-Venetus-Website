// Sends a conversion event to Google Analytics (GA4), and also pushes it to the dataLayer so that
// Google Tag Manager / Google Ads can use the same events once they are set up.
export const trackEvent = (name, params = {}) => {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') window.gtag('event', name, params)
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: name, ...params })
}

// Which event a clicked contact link should send, if any.
export const contactLinkEvent = (href = '') => {
  if (href.startsWith('tel:')) return 'click_call'
  if (/wa\.me|whatsapp\.com/i.test(href)) return 'click_whatsapp'
  if (href.startsWith('mailto:')) return 'click_email'
  return null
}
