<template>
  <div class="flex gap-2">
    <div v-for="tag in data" class="text-sm bg-[#D2DAEE]  px-3 py-1 rounded-sm">
      <span class="mr-4"> {{ tag.text }}</span>
      <a href="#">
        <v-icon icon="mdi-arrow-top-right-bottom-left" class="text-sm " />
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps(['data'])
</script>

<style lang="scss" scoped></style>
