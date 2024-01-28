<template>
  <AFormItem label="颜色">
    <ColorPicker v-model="color" />
  </AFormItem>
  <AFormItem label="大小">
    <AInputNumber v-model:value="fontSize" :default-value="12" controls />
  </AFormItem>
  <AFormItem label="字重">
    <ARadioGroup v-model:value="fontWeight" button-style="solid">
      <ARadioButton v-for="x in 8" :key="x" :value="x * 100">{{ x * 100 }}</ARadioButton>
    </ARadioGroup>
  </AFormItem>
</template>

<script setup lang="ts">
import ColorPicker from '../../ColorPicker/index.vue'

const color = defineModel<any>('color')
const fontSize = defineModel<any>('fontSize')
const fontWeight = defineModel<any>('fontWeight')
</script>
