import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Abhi ke liye isko comment kar diya hai taaki console.log dikhe
  // esbuild: {
  //   drop: ['console', 'debugger'],
  // },
  server: {
    proxy: {
      '/api-google': {
        target: 'https://maps.googleapis.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-google/, '')
      }
    }
  }
})