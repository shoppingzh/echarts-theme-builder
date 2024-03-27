<template>
  <div class="flex items-center">
    <div
      v-for="(item, index) in items"
      :key="item.value"
      class="w-[50px] p-2 cursor-pointer border border-solid border-gray-400 rounded-sm"
      :class="{ 'ml-2': index > 0, '!border-red-500': item.value === activeValue }"
      @click="activeValue = item.value">
      <div class="w-full border-[1px] border-gray-950 dark:border-gray-400" :class="{ 'border-red-500': item.value === activeValue }" :style="{ borderStyle: item.value as any }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useSelect from 'magic-hooks/lib/useSelect'

const model = defineModel<string>()

const { activeValue, items, } = useSelect({
  items: [{
    value: 'solid',
    label: '实线',
  }, {
    value: 'dashed',
    label: '虚线',
  }, {
    value: 'dotted',
    label: '打点',
  }],
  initialValue: model,
})
</script>
