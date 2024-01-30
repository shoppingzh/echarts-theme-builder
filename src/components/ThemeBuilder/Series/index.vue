<template>
  <div class="h-full flex overflow-hidden">
    <div class="h-full overflow-auto">
      <div
        v-for="(item, index) in types"
        :key="index"
        :class="{ 'mt-2': index > 0, '!border-blue-700 font-semibold': typeValue === item.value }"
        class="flex flex-col w-[120px] h-[60px] p-1 border border-solid border-gray-300 cursor-pointer"
        @click="typeValue = item.value">
        <div class="flex-1 h-0">
          <SvgIcon :name="item.icon" class="chart" />
        </div>
        <div class="mt-1 text-center text-gray-500 text-xs">{{ item.label }}</div>
      </div>
    </div>
    <div class="ml-3 flex-1 w-0 overflow-auto">
      <component v-if="type && type.component" :is="type.component" />
      <AEmpty v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
import useSelect from 'magic-hooks/lib/useSelect'
import Bar from './Bar.vue'
import Line from './Line.vue'

const { activeValue: typeValue, activeItem: type, items: types, } = useSelect({
  items: [{
    value: 'bar',
    label: '柱状图',
    component: Bar,
    icon: 'zhuzhuangtu',
  }, {
    value: 'line',
    label: '折线图',
    component: Line,
    icon: 'zhexiantu',
  }],
  autoSelect: true,
})
</script>

<style scoped lang="postcss">
.chart {
  @apply block w-full h-full;
  :deep(svg) {
    @apply !w-full !h-full;
  }
}
</style>