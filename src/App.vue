
<template>
  <AConfigProvider :locale="zhCN" :theme="{ algorithm }">
    <div class="h-full flex flex-col">
      <div class="flex items-center h-[50px] px-4 bg-white dark:bg-black shadow-sm">
        <div class="relative flex-1 w-0 text-lg font-semibold">
          <div class="absolute select-none -left-2 bottom-0 w-5 h-5 bg-pink-500/40 dark:bg-pink-600/60 rounded-full pointer-events-none" />
          Echarts主题设计器
        </div>
        <AButton type="primary" @click="design()">
          <SvgIcon name="sheji" class="mr-1 text-base" />
          设计(Ctrl+B)
        </AButton>
        <AButton type="dashed" dange class="ml-4" @click="redesign()">
          <SvgIcon name="xunhuan" class="mr-1 text-base" />
          重新设计
        </AButton>
        <AButton type="dashed" class="ml-4" @click="download()">
          <SvgIcon name="xiazai" class="mr-1 text-base" />
          下载主题
        </AButton>
        <AButton type="dashed" class="ml-4" @click="upload">
          <SvgIcon name="shangchuan" class="mr-1 text-base" />
          上传主题
        </AButton>
        <div class="px-2">
          <ADivider type="vertical" />
        </div>
        <div>
          <ASwitch v-model:checked="darkMode">
            <template #checkedChildren>
              <SvgIcon name="heiye" class="text-xl" />
            </template>
            <template #unCheckedChildren>
              <SvgIcon name="baitian" class="text-xl" />
            </template>
          </ASwitch>
        </div>
        <a :href="repo" target="_blank" class="ml-2 cursor-pointer appearance-none text-gray-950 dark:text-gray-50">
          <SvgIcon name="github" class="text-3xl" />
        </a>
      </div>
      <div class="flex-1 h-0 p-4 overflow-auto dark:bg-gray-900">
        <Charts />
      </div>
    </div>

    <ADrawer
      v-model:open="popper.design"
      title="主题设计器(Ctrl+B)"
      size="large"
      width="800px"
      :body-style="{ padding: '12px' }"
      :mask-style="{ backgroundColor: 'rgba(200, 200, 200, .1)' }">
      <ThemeBuilder />
    </ADrawer>

    <AModal
      v-model:open="popper.upload"
      title="上传主题"
      :footer="null">
      <div class="py-8">
        <AUpload action="#" :multiple="false" :show-upload-list="false" :before-upload="() => false" @change="handleUploadChange">
          <div class="p-8 py-12 text-center text-gray-400 border border-gray-200 border-dashed rounded-lg cursor-pointer hover:border-blue-500">
            <SvgIcon name="wenjian" class="text-[50px]" />
            <div class="mt-4">点击选择或拖动文件至此上传</div>
          </div>
        </AUpload>
      </div>
    </AModal>

    <AFloatButtonGroup>
      <AFloatButton @click="design()">
        <template #icon>
          <SvgIcon name="sheji" />
        </template>
      </AFloatButton>
    </AFloatButtonGroup>
  </AConfigProvider>
</template>

<script setup lang="ts">
import Charts from '@/components/Charts/index.vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import ThemeBuilder from '@/components/ThemeBuilder/index.vue'
import { reactive } from 'vue'
import hotkeys from 'hotkeys-js'
import useGlobal from '@/store/useGlobal'
import usePref from '@/store/usePref'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { UploadChangeParam } from 'ant-design-vue/es/upload/interface'
import { Modal, theme } from 'ant-design-vue'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const popper = reactive({
  design: false,
  upload: false,
})
const { darkMode } = storeToRefs(usePref())
const { replace, download } = useGlobal()
const repo = 'https://github.com/shoppingzh/echarts-theme-builder'
const algorithm = computed(() => darkMode.value ? theme.darkAlgorithm : theme.defaultAlgorithm)

function design() {
  popper.design = true
}

async function redesign() {
  Modal.confirm({
    title: '提示',
    content: '清空当前设计，重新开始，确定继续？（建议先保存当前设计）',
    onOk: () => {
      replace({})
    }
  })
}

function upload() {
  popper.upload = true
}

function readFile(file: File) {
  return new Promise<string>((resolve, reject) => {
    const fr = new FileReader()
    fr.onload = e => resolve(e.target.result as string)
    fr.onerror = reject
    fr.readAsText(file, 'utf-8')
  })
}

async function handleUploadChange({ file }: UploadChangeParam) {
  const json = await readFile(file as any)
  replace(JSON.parse(json))

  popper.upload = false
}

function toRepository() {
  window.open(repo)
}

hotkeys('ctrl+b', (e) => {
  popper.design = !popper.design
  e.preventDefault()
})
</script>

<style scoped lang="postcss">
:deep(.ant-upload-select) {
  @apply block;
}
</style>
