<template>
  <Chart :option="option" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Chart from '../Chart.vue'
import { EChartsOption } from 'echarts'
import { random } from 'lodash'

const option = computed(() => {
  return {
    grid: {
    },
    title: {
      text: '散点图',
    },
    tooltip: {},
    legend: {},
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      type: 'scatter',
      name: '系列一',
      data: new Array(150).fill(null).map(() => [
        random(0, 100),
        random(0, 100),
      ])
    }]
  } as EChartsOption
})

</script>
