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
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        playfair: ['Cormorant Garamond', 'Georgia', 'serif'],
        jakarta: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    }
  }
}
