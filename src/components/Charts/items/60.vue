<template>
  <Chart :option="option" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Chart from '../Chart.vue'
import { EChartsOption } from 'echarts'
import { random } from 'lodash'

const indicators = new Array(6).fill(0).map((_, idx) => `能力${idx}`)

const option = computed(() => {
  return {
    grid: {
    },
    title: {
      text: '雷达图',
    },
    tooltip: {},
    legend: {},
    radar: {
      indicator: indicators.map(o => ({ name: o, max: 100 })),
    },
    series: [{
      type: 'radar',
      name: '系列一',
      data: [{
        value: indicators.map(() => random(30, 100)),
        name: '张三',
      }, {
        value: indicators.map(() => random(50, 100)),
        name: '李四',
      }]
    }]
  } as EChartsOption
})

</script>
