<template>
  <AFormItem label="文字颜色">
    <ColorPicker v-model="color" />
  </AFormItem>
  <AFormItem label="文字大小">
    <AInputNumber v-model:value="fontSize" :default-value="12" controls />
  </AFormItem>
  <AFormItem label="文字重量">
    <ARadioGroup v-model:value="fontWeight" button-style="solid">
      <ARadioButton v-for="x in 8" :key="x" :value="x * 100">{{ x * 100 }}</ARadioButton>
    </ARadioGroup>
  </AFormItem>
  <AFormItem v-if="!hideBorderWidth" label="文字描边宽度">
    <AInputNumber v-model:value="borderWidth" />
  </AFormItem>
  <AFormItem v-if="!hideBorderColor" label="文字描边颜色">
    <ColorPicker v-model="borderColor" />
  </AFormItem>
  <AFormItem v-if="!hideBorderType" label="文字描边类型">
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

defineProps<{
  hideBorderWidth?: boolean
  hideBorderColor?: boolean
  hideBorderType?: boolean
}>()
</script>
