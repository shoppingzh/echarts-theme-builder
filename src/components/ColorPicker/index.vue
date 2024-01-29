<template>
  <div ref="el" />
</template>

<script setup lang="ts">
import Picker from '@simonwep/pickr'
import '@simonwep/pickr/dist/themes/nano.min.css'
import '@simonwep/pickr/dist/themes/classic.min.css'
import '@simonwep/pickr/dist/themes/monolith.min.css'
import { onUnmounted } from 'vue';
import { shallowRef } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import { computed } from 'vue';
import { remove } from '@shoppingzh/tools/lib/array'

const model = defineModel<string>()

const el = ref<HTMLElement>()
const picker = shallowRef<Picker>()
let destroy: (() => void) = null
const historyList = useLocalStorage('color-picker-history', [])
const historyListMap = computed(() => {
  return historyList.value.reduce((map, o, index) => {
    map[o] = index
    return map
  }, {} as Record<string, number>)
})
const maxHistoryCount = 14

function init() {
  picker.value = Picker.create({
    el: el.value,
    theme: 'nano',
    // inline: true,
    sliders: 'h',
    default: '#000',
    swatches: historyList.value,

    i18n: {
      "btn:save": '保存',
      "aria:btn:save": '保存',
      "btn:cancel": '取消',
      "aria:btn:cancel": '取消',
      "btn:clear": '清空',
      "aria:btn:clear": '清空',
    },
    components: {
      hue: true,
      preview: true,
      opacity: true,
      palette: true,
      interaction: {
        save: true,
        // cancel: true,
        clear: true,
        // cmyk: true,?
        // hex: true,
        // hsla: true,
        // hsva: true,
        input: true,
        // rgba: true,
      },
    },
  })
  const onInit = () => {
    if (model.value) {
      picker.value.setColor(model.value)
    }
  }
  
  const onSave = (color: any, picker: Picker) => {
    // console.log(color);
    if (color == null) { // 清空
      model.value = null
    } else {
      const val = color.toRGBA().toString(2)
      model.value = val

      recordHistory(val)
    }
    picker.hide()
  }
  const onCancel = () => {
    picker.value.hide()
  }
  
  picker.value.on('init', onInit)
  picker.value.on('save', onSave)
  picker.value.on('cancel', onCancel)

  return () => {
    picker.value.off('init', onInit)
    picker.value.off('save', onSave)
    picker.value.off('cancel', oncancel)

    picker.value.destroyAndRemove()
    picker.value = null
  }
}

function recordHistory(color: string) {
  const idx = historyListMap.value[color]
  if (idx === 0) return

  // 先全部删掉，再重新加一次
  historyList.value.forEach((_, index) => {
    picker.value.removeSwatch(historyList.value.length - 1 - index)
  })

  if (idx) {
    remove(historyList.value, idx)
  }
  historyList.value.unshift(color)

  // 最多保存20个
  if (historyList.value.length > maxHistoryCount) {
    for (let i = maxHistoryCount; i < historyList.value.length; i++) {
      remove(historyList.value, i)
    }
  }


  historyList.value.forEach(color => {
    picker.value.addSwatch(color)
  })
}

onMounted(() => {
  destroy = init()
})

onUnmounted(() => {
  destroy && destroy()
})



</script>
