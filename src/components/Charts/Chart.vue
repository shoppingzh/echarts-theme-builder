<template>
  <div ref="el" />
</template>

<script setup lang="ts">
import useChart from 'magic-hooks/lib/useChart'
import { computed } from 'vue'
import { Theme, withTheme } from '@shoppingzh/tools/lib/echarts'
import { EChartsOption } from 'echarts'
import useGlogal from '@/store/useGlobal'
import { cloneDeep } from 'lodash'
import usePref from '@/store/usePref'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  option: EChartsOption
}>()
const { theme } = useGlogal()

const themeOption = computed(() => {
  const option = withTheme(cloneDeep(props.option), theme as Theme)

  // console.log(option);

  return option
})
const { darkMode } = storeToRefs(usePref())
const chartTheme = computed(() => darkMode.value ? 'dark' : undefined)

const { el } = useChart({
  option: themeOption,
  lazyRender: true,
  resizeDuration: 200,
  theme: chartTheme,
})

</script>
