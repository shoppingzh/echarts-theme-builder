<template>
  <div class="flex items-center">
    <!-- FIXME key的性能不好 -->
    <div
      v-for="(_, index) in colors"
      :key="`${index}/${colors.length}`"
      :class="{ 'ml-2': index > 0 }">
      <div class="button mb-1" @click="remove(index)">-</div>
      <ColorPicker v-model="colors[index]" />
      <div class="button" @click="add(index)">+</div>
    </div>
    <AButton v-if="!colors.length" type="link" class="!px-0" @click="add()">新增</AButton>
  </div>
</template>

<script setup lang="ts">
import ColorPicker from '../../ColorPicker/index.vue'
import useArrayModel from '@/hooks/useArrayModel'

const model = defineModel<any[]>()

const { array: colors } = useArrayModel(model)

function add(index?: number) {
  const realIndex = index == null ? colors.value.length - 1 : index

  colors.value.splice(realIndex + 1, 0, '#000')
}

function remove(index: number) {
  colors.value.splice(index, 1)
}
</script>

<style lang="postcss" scoped>
.button {
  @apply text-center leading-5 bg-gray-200 cursor-pointer transition-all duration-300;
  @apply hover:bg-gray-600 hover:text-white;
}
</style>
