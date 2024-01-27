import { defineStore } from 'pinia'
import { Theme } from '@shoppingzh/tools/lib/echarts'
import { reactive, ref } from 'vue'

export default defineStore('global', () => {

  const theme = reactive({
    series: {
      bar: {
        barWidth: 20,
      },
      line: {
        // smooth: true,
      },
    },
  } as Theme)
  
  return {
    theme,
  }
})
