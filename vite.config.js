import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3006,
  },
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
  ],
})
