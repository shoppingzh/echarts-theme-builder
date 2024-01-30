<template>
  <div class="h-full flex overflow-hidden">
    <div class="h-full overflow-auto">
      <Select v-model="typeValue" :items="types" />
    </div>
    <div class="ml-3 flex-1 w-0 overflow-auto">
      <component v-if="type && type.component" :is="type.component" />
      <AEmpty v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import useSelect from 'magic-hooks/lib/useSelect'
import Select from '../components/Select.vue'
import Bar from './Bar.vue'
import Line from './Line.vue'
import Pie from './Pie.vue'

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
  }, {
    value: 'pie',
    label: '饼图',
    component: Pie,
    icon: 'bingtu',
  }],
  autoSelect: true,
})
</script>

