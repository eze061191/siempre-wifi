import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const base = command === 'serve' ? '/' : '/siempre-wifi/'
  
  return {
    plugins: [react()],
    base: base,
    publicDir: 'public',
    build: {
      outDir: 'dist',
      sourcemap: false,
      assetsDir: 'assets',
    },
    server: {
      port: 3000,
      open: true,
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  }
})
