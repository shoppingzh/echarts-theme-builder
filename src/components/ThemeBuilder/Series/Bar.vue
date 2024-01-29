<template>
  <ACollapse v-model:active-key="activeKeys">
    <ACollapsePanel header="柱子" key="bar">
      <AFormItem label="柱子宽度">
        <AInputNumber v-model:value="theme.series.bar.barWidth" :default-value="20" />
      </AFormItem>
      <AFormItem label="颜色">
        <ColorPicker v-model="theme.series.bar.itemStyle.color" />
      </AFormItem>
      <Border
        v-model:width="theme.series.bar.itemStyle.borderWidth"
        v-model:color="theme.series.bar.itemStyle.borderColor"
        v-model:type="theme.series.bar.itemStyle.borderType" />
    </ACollapsePanel>
  </ACollapse>
</template>

<script setup lang="ts">
import useGlobal from '@/store/global';
import { ref } from 'vue';
import ColorPicker from '../../ColorPicker/index.vue'
import Border from '../components/Border.vue';

const activeKeys = ref(['bar'])
const { theme } = useGlobal()
</script>
