import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {federation} from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        remote_apps: {
          type: 'module',
          entry: 'https://lucors.ru/remote_apps/remoteEntry.js'
        }
      },
      shared: {
        react: { singleton: true, strictVersion: true },
        'react-dom': { singleton: true, strictVersion: true },
        'react-i18next': { singleton: true, strictVersion: true },
        i18next: { singleton: true, strictVersion: true }
      }
    })
  ],
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        assetFileNames: '[name]-[hash][extname]',
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js'
      }
    }
  },
  base: ''
})
