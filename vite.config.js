import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    proxy: {
      '/players': {
        target: 'https://fantasyapp-production-253f.up.railway.app',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
