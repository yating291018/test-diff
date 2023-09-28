import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// console.log('node import.meta', import.meta)
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd())
  console.log('env', env)
  return {
    base: '/',
    mode: 'development',
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    }, 
    plugins: [vue()],
    define: {
      "process.env": env
    }
  }
})
