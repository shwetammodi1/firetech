import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Split vendor chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('react') || id.includes('react-dom')) return 'react'
          if (id.includes('framer-motion')) return 'motion'
          if (id.includes('lucide-react')) return 'lucide'
        },
      },
    },
    // Increase chunk warning threshold slightly (framer-motion is large)
    chunkSizeWarningLimit: 600,
  },
})
