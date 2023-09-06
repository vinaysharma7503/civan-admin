import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  resolve:{
    alias:[
      {find:'@RootService', replacement: path.resolve(__dirname, './src/RootService')},
      {find:'@Shared',replacement:path.resolve(__dirname,'./src/Shared')},
      {find:'@Pages',replacement:path.resolve(__dirname,'./src/Pages')},
      {find:'@Redux', replacement: path.resolve(__dirname + '/src/Redux') },
    ]
  },
  server:{
    port:3000,
    host:true
  }
})
