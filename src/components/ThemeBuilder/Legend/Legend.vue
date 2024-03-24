<template>
  <ACollapse v-model:active-key="activeKeys">
    <ACollapsePanel key="base" header="基础">
      <AFormItem label="距离">
        <AInputNumber v-model:value="config.itemGap" />
      </AFormItem>
      <AFormItem label="位置">
        <PositionSelect v-model:model-value="position" />
      </AFormItem>
    </ACollapsePanel>
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
import { toRefs, ref, computed } from 'vue'
import ColorPicker from '../../ColorPicker/index.vue'
import SymbolSelect from '../components/SymbolSelect.vue'
import PositionSelect, { Position } from '../components/PositionSelect.vue'

const props = defineProps<{
  config: LegendComponentOption
}>()
const { config } = toRefs(props)

const activeKeys = ref(['base', 'graph', 'text'])
const position = computed<Position>({
  get() {
    const all = []
    if (config.value.left === 'left') {
      all.push('l')
    } else if (config.value.left === 'right') {
      all.push('r')
    }

    if (config.value.top === 'top') {
      all.push('t')
    } else if (config.value.top === 'bottom') {
      all.push('b')
    }

    if (config.value.left === 'center' && config.value.top === 'middle') {
      all.push('c')
    }

    return all.join('') as Position
  },
  set(newVal) {
    if (newVal === 'lt') {
      setPosition('left', 'top')
    } else if (newVal === 't') {
      setPosition('center', 'top')
    } else if (newVal === 'rt') {
      setPosition('right', 'top')
    } else if (newVal === 'l') {
      setPosition('left', 'middle')
    } else if (newVal === 'c') {
      setPosition('center', 'middle')
    } else if (newVal === 'r') {
      setPosition('right', 'middle')
    } else if (newVal === 'lb') {
      setPosition('left', 'bottom')
    } else if (newVal === 'b') {
      setPosition('center', 'bottom')
    } else if (newVal === 'rb') {
      setPosition('right', 'bottom')
    }
  }
})

function setPosition(left?: any, top?: any) {
  config.value.left = left
  config.value.top = top
  config.value.right = undefined
  config.value.bottom = undefined
}

</script>
