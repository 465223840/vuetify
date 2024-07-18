<template>
  <draggable v-model="localItems" :group="{ name: 'tree', pull: true, put: true }" item-key="id" @start="onDragStart"
    @end="onDragEnd" ghost-class="ghost" animation="200">
    <template #item="{ element, index }">
      <ul :style="{ paddingLeft: level === 0 ? '0px' : '30px' }">
        <li :key="element.id" :style="{ width: liWidth(level) }">
          <div @mousedown="onMouseDown" @mouseup="onMouseUp(index)" class="tree-item">
            <LabelItem :item="element" :isOpen="isOpen" :level="level" @remove="removeItem" />
          </div>
          <LabelTree v-if="isOpen[index] && element.children" :items="element.children" :level="level + 1" />
        </li>
      </ul>
    </template>
  </draggable>
</template>

<script setup>
import { ref, watch } from 'vue';
import draggable from 'vuedraggable';
import LabelItem from './LabelItem.vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  level: {
    type: Number,
    default: 0,
  },
});

const liWidth = (lv) => `${'100%' - lv * 4}px`;
const emit = defineEmits(['update:items']);
const localItems = ref([...props.items]);

watch(
  () => props.items,
  (newItems) => {
    localItems.value = [...newItems];
  },
  { deep: true }
);

const isOpen = ref([]);
let isDragging = false;

const onMouseDown = () => {
  isDragging = false;
};

const onMouseUp = (index) => {
  if (!isDragging) {
    toggle(index);
  }
};

const toggle = (index) => {
  isOpen.value[index] = !isOpen.value[index];
};

const onDragStart = () => {
  isDragging = true;
};

const onDragEnd = (evt) => {
  isDragging = false;
  const { newIndex, oldIndex } = evt;

  if (newIndex !== oldIndex) {
    const draggedItem = localItems.value.splice(oldIndex, 1)[0];
    localItems.value.splice(newIndex, 0, draggedItem);
  }

  emit('update:items', localItems.value);
};

const removeItem = (id) => {
  const removeRecursively = (items) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items.splice(i, 1);
        return true;
      } else if (items[i].children) {
        if (removeRecursively(items[i].children)) {
          return true;
        }
      }
    }
    return false;
  };
  removeRecursively(localItems.value);
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

.tree-item {
  margin: 5px 0;
  padding: 4px 8px;
  font-size: 13px;
  font-weight: bold;
  border: 1px solid #ccc;
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.ghost {
  opacity: 0.5;
}
</style>


重做整个拖拽系统。
例如存在同级元素a,b,c
1.同级别拖拽，将a拖至bc之间时，最终顺序应该为b,a,c
2.在拖拽时将a拖拽至b元素上时b元素变成半透明状态即可，不需要挪动位置，此时为过渡状态。
过渡状态时光标在b元素左侧50%区域内时，b元素背景色变为浅蓝色，拖拽完成后a移动至b下方。
过渡状态时光标在b元素右侧50%区域外时，b元素背景色变为浅红色，拖拽完成后a变为b的子项且a不该在原来的位置显示。
