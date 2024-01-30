<template>
  <ARadioGroup v-model:value="model">
    <ARadio
      v-for="item in items"
      :key="item.value"
      :value="item.value">{{ item.label }}</ARadio>
  </ARadioGroup>
</template>

<script setup lang="ts">
import useSelect from 'magic-hooks/lib/useSelect';

const model = defineModel<string>()

const { items } = useSelect({
  items: [{
    value: 'circle',
    label: '圆形'
  }, {
    value: 'rect',
    label: '矩形',
  }, {
    value: 'roundRect',
    label: '圆角矩形',
  }, {
    value: 'triangle',
    label: '三角形',
  }, {
    value: 'diamond',
    label: '钻石',
  }, {
    value: 'pin',
    label: '别针',
  }, {
    value: 'arrow',
    label: '箭头',
  }, {
    value: 'none',
    label: '无',
  }],
  initialValue: model,
})
</script>
