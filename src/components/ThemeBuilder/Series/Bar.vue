<template>
  <ACollapse v-model:active-key="activeKeys">
    <ACollapsePanel header="柱子" key="bar">
      <AFormItem label="柱子宽度">
        <AInputNumber v-model:value="theme.series.bar.barWidth" :default-value="40" />
      </AFormItem>
      <AFormItem label="颜色">
        <ColorPicker v-model="theme.series.bar.itemStyle.color" />
      </AFormItem>
      <FastBorder
        v-model:width="theme.series.bar.itemStyle.borderWidth"
        v-model:color="theme.series.bar.itemStyle.borderColor"
        v-model:type="theme.series.bar.itemStyle.borderType" />

      <AFormItem label="边框圆角">
        <Radius v-model="theme.series.bar.itemStyle.borderRadius" />
      </AFormItem>
      <AFormItem label="堆叠">
        <ASwitch v-model:checked="theme.series.bar.stack" checked-value="1" :un-checked-value="undefined" />
      </AFormItem>
    </ACollapsePanel>

    <ACollapsePanel header="背景" key="bg">
      <AFormItem label="显示">
        <ASwitch v-model:checked="theme.series.bar.showBackground" />
      </AFormItem>
      <AFormItem label="颜色">
        <ColorPicker v-model="theme.series.bar.backgroundStyle.color" />
      </AFormItem>
      <FastBorder
        v-model:width="theme.series.bar.backgroundStyle.borderWidth"
        v-model:color="theme.series.bar.backgroundStyle.borderColor"
        v-model:type="theme.series.bar.backgroundStyle.borderType" />
    </ACollapsePanel>

    <ACollapsePanel header="标签" key="label">
      <FastLabel :config="theme.series.bar.label" />
    </ACollapsePanel>
  </ACollapse>
</template>

<script setup lang="ts">
import useGlobal from '@/store/useGlobal';
import { ref } from 'vue';
import ColorPicker from '../../ColorPicker/index.vue'
import FastBorder from '../components/FastBorder.vue';
import FastLabel from '../components/FastLabel.vue';
import Radius from '../components/Radius.vue';

const activeKeys = ref(['bar', 'bg', 'label'])
const { theme } = useGlobal()
</script>
