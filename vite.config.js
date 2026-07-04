import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  ssgOptions: {
    includedRoutes: () => [
      '/',
      '/about',
      '/product/1',
      '/product/2',
      '/product/3',
      '/product/4',
      '/product/5',
      '/product/6',
      '/product/7',
      '/product/8',
      '/product/9',
      '/tech/1',
      '/tech/2',
      '/tech/3',
      '/application/1',
      '/application/2',
      '/application/3',
      '/application/4',
      '/application/5',
      '/application/6',
      '/application/7',
      '/application/8',
      '/application/9',
      '/application/10',
      '/application/11',
    ],
  },
})
