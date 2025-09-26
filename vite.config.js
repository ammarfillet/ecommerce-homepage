
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Base path yang berbeda untuk development vs production
  base: process.env.NODE_ENV === 'production' ? '/ecommerce-homepage/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Pastikan assets di-copy dengan benar
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
})