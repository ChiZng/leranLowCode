import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'canvas',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue']
    },
  }
})
