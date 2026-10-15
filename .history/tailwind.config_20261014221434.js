/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#f0ca6b', hover: '#deb24e' },
        secondary: { DEFAULT: '#545454', dark: '#2c2c2c', deep: '#383838' },
        surface: { soft: '#FAF8F5' },
        dark: { DEFAULT: '#0a0a0a', pure: '#000000', 111: '#111111' },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        michroma: ['Michroma', 'sans-serif'],
        calsans: ['Cal Sans', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      }
    }
  }
}

