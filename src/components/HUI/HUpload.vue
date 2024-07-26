<template>
  <div class="file-upload">
    <button
      :class="['button', type, size]"
      :disabled="disabled"
      @click="handleClick"
    >
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
    <input
      type="file"
      ref="fileInput"
      @change="handleFileChange"
      class="file-input"
      :disabled="disabled"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: value => ['primary', 'default', 'link', 'error'].includes(value),
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

const emit = defineEmits(['click', 'file-selected']);
const fileInput = ref(null);

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event);
    fileInput.value.click(); // 触发文件选择对话框
  }
};

const handleFileChange = (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    emit('file-selected', files[0]); // 发送选中的文件
  }
};
</script>

<style lang="scss">
.file-upload {
  position: relative;
  display: inline-flex;

  .button {
    position: relative;
    z-index: 1;
  }

  .file-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0; // 隐藏 input 元素
    cursor: pointer; // 确保点击区域可用
  }
}
</style>
