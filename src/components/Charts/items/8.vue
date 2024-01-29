<template>
  <Chart :option="option" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Chart from '../Chart.vue'
import { EChartsOption } from 'echarts';

const option = computed(() => {
  return {
    grid: {
      show: true,
    },
    title: {
      text: '树图',
    },
    tooltip: {},
    legend: {},
    series: [{
      type: 'gauge',
      name: '系列一',
      data: [{
        value: 40,
      }]
    }]
  } as EChartsOption
})

</script>
