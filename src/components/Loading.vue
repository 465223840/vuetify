<template>
  <div class="h-full d-flex justify-center align-center position-relative">
    <slot />
    <v-fade-transition>
      <div class="position-absolute bg-black opacity-[0.45] w-full h-full flex justify-center align-center zIndex-1"
        v-if="loading">
        <v-progress-circular :color="color" indeterminate />
      </div>
    </v-fade-transition>
  </div>
</template>

<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'primary'
  }
})
</script>

<style lang="scss" scoped></style>
