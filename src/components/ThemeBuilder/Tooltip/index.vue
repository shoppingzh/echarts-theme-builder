<template>
  <ACollapse v-model:active-key="activeKeys">
    <ACollapsePanel key="base" header="基础">
      <AFormItem label="边距">
        <Space v-model="theme.tooltip.padding" />
      </AFormItem>
      <AFormItem label="触发位置">
        <ARadioGroup v-model:value="theme.tooltip.trigger">
          <ARadio value="item">目标元素上</ARadio>
          <ARadio value="axis">坐标轴上</ARadio>
        </ARadioGroup>
      </AFormItem>
      <AFormItem label="触发方式">
        <ARadioGroup v-model:value="theme.tooltip.triggerOn">
          <ARadio value="mousemove">鼠标移动</ARadio>
          <ARadio value="click">点击</ARadio>
          <ARadio value="none">禁用</ARadio>
        </ARadioGroup>
      </AFormItem>
      <AFormItem label="是否可进入">
        <ASwitch v-model:checked="theme.tooltip.enterable" />
      </AFormItem>
    </ACollapsePanel>
    <ACollapsePanel key="pointer" header="坐标轴指示器">
      <FastAxisPointer
        v-model:type="theme.tooltip.axisPointer.type" />
    </ACollapsePanel>
    <ACollapsePanel key="bg" header="背景/边框">
      <AFormItem label="背景色">
        <ColorPicker v-model="theme.tooltip.backgroundColor" />
      </AFormItem>
      <FastBorder
        v-model:color="theme.tooltip.borderColor"
        v-model:width="theme.tooltip.borderWidth"
        hide-type />
      <!-- <AFormItem label="边框圆角">
        <Radius v-model="theme.tooltip.borderRadius" />
      </AFormItem> -->
    </ACollapsePanel>
    <ACollapsePanel key="text" header="文字">
      <FastTextStyle
        v-model:color="theme.tooltip.textStyle.color"
        v-model:font-size="theme.tooltip.textStyle.fontSize"
        v-model:font-weight="theme.tooltip.textStyle.fontWeight"
        hide-border-color
        hide-border-type
        hide-border-width />
    </ACollapsePanel>
  </ACollapse>
</template>

<script setup lang="ts">
import useGlobal from '@/store/useGlobal'
import { ref } from 'vue'
import ColorPicker from '../../ColorPicker/index.vue'
import FastBorder from '../components/FastBorder.vue'
import FastAxisPointer from '../components/FastAxisPointer.vue'
// import Radius from '../components/Radius.vue';
import FastTextStyle from '../components/FastTextStyle.vue'
import Space from '../components/Space.vue'

const activeKeys = ref(['base', 'pointer', 'bg', 'text'])
const { theme } = useGlobal()
</script>
