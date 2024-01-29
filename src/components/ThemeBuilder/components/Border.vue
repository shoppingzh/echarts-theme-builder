<template>
  <AFormItem label="边框宽度">
    <AInputNumber v-model:value="width" />
  </AFormItem>
  <AFormItem label="边框颜色">
    <ColorPicker v-model="color" />
  </AFormItem>
  <AFormItem label="边框类型">
    <BorderStyleSelect v-model="type" />
  </AFormItem>
</template>

<script setup lang="ts">
import ColorPicker from '../../ColorPicker/index.vue'
import BorderStyleSelect from './BorderStyleSelect.vue';

const width = defineModel<any>('width')
const color = defineModel<any>('color')
const type = defineModel<any>('type')
</script>
