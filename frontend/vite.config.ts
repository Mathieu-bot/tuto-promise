import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Material-UI into its own chunk
          'mui': ['@mui/material', '@mui/icons-material'],
          // Separate utilities into their own chunk
          'utils': ['axios', 'react-hot-toast']
        }
      }
    },
    // Reduce warning limit to 300kb for stricter bundle size control
    chunkSizeWarningLimit: 300
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['@mui/material', '@mui/icons-material', 'react', 'react-dom']
  }
})
