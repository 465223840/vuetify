<template>
  <button :class="['button', type, size]" :disabled="disabled" @click="handleClick">
    <template v-if="$slots.icon">
      <slot name="icon"></slot>
    </template>
    <template v-else-if="icon">
      <v-icon :class="['button-icon', icon]" :icon="icon" />
    </template>
    <span class="button-text">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>

import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: value => ['primary', 'default', 'link', 'error', 'file'].includes(value),
  },
  icon: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'small',
    validator: value => ['small', 'large', 'huge'].includes(value),
  },
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.button {
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  white-space: nowrap; // 防止文字换行
  line-height: 1; // 确保文本垂直居中

  // 默认样式
  &.small {
    padding: 0 8px;
    font-size: 14px;
    height: 26px; // 固定高度
  }

  &.large {
    padding: 0 16px;
    font-size: 16px;
    height: 32px; // 固定高度
  }

  &.huge {
    padding: 0 24px;
    font-size: 22px;
    height: 60px; // 固定高度
  }

  // 样式类型
  &.primary {
    background-color: $primary;
    border-color: #7889CD;
    color: #fff;

    &:hover {
      background-color: darken($primary, 10%);
      border-color: darken(#7889CD, 10%);
    }

    &:active {
      background-color: darken(#406fc9, 20%);
      border-color: darken(#7889CD, 20%);
    }
  }

  &.default {
    background-color: #fff;
    border-color: #406fc9;
    color: #406fc9;

    &:hover {
      background-color: rgba(64, 111, 201, 0.1);
    }

    &:active {
      background-color: rgba(64, 111, 201, 0.2);
    }
  }

  &.link {
    background-color: transparent;
    border-color: transparent;
    color: #406fc9;
    text-decoration: none; // 移除下划线

    &:hover {
      text-decoration: underline;
    }

    &:active {
      text-decoration: none;
    }
  }

  &.error {
    background-color: transparent;
    border-color: transparent;
    color: #406fc9;

    &:hover {
      background-color: rgba(255, 0, 0, 0.1);
    }

    &:active {
      background-color: rgba(255, 0, 0, 0.2);
    }
  }

  &.file {
    background-color: #20743E;
    border-color: transparent;
    color: #ffffff;

    &:hover {
      background-color: rgba(#20743E, 0.8);
    }

    &:active {
      background-color: rgba(#20743E, 0.8);
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: #f5f5f5;
    border-color: #ddd;
  }

  .button-icon {
    margin-right: 8px; // 更宽松的间距
    font-size: 20px;
  }

  .button-text {
    display: inline;
  }
}
</style>
