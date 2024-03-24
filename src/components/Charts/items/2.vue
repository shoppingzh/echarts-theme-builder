<template>
  <Chart :option="option" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Chart from '../Chart.vue'
import { EChartsOption } from 'echarts'
import { random } from 'lodash'

const data = ['北京', '上海', '广东', '福建', '辽宁'].map(o => ({
  name: o,
  value: random(0, 1000),
  value2: random(0, 1000),
}))

const option = computed(() => {
  return {
    grid: {
      top: 85,
    },
    title: [{
      text: '横向柱状图',
      subtext: '混合图指的是柱状图 + 折线图',
    }],
    xAxis: {
      type: 'value'
    },
    yAxis: [{
      type: 'category',
      data: data.map(o => o.name),
    }],
    tooltip: {},
    legend: {
    },
    series: [{
      type: 'bar',
      name: '系列一',
      data: data.map(o => o.value),
    }, {
      type: 'bar',
      name: '系列二',
      data: data.map(o => o.value2),
    }]
  } as EChartsOption
})

</script>
