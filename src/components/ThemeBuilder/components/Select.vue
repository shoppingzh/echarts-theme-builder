<template>
  <div
    v-for="(item, index) in props.items"
    :key="index"
    :class="{ 'mt-3': index > 0, '!border-blue-700 font-semibold': model === item.value }"
    class="flex flex-col w-[120px] h-[60px] p-1 border border-solid border-gray-300 cursor-pointer"
    @click="model = item.value">
    <div class="flex-1 h-0">
      <SvgIcon :name="item.icon" class="chart" :class="{ '!text-blue-700': model === item.value }" />
    </div>
    <div class="mt-1 text-center text-gray-500 text-xs">{{ item.label }}</div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'

type ItemValue = string | number
interface Item {
  value: ItemValue
  label?: string
  icon?: string
}
const props = defineProps<{
  items: Item[]
}>()
const model = defineModel<ItemValue>()
</script>

<style scoped lang="postcss">
.chart {
  @apply block w-full h-full;
  :deep(svg) {
    @apply !w-full !h-full;
  }
}
</style>
