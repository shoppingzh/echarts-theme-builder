<template>
  <AFormItem :label="`${ns}颜色`">
    <ColorPicker v-model="config.color" />
  </AFormItem>
  <AFormItem :label="`${ns}宽度`">
    <AInputNumber v-model:value="config.width" :default-value="2" />
  </AFormItem>
  <AFormItem :label="`${ns}线条类型`">
    <BorderStyleSelect v-model="config.type" />
  </AFormItem>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import ColorPicker from '../../ColorPicker/index.vue'
import BorderStyleSelect from './BorderStyleSelect.vue'

const props = withDefaults(defineProps<{
  ns?: string
  config: Record<string, any>
}>(), {
  ns: '',
})
const { config } = toRefs(props)
</script>
