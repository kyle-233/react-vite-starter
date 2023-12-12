import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    envDir: 'env',
    server: {
        open: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@tests': path.resolve(__dirname, 'tests'),
            '@config': path.resolve(__dirname, 'config')
        }
    },
    css: {
        modules: {
            scopeBehaviour: 'local',
            generateScopedName: (name: string, filename: string) => {
                const fileNameOrFolder = filename.match(/index\.module\.(css|scss|sass)$/) ? '[folder]' : '[name]'
                return `${fileNameOrFolder}_${name}_[hash:6]`
            },
            localsConvention: 'camelCase'
        }
    },
    build: {
        cssCodeSplit: true
    },
    plugins: [react()]
})
