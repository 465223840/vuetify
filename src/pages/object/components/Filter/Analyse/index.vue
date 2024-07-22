<template>
  <div class="flex justify-between">
    <UserCount :count="200" />
    <Operation class="float-right" />
  </div>
  <HideTags :data="hide_tags" />
</template>

<script setup>
import UserCount from './UserCount'
import HideTags from './HideTags.vue'
import Operation from './Operation.vue';

const props = defineProps({
  hide_tags: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<style lang="scss" scoped></style>
