<template>
  <div class="h-full flex overflow-hidden">
    <div class="h-full overflow-auto">
      <Select v-model="typeValue" :items="types" />
    </div>
    <div class="ml-3 flex-1 w-0 overflow-auto">
      <Legend v-if="typeValue" :key="typeValue" :config="theme.legend[typeValue as any]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useSelect from 'magic-hooks/lib/useSelect'
import Select from '../components/Select.vue'
import Legend from './Legend.vue'
import useGlobal from '@/store/useGlobal'

const { theme } = useGlobal()
const { activeValue: typeValue, items: types, } = useSelect({
  items: [{
    value: 'plain',
    label: '普通图例',
    icon: 'tuli',
  }, {
    value: 'scroll',
    label: '滚动图例',
    icon: 'gundong',
  }],
  autoSelect: true,
})
</script>
