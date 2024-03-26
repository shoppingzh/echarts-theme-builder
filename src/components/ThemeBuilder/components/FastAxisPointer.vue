<template>
  <AFormItem label="类型">
    <ARadioGroup v-model:value="config.type">
      <ARadio value="line">直线</ARadio>
      <ARadio value="shadow">阴影</ARadio>
      <ARadio value="cross">十字准星</ARadio>
      <ARadio value="none">无</ARadio>
    </ARadioGroup>
  </AFormItem>
  <FastLine :config="config.lineStyle" ns="纵线" />
  <FastLine :config="config.crossStyle" ns="横线" />
  <AFormItem label="阴影颜色">
    <ColorPicker v-model:model-value="config.shadowStyle.color" />
  </AFormItem>
</template>

<script setup lang="ts">
import { EChartsOption } from 'echarts'
import FastLine from './FastLine.vue'
import { toRefs } from 'vue'
import ColorPicker from '@/components/ColorPicker/index.vue'

type ToItem<T> = T extends Array<infer E> ? E : T
type Tooltip = ToItem<EChartsOption['tooltip']>

const props = defineProps<{
  config: ToItem<Tooltip['axisPointer']>
}>()
const { config } = toRefs(props)

</script>
