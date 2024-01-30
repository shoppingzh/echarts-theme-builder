<template>
  <ACollapse v-model:active-key="activeKeys">
    <ACollapsePanel header="名称" key="name">
      <FastTextStyle
        v-model:color="config.nameTextStyle.color"
        v-model:font-size="config.nameTextStyle.fontSize"
        v-model:font-weight="config.nameTextStyle.fontWeight"
        v-model:border-color="config.nameTextStyle.textBorderColor"
        v-model:border-width="config.nameTextStyle.textBorderWidth"
        v-model:border-type="config.nameTextStyle.textBorderType" />
      <AFormItem label="旋转角度">
        <AInputNumber v-model:value="config.nameRotate" :min="0" :max="360" :step="15" />
      </AFormItem>
    </ACollapsePanel>

    <ACollapsePanel header="轴线" key="line">
      <FastLine :config="config.axisLine.lineStyle" />
    </ACollapsePanel>
    <ACollapsePanel header="标签" key="label">
      <FastLabel :config="config.axisLabel" />
    </ACollapsePanel>

    <ACollapsePanel header="刻度" key="tick">
      <AFormItem label="长度">
        <AInputNumber v-model:value="config.axisTick.length" :default-value="5" />
      </AFormItem>
      <AFormItem label="朝里">
        <ASwitch v-model:checked="config.axisTick.inside" />
      </AFormItem>
      <FastLine :config="config.axisTick.lineStyle" />
    </ACollapsePanel>
    <ACollapsePanel header="分割线" key="split-line">
      <FastLine :config="config.splitLine.lineStyle" />
    </ACollapsePanel>
  </ACollapse>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FastTextStyle from '../components/FastTextStyle.vue'
import FastLine from '../components/FastLine.vue';
import { XAXisComponentOption } from 'echarts';
import { toRefs } from 'vue';
import FastLabel from '../components/FastLabel.vue';

const props = defineProps<{
  config: XAXisComponentOption
}>()
const { config } = toRefs(props)
const activeKeys = ref(['name', 'label', 'line', 'split-line', 'tick'])

</script>
