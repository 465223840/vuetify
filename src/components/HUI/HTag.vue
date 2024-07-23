<template>
  <div :class="['tag', border && 'border']" v-if="visible" :style="{ color: color, background: '#fff' }">
    <div class="h-full flex items-center text-xs">
      <span v-if="modelValue">{{ tag }}</span>
      <slot v-else />
      <span v-if="count" class="ml-2">{{ count }}</span>
      <span v-if="clearable" class="remove-icon" @click="removeTag">&#10005;</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '#000',
  },
  count: {
    type: Number,
    default: 0,
  },
  border: {
    type: Boolean,
    default: true,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
});

const visible = ref(true);
const tag = ref(props.text);

const removeTag = () => {
  visible.value = false;
  emitUpdate('');
};

const emitUpdate = (value) => {
  tag.value = value;
  props.text = value;
};

watch(() => props.text, (newVal) => {
  tag.value = newVal;
  visible.value = !!newVal;
});
</script>

<style lang="scss" scoped>
.tag {
  max-height: 28px;
  color: #333333;

  padding: 4px 10px;
  border-radius: 4px;
  cursor: move;
  user-select: none;
}

.remove-icon {
  margin-left: 8px;
  cursor: pointer;
  font-size: 12px;
}
</style>
