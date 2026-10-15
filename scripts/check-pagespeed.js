/**
 * Google PageSpeed Insights API v5 Runner
 * Documentation: https://developers.google.com/speed/docs/insights/v5/get-started
 *
 * Runs an official Google Lighthouse & CrUX audit on your live website URL
 * without requiring any third-party dependencies.
 *
 * Usage:
 *   node scripts/check-pagespeed.js [URL] [mobile|desktop]
 *   npm run pagespeed
 */

const TARGET_URL = process.argv[2] || 'https://www.venetusinterior.in/';
const STRATEGY = (process.argv[3] || 'mobile').toLowerCase();
const API_KEY = process.env.PAGESPEED_API_KEY || '';

async function runPageSpeedAudit(url, strategy = 'mobile') {
  console.log(`\n======================================================`);
  console.log(` Google PageSpeed Insights API (v5) Audit`);
  console.log(` Target URL : ${url}`);
  console.log(` Strategy   : ${strategy.toUpperCase()}`);
  console.log(` Web Report : https://pagespeed.web.dev/analysis?url=${encodeURIComponent(url)}`);
  console.log(`======================================================\n`);
  console.log(`Analyzing performance with Google Lighthouse in progress...\n`);

  const apiUrl = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
  apiUrl.searchParams.set('url', url);
  apiUrl.searchParams.set('strategy', strategy);
  if (API_KEY) {
    apiUrl.searchParams.set('key', API_KEY);
  }
  apiUrl.searchParams.append('category', 'PERFORMANCE');
  apiUrl.searchParams.append('category', 'ACCESSIBILITY');
  apiUrl.searchParams.append('category', 'BEST_PRACTICES');
  apiUrl.searchParams.append('category', 'SEO');

  try {
    const startTime = Date.now();
    const response = await fetch(apiUrl.toString());

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Google API responded with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const duration = ((Date.now() - startTime) / 1000).toFixed(1);

    const categories = data.lighthouseResult?.categories || {};
    const audits = data.lighthouseResult?.audits || {};

    const formatScore = (val) => {
      const score = Math.round((val || 0) * 100);
      const icon = score >= 90 ? '🟢' : score >= 50 ? '🟡' : '🔴';
      return `${icon} ${score}/100`;
    };

    console.log(`Results received in ${duration}s:\n`);
    console.log(`--- Category Scores ---`);
    console.log(`  Performance    : ${formatScore(categories.performance?.score)}`);
    console.log(`  Accessibility  : ${formatScore(categories.accessibility?.score)}`);
    console.log(`  Best Practices : ${formatScore(categories['best-practices']?.score)}`);
    console.log(`  SEO            : ${formatScore(categories.seo?.score)}`);

    console.log(`\n--- Core Web Vitals & Key Metrics ---`);
    const lcp = audits['largest-contentful-paint'];
    const cls = audits['cumulative-layout-shift'];
    const fcp = audits['first-contentful-paint'];
    const tbt = audits['total-blocking-time'];
    const si = audits['speed-index'];

    if (fcp) console.log(`  First Contentful Paint (FCP)  : ${fcp.displayValue || fcp.numericValue + ' ms'}`);
    if (lcp) console.log(`  Largest Contentful Paint (LCP): ${lcp.displayValue || lcp.numericValue + ' ms'}`);
    if (tbt) console.log(`  Total Blocking Time (TBT)     : ${tbt.displayValue || tbt.numericValue + ' ms'}`);
    if (cls) console.log(`  Cumulative Layout Shift (CLS) : ${cls.displayValue || cls.numericValue}`);
    if (si)  console.log(`  Speed Index                   : ${si.displayValue || si.numericValue + ' ms'}`);

    console.log(`\n======================================================`);
    console.log(` Full report viewable at:`);
    console.log(` https://pagespeed.web.dev/analysis?url=${encodeURIComponent(url)}`);
    console.log(`======================================================\n`);
  } catch (err) {
    console.error(`\n❌ Failed to run PageSpeed audit: ${err.message}`);
    console.log(`Tip: Ensure your live site is accessible publicly via HTTP/HTTPS.`);
  }
}

runPageSpeedAudit(TARGET_URL, STRATEGY);
