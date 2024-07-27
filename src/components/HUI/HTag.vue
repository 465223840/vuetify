<template>
  <div :class="['tag', `tag--${color}`]" :style="tagStyles" ref="tagRef">
    <div class="h-full flex justify-center items-center text-xs">
      <slot />
      <span v-if="count" class="ml-2">{{ count }}</span>
      <span v-if="clearable" class="remove-icon" @click="onRemove">&#10005;</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted, nextTick, watch } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'default',
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

const emit = defineEmits(['remove']);

const onRemove = () => {
  emit('remove');
};

const tagRef = ref(null);
const tagStyles = ref({});

const updateStyles = () => {
  const el = tagRef.value;
  if (el) {
    const { offsetWidth: width, offsetHeight: height } = el;
    tagStyles.value = {
      width: width < height ? `${height}px` : 'auto',
    };
  }
};

onMounted(() => {
  nextTick(() => {
    updateStyles();
    window.addEventListener('resize', updateStyles);
  });
});

watch(() => [props.color, props.border, props.count, props.clearable], () => {
  nextTick(() => {
    updateStyles();
  });
});
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.tag {
  max-height: 28px;
  padding: 2px 8px;
  border-radius: 4px;
  cursor: move;
  user-select: none;
}

.tag--primary {
  background-color: $primary;
  color: #fff;
  font-weight: bold;
}

.tag--success {
  background-color: #459458;
  color: #fff;
  font-weight: bold;
}

.tag--error {
  background-color: $danger;
  color: #fff;
  font-weight: bold;
}

.tag--info {
  background-color: #B3C6E8;
  color: #464C57;

}

.tag--default {
  background-color: #fff;
  color: #6f84e1;
  border: 1px solid #a5b1e7;
}

.remove-icon {
  margin-left: 8px;
  cursor: pointer;
  font-size: 12px;
}
</style>
