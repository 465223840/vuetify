<template>
  <div class="file-upload">
    <h-button :type="type" :icon="icon" :size="size" :disabled="disabled" class="w-full" @click="handleClick">
      <span class="button-text">
        <template v-if="$slots.default">
          <slot></slot>
        </template>
        <span v-else>文件导入</span>
      </span>
    </h-button>
    <input type="file" ref="fileInput" @change="handleFileChange" class="file-input" :disabled="disabled" />
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

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

const emit = defineEmits(['change', 'error']);
const fileInput = ref(null);
const MAX_FILE_SIZE = 500 * 1024; // 500KB

const handleClick = (event) => {
  if (!props.disabled) {
    fileInput.value.click(); // 触发文件选择对话框
  }
};

const handleFileChange = (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    const file = files[0];
    const validTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

    if (file.size > MAX_FILE_SIZE) {
      emit('error', '文件大小超过500KB限制'); // 发送错误消息
    } else if (!validTypes.includes(file.type)) {
      emit('error', '无效的文件类型,只允许使用xls和xlsx文件'); // 发送错误消息
    } else {
      emit('change', files); // 发送选中的文件
    }
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
