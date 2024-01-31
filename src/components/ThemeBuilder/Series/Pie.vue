<template>
  <ACollapse v-model:active-key="activeKeys">
    <ACollapsePanel header="饼子" key="item">
      <AFormItem label="半径">
        <div class="flex items-center">
          <AInputNumber v-model:value="radius1" addon-before="从" addon-after="%" />
          <AInputNumber v-model:value="radius2" addon-before="到" addon-after="%" class="pl-2" />
        </div>
      </AFormItem>
      <AFormItem label="颜色">
        <ColorPicker v-model="theme.series.pie.itemStyle.color" />
      </AFormItem>
      <AFormItem label="顺时针排布">
        <ASwitch v-model:checked="theme.series.pie.clockwise" />
      </AFormItem>
      <AFormItem label="南丁格尔图">
        <ASwitch v-model:checked="theme.series.pie.roseType" />
      </AFormItem>
      <FastBorder
        v-model:width="theme.series.pie.itemStyle.borderWidth"
        v-model:color="theme.series.pie.itemStyle.borderColor"
        v-model:type="theme.series.pie.itemStyle.borderType" />
      <!-- <AFormItem label="圆角">
        <Radius v-model="theme.series.pie.itemStyle.borderRadius" />
      </AFormItem> -->
    </ACollapsePanel>
    <ACollapsePanel header="标签" key="label">
      <AFormItem label="位置">
        <ARadioGroup v-model:value="theme.series.pie.label.position">
          <ARadio value="outside">外面</ARadio>
          <ARadio value="inside">里面</ARadio>
          <ARadio value="center">中间</ARadio>
        </ARadioGroup>
      </AFormItem>
      <FastLabel :config="theme.series.pie.label" />
    </ACollapsePanel>
    <ACollapsePanel header="标签线" key="label-line">
      <AFormItem label="第一段长度">
        <AInputNumber v-model:value="theme.series.pie.labelLine.length" :default-value="10" />
      </AFormItem>
      <AFormItem label="第二段长度">
        <AInputNumber v-model:value="theme.series.pie.labelLine.length2" :default-value="10" />
      </AFormItem>
      <AFormItem label="平滑曲线">
        <ASwitch v-model:checked="theme.series.pie.labelLine.smooth" />
      </AFormItem>
      <FastLine :config="theme.series.pie.labelLine.lineStyle" />
    </ACollapsePanel>
  </ACollapse>
</template>

<script setup lang="ts">
import useGlobal from '@/store/useGlobal';
import { ref } from 'vue';
import ColorPicker from '../../ColorPicker/index.vue'
import FastBorder from '../components/FastBorder.vue'
// import Radius from '../components/Radius.vue'
import FastLabel from '../components/FastLabel.vue';
import FastLine from '../components/FastLine.vue';
import useArrayModel from '@/hooks/useArrayModel';
import { toRef } from 'vue';
import { Ref } from 'vue';
import useStringToNumber, { createUnitRule } from '@/hooks/useStringToNumber';
import { computed } from 'vue';


const activeKeys = ref(['item', 'label', 'label-line'])
const { theme } = useGlobal()
const { array: radiusList } = useArrayModel(toRef(theme.series.pie, 'radius') as Ref<string[]>)
const { number: radius1 } = useStringToNumber(computed({
  get() { return radiusList.value[0] },
  set(newVal) { radiusList.value[0] = newVal }
}), { rule: createUnitRule('%')})
const { number: radius2 } = useStringToNumber(computed({
  get() { return radiusList.value[1] },
  set(newVal) { radiusList.value[1] = newVal }
}), { rule: createUnitRule('%')})

</script>