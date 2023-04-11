import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import windicss from 'vite-plugin-windicss'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), windicss()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src")
    }
  },
  server: {
    port: 3000
  }
})
