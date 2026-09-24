import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 项目页部署在子路径下，构建时注入 GITHUB_PAGES=true 即可切换 base
// 以后绑定自定义域名（根路径访问）时不需要改这里，保持默认 '/' 即可
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' ? '/wshdebaoxiang/' : '/',
  server: {
    port: 5173,
    host: '127.0.0.1',
  },
})
