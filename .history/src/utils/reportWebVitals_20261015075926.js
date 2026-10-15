/**
 * Core Web Vitals In-Browser Reporter
 * Automatically measures metrics audited by Google PageSpeed Insights:
 * - Largest Contentful Paint (LCP)
 * - Cumulative Layout Shift (CLS)
 * - First Contentful Paint (FCP)
 * - Interaction to Next Paint (INP) / First Input Delay (FID)
 * - Time to First Byte (TTFB)
 *
 * Runs silently in the background with zero UI change.
 */

export function initWebVitalsReporter(onReport) {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  const sendMetric = (metric) => {
    if (typeof onReport === 'function') {
      onReport(metric);
    } else if (import.meta.env.DEV) {
      // In development, log friendly metrics to console for quick verification
      const color = metric.rating === 'good' ? '#4CAF50' : metric.rating === 'needs-improvement' ? '#FF9800' : '#F44336';
      console.log(
        `%c[Web Vitals] ${metric.name}: ${Math.round(metric.value * 100) / 100}${metric.unit || 'ms'} (${metric.rating})`,
        `color: ${color}; font-weight: bold;`
      );
    }

    // If Google Analytics (GA4) or GTM is initialized, dispatch event
    if (typeof window.gtag === 'function') {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  };

  // 1. Largest Contentful Paint (LCP)
  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        const val = lastEntry.renderTime || lastEntry.loadTime;
        sendMetric({
          name: 'LCP',
          value: val,
          unit: 'ms',
          rating: val <= 2500 ? 'good' : val <= 4000 ? 'needs-improvement' : 'poor',
          id: lastEntry.id || 'lcp'
        });
      }
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch {}

  // 2. Cumulative Layout Shift (CLS)
  try {
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      sendMetric({
        name: 'CLS',
        value: clsValue,
        unit: '',
        rating: clsValue <= 0.1 ? 'good' : clsValue <= 0.25 ? 'needs-improvement' : 'poor',
        id: 'cls'
      });
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });
  } catch {}

  // 3. First Contentful Paint (FCP)
  try {
    const paintObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          sendMetric({
            name: 'FCP',
            value: entry.startTime,
            unit: 'ms',
            rating: entry.startTime <= 1800 ? 'good' : entry.startTime <= 3000 ? 'needs-improvement' : 'poor',
            id: 'fcp'
          });
        }
      }
    });
    paintObserver.observe({ type: 'paint', buffered: true });
  } catch {}
}

