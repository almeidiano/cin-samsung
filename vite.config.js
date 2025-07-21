import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true, // permite usar describe, it, expect sem importar
    setupFiles: './src/setupTests.js', // pra usar o jest-dom
  },
})
