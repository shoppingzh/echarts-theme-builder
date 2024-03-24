<template>
  <ACollapse v-model:active-key="activeKeys">
    <ACollapsePanel key="line" header="线条">
      <FastLine :config="theme.series.line.lineStyle" />
      <AFormItem label="平滑曲线">
        <ASwitch v-model:checked="theme.series.line.smooth" />
      </AFormItem>
      <AFormItem label="阶梯">
        <ASwitch v-model:checked="theme.series.line.step" />
      </AFormItem>
    </ACollapsePanel>
    <ACollapsePanel key="dot" header="点">
      <AFormItem label="隐藏">
        <ASwitch v-model:checked="theme.series.line.showSymbol" :checked-value="false" :un-checked-value="true" />
      </AFormItem>
      <AFormItem label="形状">
        <SymbolSelect v-model="theme.series.line.symbol" />
      </AFormItem>
      <AFormItem label="大小">
        <AInputNumber v-model:value="theme.series.line.symbolSize" :default-value="4" />
      </AFormItem>
      <AFormItem label="旋转角度">
        <AInputNumber v-model:value="theme.series.line.symbolRotate" :step="15" :min="0" :max="360" />
      </AFormItem>
    </ACollapsePanel>
    <ACollapsePanel key="area" header="面积">
      <AFormItem label="颜色" tooltip="设置后将统一为一种颜色，谨慎设置">
        <ColorPicker v-model="theme.series.line.areaStyle.color" />
      </AFormItem>
      <AFormItem label="透明度">
        <AInputNumber v-model:value="theme.series.line.areaStyle.opacity" :min="0.1" :max="1" :step="0.1" />
      </AFormItem>
    </ACollapsePanel>
  </ACollapse>
</template>

<script setup lang="ts">
import useGlobal from '@/store/useGlobal'
import { ref } from 'vue'
import ColorPicker from '../../ColorPicker/index.vue'
import SymbolSelect from '../components/SymbolSelect.vue'
import FastLine from '../components/FastLine.vue'

const activeKeys = ref(['line', 'dot', 'area'])
const { theme } = useGlobal()
</script>
