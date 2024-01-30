<template>
  <div
    class="relative flex flex-wrap w-[120px] h-[80px] p-2 border-gray-900/80 border-[2px]"
    :style="{ borderRadius: array.map(o => `${o}px`).join(' ') }"
    @mouseenter="show = true"
    @mouseleave="show = false">
    <div
      v-show="show"
      v-for="(item) in dirs"
      :key="item.name"
      :class="[`is-${item.name}`]"
      class="absolute z-[1] rounded-full shadow-lg cursor-pointer text-xs">
      {{ array[item.index] }}
    </div>

    <div
      v-for="(item) in dirs"
      :key="item.name"
      class="w-1/2 px-[4px] py-[2px]">
      <div class="w-full h-full flex items-center">
        <div class="button" @click="substract(item.index)">-</div>
        <div class="button" @click="add(item.index)">+</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useArrayModel from '@/hooks/useArrayModel';
import { ref } from 'vue';

interface Dir {
  name: 'lt' | 'rt' | 'rb' | 'lb'
  index: number
}
const dirs: Dir[] = [
  { name:'lt', index: 0 },
  { name:'rt', index: 1 },
  { name:'lb', index: 3 },
  { name:'rb', index: 2 },
]
const model = defineModel<any[]>()
const { array } = useArrayModel(model)
const show = ref(false)

function add(index: number) {
  const val = array.value[index] || 0
  array.value[index] = val + 1
}

function substract(index: number) {
  const val = array.value[index] || 0
  const nextVal = val - 1
  array.value[index] = Math.max(nextVal, 0)
}

if (array.value.length < 4) {
  for (let i = array.value.length - 1; i < 4; i++) {
    array.value[i] = 0
  }
}
</script>

<style scoped lang="postcss">
.is-lt {
  @apply top-0 left-0 -translate-x-full -translate-y-full;
}
.is-rt {
  @apply top-0 right-0 translate-x-full -translate-y-full;
}
.is-rb {
  @apply bottom-0 right-0 translate-x-full translate-y-full;
}
.is-lb {
  @apply bottom-0 left-0 -translate-x-full translate-y-full;
}
.button {
  @apply flex-1 w-0 text-center font-semibold cursor-pointer bg-blue-500 text-white transition-all duration-300 select-none;
  @apply hover:bg-blue-600;
}
</style>