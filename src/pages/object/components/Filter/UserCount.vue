<template>
  <div class="p-1 text-xs">
    用户数
    <span class="text-[#2552BD] text-sm font-bold">
      {{ count }}
    </span>
    人
  </div>
</template>

<script setup>
defineProps(['count'])
</script>

<style lang="scss" scoped></style>
