import { defineStore } from 'pinia'
import { Theme } from '@shoppingzh/tools/lib/echarts'
import { toReactive, useLocalStorage } from '@vueuse/core'
import { reactive } from 'vue'
import { downloadBlob } from '@shoppingzh/tools/lib/dom'

export default defineStore('global', () => {

  // const theme = useLocalStorage('theme', {
  //   textStyle: {},
  //   title: {
  //     textStyle: {},
  //   },
  //   series: {
  //     bar: {
  //       // barWidth: 20,
  //     },
  //     line: {
  //       // smooth: true,
  //     },
  //   },
  // } as Theme, {
  //   deep: true,
  // })

  const theme = reactive({
    textStyle: {},
    title: {
      textStyle: {},
      subtextStyle: {},
    },
    legend: {},
    tooltip: {},
    series: {
      bar: {
        // barWidth: 20,
      },
      line: {
        // smooth: true,
      },
    },
  } as Theme)
  // console.log(theme);
  
  function download() {
    const blob = new Blob([JSON.stringify(theme, null, 4)], { type: 'application/json' })
    downloadBlob(blob, '主题.json')
  }
  
  return {
    // theme: toReactive(theme)
    theme,
    download,
  }
})
