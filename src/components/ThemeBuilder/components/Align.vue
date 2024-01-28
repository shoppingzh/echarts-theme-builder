<template>
  <ARadioGroup v-model:value="model">
    <ARadioButton value="auto">自动</ARadioButton>
    <ARadioButton value="left">左对齐</ARadioButton>
    <ARadioButton value="center">居中对齐</ARadioButton>
    <ARadioButton value="right">右对齐</ARadioButton>
  </ARadioGroup>
</template>

<script setup lang="ts">

const model = defineModel<any>()
</script>
