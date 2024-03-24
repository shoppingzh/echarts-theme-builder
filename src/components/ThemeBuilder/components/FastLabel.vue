<template>
  <FastTextStyle
    v-model:color="config.color"
    v-model:fontSize="config.fontSize"
    v-model:fontWeight="config.fontWeight"
    v-model:border-color="config.textBorderColor"
    v-model:border-width="config.textBorderWidth"
    v-model:border-type="config.textBorderType" />
  <AFormItem label="背景色">
    <ColorPicker v-model="config.backgroundColor" />
  </AFormItem>
  <AFormItem label="旋转角度">
    <AInputNumber v-model:value="config.rotate" :min="-90" :max="90" :step="15" />
  </AFormItem>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import FastTextStyle from './FastTextStyle.vue'

const props = defineProps<{
  config: Record<string, any>
}>()
const { config } = toRefs(props)
</script>
