<template>
  <div class="flex items-center">
    <div v-for="(item, index) in ['上', '右', '下', '左']" :key="index" :class="{ 'ml-2': index > 0 }">
      <AInputNumber v-model:value="arr[index]">
        <template #addonBefore>{{ item }}</template>
      </AInputNumber>
    </div>
  </div>
</template>

<script setup lang="ts">
import useArrayModel from '@/hooks/useArrayModel'

const model = defineModel<number[]>({
  default: () => [],
})

const { array: arr } = useArrayModel(model)
</script>
