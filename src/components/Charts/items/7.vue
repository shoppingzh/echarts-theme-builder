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
    },
    title: {
      text: '树图',
    },
    tooltip: {},
    legend: {},
    series: [{
      type: 'tree',
      name: '系列一',
      orient: 'TB',
      data: [{
        name: '节点1',
        children: [{
          name: '节点1-1',
        }, {
          name: '节点1-2',
          children: [{
            name: '节点1-2-1',
          }, {
            name: '节点1-2-2',
          }, {
            name: '节点1-2-3',
          }]
        }, {
          name: '节点1-3',
          children: [{
            name: '节点1-3-1'
          }, {
            name: '节点1-3-2',
            children: [{
              name: '节点1-3-2-1'
            }]
          }]
        }]
      }]
    }]
  } as EChartsOption
})

</script>
