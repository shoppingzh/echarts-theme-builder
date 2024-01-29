import { defineStore } from 'pinia'
import { Theme } from '@shoppingzh/tools/lib/echarts'
import { toReactive, useLocalStorage } from '@vueuse/core'
import { reactive } from 'vue'
import { downloadBlob } from '@shoppingzh/tools/lib/dom'

export default defineStore('global', () => {

  const defaultTheme = {
    textStyle: {},
    grid: {},
    title: {
      textStyle: {},
      subtextStyle: {},
    },
    legend: {},
    tooltip: {},
    series: {
      bar: {
        itemStyle: {},
      },
      line: {
        // smooth: true,
      },
    },
  } as Theme

  // const theme = useLocalStorage('theme', defaultTheme, {
  //   deep: true,
  // })

  const theme = reactive(defaultTheme)

  function download() {
    const blob = new Blob([JSON.stringify(theme, null, 4)], { type: 'application/json' })
    downloadBlob(blob, '主题.json')
  }
  
  return {
    // theme: toReactive(theme),
    theme,
    download,
  }
})
