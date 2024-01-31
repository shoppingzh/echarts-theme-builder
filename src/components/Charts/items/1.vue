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
  value3: random(0, 1000),
  value4: random(0, 1000),
  value5: random(0, 1000),
}))

const option = computed(() => {
  return {
    grid: {
      top: 85,
    },
    title: [{
      text: '经典混合图',
      subtext: '混合图指的是柱状图 + 折线图',
    }, {
      text: '第二个主标题',
      right: 0,
    }],
    xAxis: {
      type: 'category',
      name: 'X轴',
      data: data.map(o => o.name),
    },
    yAxis: [{
      type: 'value',
      name: 'Y轴1',
    }, {
      type: 'value',
      name: 'Y轴2',
    }],
    tooltip: {},
    legend: {
      type: 'plain',
    },
    series: [{
      type: 'bar',
      name: '系列一',
      data: data.map(o => o.value1),
      label: {
        show: true,
      },
    }, {
      type: 'line',
      name: '系列二',
      data: data.map(o => o.value2),
    }, {
      type: 'bar',
      name: '系列三',
      data: data.map(o => o.value3),
      label: {
        show: true,
      },
    }, {
      type: 'line',
      name: '系列四',
      data: data.map(o => o.value4),
    }, {
      type: 'line',
      name: '系列五',
      yAxisIndex: 1,
      data: data.map(o => o.value5),
    }]
  } as EChartsOption
})

</script>
