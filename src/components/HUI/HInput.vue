<template>
  <div class="input-container">
    <span v-if="prefixIcon" class="icon">
      <v-icon :icon="prefixIcon" />
    </span>
    <input :type="type" :placeholder="placeholder" :value="modelValue" @input="updateValue" @focus="$emit('focus')"
      @blur="$emit('blur')" />
    <span class="icon">
      <slot name="searchBtn" />
    </span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '请输入关键词...',
  },
  prefixIcon: String,
});

const emit = defineEmits(['update:modelValue', 'blur', 'focus'])


const updateValue = (e) => {
  console.log(e.target.value)
  emit('update:modelValue', e.target.value)
}
</script>

<style scoped>
.input-container {
  /* padding: 2px; */
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-weight: 500;
}

.input-container .icon {
  margin: 0 6px;
  font-size: 16px;
  color: #555555;
  font-weight: bold;
}

.input-container input {
  padding: 6px 0;
  line-height: 12px;
  border: none;
  outline: none;
  flex: 1;
  /* padding: 0px; */
  font-size: 15px;
}

.input-container input::placeholder {
  color: #ccc;
}
</style>
