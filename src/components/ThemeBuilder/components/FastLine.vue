<template>
  <AFormItem label="颜色">
    <ColorPicker v-model="config.color" />
  </AFormItem>
  <AFormItem label="宽度">
    <AInputNumber v-model:value="config.width" :default-value="2" />
  </AFormItem>
  <AFormItem label="线条类型">
    <BorderStyleSelect v-model="config.type" />
  </AFormItem>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import ColorPicker from '../../ColorPicker/index.vue'
import BorderStyleSelect from './BorderStyleSelect.vue'

const props = defineProps<{
  config: Record<string, any>
}>()
const { config } = toRefs(props)
</script>
