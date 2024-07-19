<template>
  <div class="input-container">
    <span v-if="prefixIcon" class="icon">
      <v-icon :icon="prefixIcon" />
    </span>
    <input :type="type" :placeholder="placeholder" v-model="modelValue"
      @input="$emit('update:modelValue', modelValue)" />
    <span v-if="suffixIcon" class="icon">
      <v-icon :icon="suffixIcon" />
    </span>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  prefixIcon: String,
  suffixIcon: String,
});

const modelValue = ref(props.modelValue);
</script>

<style scoped>
.input-container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f4f4f4;
  font-weight: 500;
}

.input-container .icon {
  margin: 0 6px;
  font-size: 16px;
  color: #888;
}

.input-container input {
  border: none;
  outline: none;
  flex: 1;
  padding: 4px;
  font-size: 15px;
}

.input-container input::placeholder {
  color: #ccc;
}
</style>
