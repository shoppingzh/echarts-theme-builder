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
import { watch } from 'vue';
import { ref } from 'vue';

const model = defineModel<number[]>({
  default: () => [],
})

const arr = ref<number[]>([null, null, null, null])

function init() {
  if (!model.value) return
  arr.value = [model.value[0], model.value[1], model.value[2], model.value[3]]
}

init()

watch(arr, () => {
  model.value = arr.value.every(o => o == null) ? undefined : arr.value.map(o => o == null ? 0 : o)
}, {
  immediate: true,
  deep: true,
})
</script>
