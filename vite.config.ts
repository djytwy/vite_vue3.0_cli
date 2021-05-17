import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // vite 配置新写法：真香
  resolve: {
    // 两种引用写法
    alias : [
      { find: /@\//, replacement: path.join(__dirname, './src/') },
      { find: 'views', replacement: path.join(__dirname, './src/views')},
      { find: 'components', replacement: '/src/components'}
    ]
  }
})
