<template>
  <ACollapse v-model:active-key="activeKeys">
    <ACollapsePanel key="1" header="基础">
      <AFormItem label="显示">
        <ASwitch v-model:checked="theme.grid.show" />
      </AFormItem>
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
import { computed } from 'vue'
import Space from '../components/Space.vue'
import useGlobal from '@/store/useGlobal'
import ColorPicker from '../../ColorPicker/index.vue'
import { ref } from 'vue'

const { theme } = useGlobal()

const space = computed({
  get() {
    return [theme.grid.top, theme.grid.right, theme.grid.bottom, theme.grid.left] as number[]
  },
  set(newVal) {
    theme.grid.top = newVal ? newVal[0] : undefined
    theme.grid.right = newVal ? newVal[1] : undefined
    theme.grid.bottom = newVal ? newVal[2] : undefined
    theme.grid.left = newVal ? newVal[3] : undefined
  }
})
const activeKeys = ref(['1'])
</script>
