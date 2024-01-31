<template>
  <div class="h-full flex overflow-hidden">
    <div class="h-full overflow-auto">
      <Select v-model="typeValue" :items="types" />
    </div>
    <div class="ml-3 flex-1 w-0 overflow-auto">
      <Value v-if="typeValue" :key="typeValue" :config="theme.axis[typeValue as any]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useSelect from 'magic-hooks/lib/useSelect'
import Select from '../components/Select.vue'
import Value from './Value.vue';
import useGlobal from '@/store/useGlobal';

const { theme } = useGlobal()
const { activeValue: typeValue, activeItem: type, items: types, } = useSelect({
  items: [{
    value: 'category',
    label: '类目轴',
    // component: Category,
    icon: 'fenlei',
  }, {
    value: 'value',
    label: '值轴',
    component: Value,
    icon: 'shuzhi',
  }, {
    value: 'time',
    label: '时间轴',
    // component: Pie,
    icon: 'shijian',
  }, {
    value: 'log',
    label: '对数轴',
    // component: Pie,
    icon: 'duishu',
  }, ],
  autoSelect: true,
})
</script>
