<template>
  <div ref="el" />
</template>

<script setup lang="ts">
import useChart from 'magic-hooks/lib/useChart'
import { computed } from 'vue';
import { Theme, withTheme } from '@shoppingzh/tools/lib/echarts'
import { EChartsOption } from 'echarts'
import useGlogal from '@/store/global'
import { cloneDeep } from 'lodash'

const props = defineProps<{
  option: EChartsOption
}>()
const { theme } = useGlogal()

const themeOption = computed(() => {
  const option = withTheme(cloneDeep(props.option), theme as Theme)

  console.log(option);
  
  return option
})

const { el } = useChart({
  option: themeOption,
})

</script>
