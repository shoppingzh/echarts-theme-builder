<template>
  <AForm>
    <ACollapse v-model:activeKey="activeKeys">
      <ACollapsePanel header="常规" key="1">
        <AFormItem label="对齐方式">
          <Align v-model="theme.title.textAlign" />
        </AFormItem>
        <AFormItem label="间距">
          <Space v-model="theme.title.padding" />
        </AFormItem>
      </ACollapsePanel>
      <ACollapsePanel header="文本" key="2">
        <TextStyle
          v-model:color="theme.title.textStyle.color"
          v-model:fontSize="theme.title.textStyle.fontSize"
          v-model:fontWeight="theme.title.textStyle.fontWeight"
          v-model:borderColor="theme.title.textStyle.textBorderColor"
          v-model:borderWidth="theme.title.textStyle.textBorderWidth"
          v-model:borderType="theme.title.textStyle.textBorderType" />
      </ACollapsePanel>
      <ACollapsePanel header="二级标题文本" key="3">
        <TextStyle
          v-model:color="theme.title.subtextStyle.color"
          v-model:fontSize="theme.title.subtextStyle.fontSize"
          v-model:fontWeight="theme.title.subtextStyle.fontWeight"
          v-model:borderColor="theme.title.subtextStyle.textBorderColor"
          v-model:borderWidth="theme.title.subtextStyle.textBorderWidth"
          v-model:borderType="theme.title.subtextStyle.textBorderType" />
      </ACollapsePanel>
    </ACollapse>
  </AForm>
</template>

<script setup lang="ts">
import useGlobal from '@/store/global'
import TextStyle from '../components/TextStyle.vue'
import Align from '../components/Align.vue';
import { ref } from 'vue';
import Space from '../components/Space.vue';

const { theme } = useGlobal()

const activeKeys = ref(['1', '2', '3'])
</script>
