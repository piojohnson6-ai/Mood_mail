import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const isProduction = process.env.NODE_ENV === 'production'
const base = isProduction ? '/Mood_mail/' : '/'

export default defineConfig({
  plugins: [react()],
  base,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
