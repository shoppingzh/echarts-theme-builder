<template>
  <Color :color="model" @click="popper.set = true" />
  <AModal
    v-model:open="popper.set"
    title="颜色"
    width="600px"
    :footer="null">
    <template v-if="popper.set">
      <div class="relative">
        <div class="absolute right-[10%] top-[10%]">
          <Color :color="model" class="w-[50px] h-[50px]" />
        </div>
        <ASegmented v-model:value="mode" :options="modes.map(o => ({ value: o.value as string, label: o.label, }))" />

        <div class="mt-4 min-h-[300px]">
          <component
            :is="modelItem.component"
            v-if="modelItem && modelItem.component"
            :key="mode"
            v-model="model"
            auto-show
            :type="mode" />
        </div>
      </div>
    </template>
  </AModal>
</template>

<script setup lang="ts">
import { Color as ColorType } from 'echarts'
import { reactive } from 'vue'
import useSelect from 'magic-hooks/lib/useSelect'
import NativePicker from './NativePicker.vue'
import GradientPicker from './GradientPicker.vue'
import Color from './Color.vue'
import { isGradientColor, isNormalColor } from './util'

const model = defineModel<ColorType>()
const popper = reactive({
  set: false,
})
const { activeValue: mode, activeItem: modelItem, items: modes } = useSelect({
  items: [{
    value: 'normal',
    label: '普通',
    component: NativePicker,
  }, {
    value: 'linear',
    label: '线性渐变',
    component: GradientPicker,
  }, {
    value: 'radial',
    label: '径向渐变',
    component: GradientPicker,
  }],
  autoSelect: true,
})

if (isNormalColor(model.value)) {
  mode.value = 'normal'
} else if (isGradientColor(model.value)) {
  mode.value = model.value.type
}

</script>
