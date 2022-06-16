import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'     

// https://vitejs.dev/config/import { resolve } from 'path'     

const pathResolve = (dir: string): any => {  
  return resolve(__dirname, ".", dir)          
}
 
const alias: Record<string, string> = {
  '@': pathResolve("src")
}
export default defineConfig({
  plugins: [vue()],
  resolve: {  // ****************** 路径配置新增
    alias,     // ****************** 路径配置新增
    extensions: ['.js', '.json', '.ts','.vue']     // ****************** 路径配置新增
  },           // ****************** 路径配置新增
  css: {
		//css预处理
		preprocessorOptions: {

		}
	},
})

