
<template>
  <div class="h-full flex flex-col">
    <div class="flex items-center h-[50px] px-4 bg-white shadow-sm">
      <div class="relative flex-1 w-0 text-lg font-semibold">
        <div class="absolute select-none -left-2 bottom-0 w-5 h-5 bg-pink-800/30 rounded-full pointer-events-none" />
        Echarts主题设计器
      </div>
      <AButton type="primary" @click="popper.design = true">设计(Ctrl+B)</AButton>
      <AButton type="dashed" danger class="ml-4" @click="download()">下载主题</AButton>
    </div>
    <div class="flex-1 h-0 p-4 overflow-auto">
      <Charts />
    </div>
  </div>

  <ADrawer
    v-model:open="popper.design"
    title="主题设计器(Ctrl+B)"
    size="large"
    :body-style="{ padding: '12px' }"
    :mask-style="{ backgroundColor: 'rgba(200, 200, 200, .1)' }">
    <ThemeBuilder />
  </ADrawer>

  <!-- <AFloatButtonGroup>
    <AFloatButton></AFloatButton>
  </AFloatButtonGroup> -->
</template>

<script setup lang="ts">
import Charts from '@/components/Charts/index.vue'
import ThemeBuilder from '@/components/ThemeBuilder/index.vue'
import { reactive } from 'vue';
import hotkeys from 'hotkeys-js'
import useGlobal from '@/store/global'

const popper = reactive({
  design: false,
})
const { download } = useGlobal()

hotkeys('ctrl+b', (e) => {
  popper.design = !popper.design
  e.preventDefault()
})
</script>

