import { Ref, ref, watch } from 'vue'

export default function<T>(model: Ref<T[]>) {

  const array = ref<any[]>([])

  function init() {
    array.value = model.value && model.value.length ? [...model.value] : []
  }

  init()

  watch(array, () => {
    model.value = array.value.length && array.value.some(o => o != null) ? [...array.value] : undefined
  }, {
    deep: true,
  })

  return {
    array,
  }
}
