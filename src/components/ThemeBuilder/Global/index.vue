<template>
  <ACollapse v-model:activeKey="activeKeys">
    <ACollapsePanel header="基础" key="base">
      <AFormItem label="颜色">
        <ColorsSelect v-model="theme.color" />
      </AFormItem>
      <AFormItem label="背景色">
        <ColorPicker v-model="(theme.backgroundColor as string)" />
      </AFormItem>
    </ACollapsePanel>
    <ACollapsePanel header="全局文本" key="text">
      <TextStyle
        v-model:color="theme.textStyle.color"
        v-model:fontSize="theme.textStyle.fontSize"
        v-model:fontWeight="theme.textStyle.fontWeight"
        v-model:borderColor="theme.textStyle.textBorderColor"
        v-model:borderWidth="theme.textStyle.textBorderWidth"
        v-model:borderType="theme.textStyle.textBorderType" />
    </ACollapsePanel>
  </ACollapse>
</template>

<script setup lang="ts">
import ColorPicker from '../../ColorPicker/index.vue'
import useGlobal from '@/store/global'
import TextStyle from '../components/FastTextStyle.vue'
import ColorsSelect from '../components/ColorsSelect.vue'
import { ref } from 'vue';

const { theme } = useGlobal()
const activeKeys = ref(['base', 'bg', 'text'])
</script>
