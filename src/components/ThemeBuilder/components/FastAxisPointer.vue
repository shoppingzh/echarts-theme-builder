<template>
  <AFormItem label="类型">
    <ARadioGroup v-model="type">
      <ARadio value="line">直线</ARadio>
      <ARadio value="shadow">阴影</ARadio>
      <ARadio value="cross">十字准星</ARadio>
      <ARadio value="none">无</ARadio>
    </ARadioGroup>
  </AFormItem>
</template>

<script setup lang="ts">
const type = defineModel('type')
</script>
