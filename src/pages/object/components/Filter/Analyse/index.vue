<template>
  <div class="flex justify-between">
    <UserCount :count="200" />
    <Operation class="float-right" />
  </div>
  <AnalyseResult :list="list" />
</template>

<script setup>
import UserCount from './UserCount'
import Operation from './Operation.vue';

import AnalyseResult from './AnalyseResult'


const props = defineProps(['list'])
</script>

<style lang="scss" scoped></style>
