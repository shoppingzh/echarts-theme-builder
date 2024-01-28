<template>
  <div class="h-full flex flex-col">
    <ASegmented
      v-model:value="(activeValue as any)"
      block
      :options="items.map(o => ({ value: o.value as any, label: o.label, disabled: o.disabled, }))" />

    <div class="mt-4 flex-1 h-0 overflow-auto">
      <component v-if="activeItem" :is="activeItem.component" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useSelect from 'magic-hooks/lib/useSelect'
import Global from './Global/index.vue'
import Title from './Title/index.vue'

const { activeValue, activeItem, items, } = useSelect({
  items: [{
    value: 'global',
    label: '全局',
    component: Global,
  }, {
    value: 'title',
    label: '标题',
    component: Title,
  }, {
    value: 'series',
    label: '系列',
    component: null,
  }],
  autoSelect: true,
})
</script>
