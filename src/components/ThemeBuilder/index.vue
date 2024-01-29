<template>
  <div class="h-full flex flex-col">
    <ASegmented
      v-model:value="activeValue"
      block
      :options="items.map(o => ({ value: o.value as any, label: o.label, disabled: o.disabled, }))" />

    <AForm class="mt-4 flex-1 h-0 overflow-auto">
      <component v-if="activeItem && activeItem.component" :is="activeItem.component" />
      <AEmpty v-else />
    </AForm>
  </div>
</template>

<script setup lang="ts">
import useSelect from 'magic-hooks/lib/useSelect'
import Global from './Global/index.vue'
import Grid from './Grid/index.vue'
import Title from './Title/index.vue'
// import Axis from './Axis/index.vue'
import Series from './Series/index.vue'

const { activeValue, activeItem, items, } = useSelect({
  items: [{
    value: 'global',
    label: '全局',
    component: Global,
  }, {
    value: 'grid',
    label: '网格',
    component: Grid,
  }, {
    value: 'title',
    label: '标题',
    component: Title,
  }, {
    value: 'axis',
    label: '坐标轴',
    component: null,
  }, {
    value: 'legend',
    label: '图例',
    component: null,
  }, {
    value: 'tooltip',
    label: 'Tooltip',
    component: null,
  }, {
    value: 'series',
    label: '系列',
    component: Series,
  }],
  autoSelect: true,
})
</script>
