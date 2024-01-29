<template>
  <ACollapse v-model:active-key="activeKeys">
    <ACollapsePanel header="基础" key="1">
      <AFormItem label="边距">
        <Space v-model="space" />
      </AFormItem>
      <AFormItem label="背景色">
        <ColorPicker v-model="theme.grid.backgroundColor" />
      </AFormItem>
      <AFormItem label="边框宽度">
        <AInputNumber v-model="theme.grid.borderWidth" />
      </AFormItem>
      <AFormItem label="边框颜色">
        <ColorPicker v-model="theme.grid.borderColor" />
      </AFormItem>
    </ACollapsePanel>
  </ACollapse>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Space from '../components/Space.vue';
import useGlobal from '@/store/global';
import ColorPicker from '../../ColorPicker/index.vue'
import { ref } from 'vue';

const { theme } = useGlobal()

const space = computed({
  get() {
    return [theme.grid.top, theme.grid.right, theme.grid.bottom, theme.grid.left] as number[]
  },
  set(newVal) {
    if (!newVal) return
    theme.grid.top = newVal[0]
    theme.grid.right = newVal[1]
    theme.grid.bottom = newVal[2]
    theme.grid.left = newVal[3]
  }
})
const activeKeys = ref(['1'])
</script>
