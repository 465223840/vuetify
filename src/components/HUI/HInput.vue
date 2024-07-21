<template>
  <div class="input-container">
    <span v-if="prefixIcon" class="icon">
      <v-icon :icon="prefixIcon" />
    </span>
    <input :type="type" :placeholder="placeholder" :value="input_val" @input="onInput" @focus="$emit('focus')"
      @blur="$emit('blur')" />
    <span v-if="suffixIcon" class="icon">
      <v-btn :icon="suffixIcon" variant="text" @click="$emit('search')" density="compact" />
    </span>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  value: String,
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

const emit = defineEmits(['update:value', 'blur', 'focus', 'search'])

const input_val = computed(() => props.value);

const onInput = () => {
  console.log(input_val.value)
  emit('update:value', input_val.value)
}
</script>

<style scoped>
.input-container {
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
