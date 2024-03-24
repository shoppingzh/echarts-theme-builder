<template>
  <Chart :option="option" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Chart from '../Chart.vue'
import { EChartsOption } from 'echarts'
import { random } from 'lodash'
import dayjs from 'dayjs'

const year = dayjs('2024')
const yearStart = year.startOf('year')
const yearEnd = year.endOf('year')

const option = computed(() => {
  return {
    grid: {
    },
    title: {
      text: '日历图',
    },
    tooltip: {},
    legend: {},
    calendar: {
      range: '2024',
      // top: 100,
      // bottom: 100,
    },
    visualMap: {
      show: false,
      orient: 'horizontal',
    },
    series: [{
      type: 'heatmap',
      coordinateSystem: 'calendar',
      name: '系列一',
      data: new Array(100).fill(null).map(() => [
        random(+yearStart.toDate(), +yearEnd.toDate()),
        random(0, 100),
      ])
    }]
  } as EChartsOption
})

</script>
