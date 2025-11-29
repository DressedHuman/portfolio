import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['react-toastify', 'typed.js', 'react-fast-marquee'],
          'vendor-utils': ['axios', 'libphonenumber-js']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
