<template>
  <div class="flex flex-wrap">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="w-1/2 h-[400px]">
      <component :is="item" class="h-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import items from './items'


</script>
