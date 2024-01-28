<template>
  <div ref="el" />
</template>

<script setup lang="ts">
import Picker from '@simonwep/pickr'
import '@simonwep/pickr/dist/themes/nano.min.css'
import '@simonwep/pickr/dist/themes/classic.min.css'
import { onUnmounted } from 'vue';
import { shallowRef } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue';

const model = defineModel<string>()

const el = ref<HTMLElement>()
const picker = shallowRef<Picker>()
let destroy: (() => void) = null

function init() {
  picker.value = Picker.create({
    el: el.value,
    theme: 'classic',
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
        cancel: true,
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
    if (color == null) {
      model.value = null
    } else {
      model.value = color.toRGBA().toString()
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


onMounted(() => {
  destroy = init()
})

onUnmounted(() => {
  destroy && destroy()
})


</script>
