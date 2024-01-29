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
  <AFormItem label="描边宽度">
    <AInputNumber v-model:value="borderWidth" />
  </AFormItem>
  <AFormItem label="描边颜色">
    <ColorPicker v-model="borderColor" />
  </AFormItem>
  <AFormItem label="描边类型">
    <BorderStyleSelect v-model="borderType" />
  </AFormItem>
</template>

<script setup lang="ts">
import ColorPicker from '../../ColorPicker/index.vue'
import BorderStyleSelect from '../components/BorderStyleSelect.vue'

const color = defineModel<any>('color')
const fontSize = defineModel<any>('fontSize')
const fontWeight = defineModel<any>('fontWeight')
const borderColor = defineModel<any>('borderColor')
const borderWidth = defineModel<any>('borderWidth')
const borderType = defineModel<any>('borderType')
</script>
