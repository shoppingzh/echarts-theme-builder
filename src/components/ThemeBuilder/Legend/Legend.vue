<template>
  <ACollapse v-model:active-key="activeKeys">
    <ACollapsePanel key="graph" header="图形">
      <AFormItem label="图标">
        <SymbolSelect v-model="config.icon" />
      </AFormItem>
      <AFormItem label="宽度">
        <AInputNumber v-model:value="config.itemWidth" :default-value="25" />
      </AFormItem>
      <AFormItem label="高度">
        <AInputNumber v-model:value="config.itemHeight" :default-value="14" />
      </AFormItem>
      <AFormItem label="距离">
        <AInputNumber v-model:value="config.itemGap" />
      </AFormItem>
      <AFormItem label="颜色">
        <ColorPicker v-model="config.itemStyle.color" />
      </AFormItem>
    </ACollapsePanel>
    <ACollapsePanel key="text" header="文字">
      <FastTextStyle
        v-model:color="config.textStyle.color"
        v-model:font-size="config.textStyle.fontSize"
        v-model:font-weight="config.textStyle.fontWeight"
        hide-border-color
        hide-border-type
        hide-border-width />
    </ACollapsePanel>
  </ACollapse>
</template>

<script setup lang="ts">
import { LegendComponentOption } from 'echarts'
import { toRefs } from 'vue'
import { ref } from 'vue'
import ColorPicker from '../../ColorPicker/index.vue'
import SymbolSelect from '../components/SymbolSelect.vue'

const activeKeys = ref(['graph', 'text'])

const props = defineProps<{
  config: LegendComponentOption
}>()
const { config } = toRefs(props)
</script>
