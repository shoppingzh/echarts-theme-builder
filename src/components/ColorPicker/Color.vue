<template>
  <div
    class="inline-block w-8 h-8 cursor-pointer border border-gray-200 rounded-md text-[0px]"
    :style="{ background: background }" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { isGradientColor, isHorizontal, isNormalColor } from './util';
import { Color, LinearGradientObject } from 'echarts';

const props = defineProps<{
  color: Color
}>()

const background = computed(() => {
  if (isNormalColor(props.color)) {
    return props.color as string
  } else if (isGradientColor(props.color)) {
    const steps = props.color.colorStops.map(o => `${o.color} ${o.offset * 100}%`).join(', ')
    if (props.color.type === 'linear') {
      const horizontal = isHorizontal(props.color as LinearGradientObject)
      return `linear-gradient(${horizontal ? '90deg' : '180deg'}, ${steps})`
    } else if (props.color.type === 'radial') {
      return `radial-gradient(ellipse ${props.color.r * 100}% ${props.color.r * 100}% at ${props.color.x * 100}% ${props.color.y * 100}%, ${steps})`
    }
  }

  return ''
})
</script>
