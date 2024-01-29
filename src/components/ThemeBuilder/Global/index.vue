<template>
  <ACollapse v-model:activeKey="activeKeys">
    <ACollapsePanel header="背景" key="1">
      <AFormItem label="背景色">
        <ColorPicker v-model="(theme.backgroundColor as string)" />
      </AFormItem>
    </ACollapsePanel>
    <ACollapsePanel header="全局文本" key="2">
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
import TextStyle from '../components/TextStyle.vue'
import { ref } from 'vue';

const { theme } = useGlobal()
const activeKeys = ref(['1', '2'])
</script>
