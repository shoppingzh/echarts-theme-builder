<template>
  <Chart :option="option" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Chart from '../Chart.vue'
import { EChartsOption } from 'echarts';
import { random } from 'lodash'

const data = ['北京', '上海', '广东', '福建', '辽宁'].map(o => ({
  name: o,
  value1: random(0, 1000),
  value2: random(0, 1000),
}))

const option = computed(() => {
  return {
    grid: {
      show: true,
    },
    title: {
      text: '饼图',
    },
    tooltip: {},
    legend: {},
    series: [{
      type: 'pie',
      name: '系列一',
      data: data.map(o => ({ name: o.name, value: o.value1, })),
    }]
  } as EChartsOption
})

</script>
