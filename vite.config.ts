import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';//配置文件路径别名
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
              vue(),
              //自动导入elPlus 防止项目体量太大
              AutoImport({
                  resolvers: [ElementPlusResolver()],
              }),
              Components({
                  resolvers: [ElementPlusResolver()],
              }),
            ],
  resolve:{
    alias :{
        '@':resolve(__dirname,'src')
            }
},//路径配置



})
