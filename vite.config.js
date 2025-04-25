import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    proxy: {
      '/players': {
        target: 'http://fantasyapp-production-56b5.up.railway.app',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
