import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // vite 配置新写法：真香
  resolve: {
    alias : [
      { find: '@', replacement: '/src' },
      { find: 'views', replacement: '/src/views'},
      { find: 'components', replacement: '/src/components'}
    ]
  }
})
