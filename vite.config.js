import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ecommerce-homepage/',
  plugins: [react()],
  // Untuk development, gunakan base: '/'
  // Untuk GitHub Pages, gunakan base: '/ecommerce-homepage/'
  base: process.env.NODE_ENV === 'production' ? '/ecommerce-homepage/' : '/',
})