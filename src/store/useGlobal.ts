import { defineStore } from 'pinia'
import { Theme } from '@shoppingzh/tools/lib/echarts'
import { toReactive, useLocalStorage } from '@vueuse/core'
import { downloadBlob } from '@shoppingzh/tools/lib/dom'

export default defineStore('global', () => {

  const defaultTheme = {
    textStyle: {},
    grid: {},
    title: {
      textStyle: {},
      subtextStyle: {},
    },
    legend: {
      plain: {
        itemStyle: {},
        lineStyle: {},
        textStyle: {},
      },
      scroll: {
        itemStyle: {},
        lineStyle: {},
        textStyle: {},
      }
    },
    tooltip: {
      textStyle: {},
    },
    axis: {
      category: {
        nameTextStyle: {},
        axisLine: {
          lineStyle: {},
        },
        splitLine: {
          lineStyle: {},
        },
        axisTick: {
          lineStyle: {},
        },
        axisLabel: {
        },
      },
      value: {
        nameTextStyle: {},
        axisLine: {
          lineStyle: {},
        },
        splitLine: {
          lineStyle: {},
        },
        axisTick: {
          lineStyle: {},
        },
        axisLabel: {
        },
      },
      time: {
        nameTextStyle: {},
        axisLine: {
          lineStyle: {},
        },
        splitLine: {
          lineStyle: {},
        },
        axisTick: {
          lineStyle: {},
        },
        axisLabel: {
        },
      },
      log: {
        nameTextStyle: {},
        axisLine: {
          lineStyle: {},
        },
        splitLine: {
          lineStyle: {},
        },
        axisTick: {
          lineStyle: {},
        },
        axisLabel: {
        },
      }
    },
    series: {
      bar: {
        itemStyle: {},
        backgroundStyle: {},
        label: {},
        labelLine: {},
      },
      line: {
        itemStyle: {},
        lineStyle: {
        },
        areaStyle: {
          opacity: 0,
        },
      },
      pie: {
        itemStyle: {},
        label: {},
        labelLine: {
          lineStyle: {},
        },
      },
    },
  } as Theme

  const theme = toReactive(useLocalStorage('theme', defaultTheme, {
    deep: true,
  }))

  // const theme = reactive(defaultTheme)

  function download() {
    const blob = new Blob([JSON.stringify(theme, null, 4)], { type: 'application/json' })
    downloadBlob(blob, '主题.json')
  }
  
  return {
    theme,
    download,
  }
})
