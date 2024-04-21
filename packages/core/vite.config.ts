import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['vue'],
    },
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'core',
      formats: ['es'],
    }
  }
})
