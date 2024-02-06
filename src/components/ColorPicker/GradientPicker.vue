<template>
  <template v-if="model">
    <AForm>
      <AFormItem v-if="isLinearGradient(model)" label="方向">
        <ARadioGroup v-model:value="linearDir">
          <ARadio v-for="item in linearDirs" :key="item.value" :value="item.value">{{ item.label }}</ARadio>
        </ARadioGroup>
      </AFormItem>
      <AFormItem v-else-if="isRadialGradient(model)" label="半径">
        <AInputNumber v-model:value="model.r" :min="0" :max="1" :step="0.1" />
      </AFormItem>
    </AForm>
  
  
    <div class="mt-3">
      <ATable :data-source="model.colorStops" :columns="columns" :pagination="false">
        <template #emptyText>
          <AEmpty>
            <template #description>
              <div>没有任何断点，请 <AButton type="link" @click="addStep()">添加断点</AButton></div>
            </template>
          </AEmpty>
        </template>
        <template #bodyCell="{ column, record, index }">
          <template v-if="column.key === 'offset'">
            <AInputNumber v-model:value="record.offset" :step="0.1" :min="0" :max="1" class="w-full"></AInputNumber>
          </template>
          <template v-else-if="column.key === 'color'">
            <NativePicker v-model="record.color" />
          </template>
          <template v-else-if="column.key === 'action'">
            <AButton type="primary" size="small" @click="addStep(record, index)">添加</AButton>
            <AButton type="primary" danger size="small" class="ml-2" @click="removeStep(record, index)">删除</AButton>
          </template>
        </template>
      </ATable>
    </div>
  </template>
</template>

<script setup lang="ts">
import useSelect from 'magic-hooks/lib/useSelect';
import NativePicker from './NativePicker.vue';
import { computed } from 'vue';
import { ColumnType } from 'ant-design-vue/es/table';
import { isHorizontal, isVertical, isLinearGradient, isRadialGradient, } from './util'
import { LinearGradientObject, RadialGradientObject } from 'echarts';

const model = defineModel<LinearGradientObject | RadialGradientObject>()
const props = defineProps<{
  type: 'linear' | 'radial'
}>()

const linearDir = computed({
  get() {
    const o = (model.value || {}) as LinearGradientObject
    return isHorizontal(o) ? 'horizontal' : (isVertical(o) ? 'vertical' : null)
  },
  set(newVal) {
    const o = model.value as LinearGradientObject
    if (!o) return
    if (newVal === 'horizontal') {
      o.x = 0
      o.x2 = 1
      o.y = 0
      o.y2 = 0
    } else {
      o.x = 0
      o.x2 = 0
      o.y = 0
      o.y2 = 1
    }
  }
})
const { items: linearDirs } = useSelect({
  items: [{
    value: 'horizontal',
    label: '横向'
  }, {
    value: 'vertical',
    label: '纵向',
  }],
  initialValue: linearDir,
})

const columns = computed(() => {
  return [{
    title: '位置',
    key: 'offset',
  }, {
    title: '颜色',
    key: 'color',
  }, {
    title: '操作',
    key: 'action',
  }] as ColumnType[]
})

function addStep(row?: any, index?: number) {
  const nextIndex = index == null ? model.value.colorStops.length - 1 : index
  model.value.colorStops.splice(nextIndex + 1, 0 ,{
    color: row ? row.color : 'rgba(0, 0, 0, 0)',
    offset: row ? row.offset : 0,
  })
}

function removeStep(row: any, index: number) {
  model.value.colorStops.splice(index, 1)
}

function init() {
  const current: any = model.value || {}
  let newModel: LinearGradientObject | RadialGradientObject

  if (props.type === 'linear') {
    newModel = {
      type: 'linear',
      colorStops: current.colorStops || [],
      x: current.x,
      y: current.y,
      x2: current.x2,
      y2: current.y2,
    } as LinearGradientObject
  } else if (props.type === 'radial') {
    newModel = {
      type: 'radial',
      colorStops: current.colorStops || [],
      x: current.x,
      y: current.y,
      r: current.r,
    } as RadialGradientObject

    if (newModel.x == null) {
      newModel.x = 0.5
    }
    if (newModel.y == null) {
      newModel.y = 0.5
    }
  }

  model.value = newModel
}

init()
</script>
