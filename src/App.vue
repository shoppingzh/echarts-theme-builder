
<template>
  <div class="h-full flex flex-col">
    <div class="flex items-center h-[50px] px-4 bg-white shadow-sm">
      <div class="flex-1 w-0"></div>
      <AButton type="primary" @click="popper.design = true">编辑</AButton>
    </div>
    <div class="flex-1 h-0 p-4 overflow-auto">
      <Charts />
    </div>
  </div>

  <ADrawer
    v-model:open="popper.design"
    title="主题编辑器"
    size="large"
    :mask-style="{ backgroundColor: 'rgba(200, 200, 200, .1)' }">
    <ThemeBuilder />
  </ADrawer>
</template>

<script setup lang="ts">
import Charts from '@/components/Charts/index.vue'
import ThemeBuilder from '@/components/ThemeBuilder/index.vue'
import { reactive } from 'vue';

const popper = reactive({
  design: false,
})
</script>

