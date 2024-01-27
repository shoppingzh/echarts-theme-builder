<template>
  <Chart :option="option" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Chart from '../Chart.vue'
import { EChartsOption } from 'echarts';
import { random } from 'lodash'
import dayjs from 'dayjs'
import { getBetweenDates } from '@shoppingzh/tools/lib/datetime'

const days = getBetweenDates(dayjs('2024-01-01').toDate(), dayjs('2024-01-31').toDate(), 'day')

const option = computed(() => {
  return {
    title: {
      text: 'K线图',
    },
    tooltip: {},
    legend: {},
    xAxis: {
      type: 'category',
      data: days.map(o => dayjs(o).format('MM/DD')),
    },
    yAxis: {
      type: 'value',
    },
    series: [{
      type: 'candlestick',
      name: '系列一',
      data: days.map(o => {
        const start = random(0, 1000)
        const arr = [start, start + random(-100, 100)]
        return [arr[0], arr[1], arr[0] + random(-100, 0), arr[0] + random(0, 100)]
      })
    }]
  } as EChartsOption
})

</script>
