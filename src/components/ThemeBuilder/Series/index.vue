<template>
  <div class="h-full flex">
    <div class="h-full overflow-auto">
      <div
        v-for="(item, index) in types"
        :key="index"
        :class="{ 'mt-2': index > 0, 'text-blue-700 border-blue-700 font-semibold': typeValue === item.value }"
        class="p-4 border border-solid border-gray-300 cursor-pointer"
        @click="typeValue = item.value">
        {{ item.label }}
      </div>
    </div>
    <div class="ml-3 flex-1 w-0">
      <component v-if="type && type.component" :is="type.component" />
      <AEmpty v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import useSelect from 'magic-hooks/lib/useSelect'
import Bar from './Bar.vue'

const { activeValue: typeValue, activeItem: type, items: types, } = useSelect({
  items: [{
    value: 'bar',
    label: '柱状图',
    component: Bar,
  }, {
    value: 'line',
    label: '折线图',
  }],
  autoSelect: true,
})
</script>
