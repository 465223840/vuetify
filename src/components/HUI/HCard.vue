<template>
  <div class="simple-card">
    <div class="label" :style="{ color: type }">
      {{ label }}
    </div>
    <div class="value">
      {{ value }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: '123'
  },
  type: {
    type: String,
    default: 'default'
  },
  value: {
    type: String,
    default: '321'
  }
})

const type = computed(() => {
  switch (props.type) {
    case 'primary':
      return '#000'
    case 'success':
      return '#259452'
    case 'warning':
      return '#000'
    case 'danger':
      return '#000'
    default:
      return '#000'
  }
})
</script>

<style lang="scss" scoped>
.simple-card {
  padding: 8px;
  min-height: 100px;
  min-height: 100px;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border: 1px solid #D4D5D6;
  border-radius: 3px;

  .label {
    font-size: 42px;
  }

  .value {
    font-size: 14px;
    font-weight: 500;
    color: #617180;
  }
}
</style>
