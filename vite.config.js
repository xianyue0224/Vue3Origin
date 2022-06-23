import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), legacy({ targets: ['defaults'] })], // 支持JSX语法
  build: {
    target: 'es2015'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@style': resolve(__dirname, './src/assets/style'),
      '@image': resolve(__dirname, './src/assets/image'),
      '@store': resolve(__dirname, './src/stores'),
      '@router': resolve(__dirname, './src/router'),
      '@comps': resolve(__dirname, './src/components'),
      '@views': resolve(__dirname, './src/views')
    }
  },
  optimizeDeps: {},
  cacheDir: './.cache'
})
