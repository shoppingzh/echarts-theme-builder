import { defineStore } from 'pinia'
import { Theme } from '@shoppingzh/tools/lib/echarts'
import { toReactive, useLocalStorage } from '@vueuse/core'
import { downloadBlob } from '@shoppingzh/tools/lib/dom'
import { merge } from 'lodash'

export const DEFAULT_THEME: Theme = {
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
}

export default defineStore('global', () => {
  const themeRef = useLocalStorage('theme', DEFAULT_THEME, {
    deep: true,
  })
  const theme = toReactive(themeRef)

  function replace(another: Theme) {
    themeRef.value = merge({} as Theme, DEFAULT_THEME, another)
  }

  function download() {
    const blob = new Blob([JSON.stringify(themeRef.value, null, 4)], { type: 'application/json' })
    downloadBlob(blob, '主题.json')
  }
  
  return {
    theme,
    replace,
    download,
  }
})
