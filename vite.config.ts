/// <reference types="vitest" />
import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  envDir: 'env',
  server: {
    open: true,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      router: path.resolve(__dirname, 'src/router'),
      styles: path.resolve(__dirname, 'src/styles'),
      views: path.resolve(__dirname, 'src/views'),
      store: path.resolve(__dirname, 'src/store'),
      assets: path.resolve(__dirname, 'src/assets'),
      tests: path.resolve(__dirname, 'tests'),
      config: path.resolve(__dirname, 'config'),
    },
  },
  css: {
    devSourcemap: true,
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: (name: string, filename: string) => {
        const folder = filename.split('/').at(-2)
        const cssFileName = filename.split('/').at(-1).split('.').at(0)
        const fileNameOrFolder = filename.match(/index\.module\.(css|scss|sass)$/) ? folder : cssFileName
        return `${fileNameOrFolder}_${name}_${Math.random().toString(36).substr(3, 8)}`
      },
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
            @import 'styles/vars.scss';
            `,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: [
      '**/src/components/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      '**/tests/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      '**/src/hooks/**/*.{test,spec}.?(c|m)[jt]s?(x)',
    ],
  },
  build: {
    cssCodeSplit: true,
  },
  plugins: [
    react(),
    // AutoImport({
    //     imports: ['vitest'],
    //     dts: true // generate TypeScript declaration
    // })
  ],
})
