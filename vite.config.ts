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
        manualChunks: {
          react:    ['react', 'react-dom'],
          motion:   ['framer-motion'],
          lucide:   ['lucide-react'],
        },
      },
    },
    // Increase chunk warning threshold slightly (framer-motion is large)
    chunkSizeWarningLimit: 600,
  },
})
