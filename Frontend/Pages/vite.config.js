import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/Projects/Frontend/Pages/"
  server:{
    proxy:{
       '/csrf-token': 'http://localhost:3000',
    }
  }
})
