import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import jsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  plugins: [
    vue({
      script: {
        defineModel: true,
      }
    }),
    jsx(),
    AutoImport({}),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        })
      ]
    }),
    // SVG雪碧图
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, './src/icons/svg')],
      symbolId: 'svg-icon/[name]',
    }),
  ],
})
