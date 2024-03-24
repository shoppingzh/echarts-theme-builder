<template>
  <div class="position-select w-[80px] h-[60px]">
    <div class="flex w-full h-1/4 items-center">
      <div
        v-for="(item, index) in ['lt', 't', 'rt'] as Position[]"
        :key="item"
        class="position-select__item flex-1 w-0 h-full"
        :class="{ 'ml-1': index > 0, 'is-active': model === item }"
        @click="select(item)"></div>
    </div>

    <div class="mt-1 flex w-full h-1/2">
      <div class="flex-1 w-0">
        <div class="position-select__item w-1/2 h-full" :class="{ 'is-active': model === 'l' }" @click="select('l')" />
      </div>
      <div class="w-1/3 flex items-center justify-center">
        <div class="position-select__item w-2/3 h-2/3" :class="{ 'is-active': model === 'c' }" @click="select('c')"></div>
      </div>
      <div class="w-1/3 flex justify-end">
        <div class="position-select__item w-1/2 h-full " :class="{ 'is-active': model === 'r' }" @click="select('r')" />
      </div>
    </div>

    <div class="mt-1 flex w-full h-1/4 items-center">
      <div
        v-for="(item, index) in ['lb', 'b', 'rb'] as Position[]"
        :key="item"
        class="position-select__item flex-1 w-0 h-full "
        :class="{ 'ml-1': index > 0, 'is-active': model === item }"
        @click="select(item)"></div>
    </div>

  </div>
</template>

<script setup lang="ts">
export type Position = 'lt' | 't' | 'rt' | 'l' | 'c' | 'r' | 'lb' | 'b' | 'rb'
const model = defineModel<Position>()

function select(position: Position) {
  model.value = position
}
</script>

<style scoped lang="postcss">
.position-select {
  &__item {
    @apply bg-slate-200 cursor-pointer transition-all duration-150;
    &:hover, &.is-active {
      @apply bg-blue-500;
    }
  }
}
</style>
