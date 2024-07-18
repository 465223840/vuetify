<template>
  <div>
    <!-- <button @click="toggleAll">{{ allExpanded ? 'Collapse All' : 'Expand All' }}</button> -->
    <draggable v-model="localItems" :group="{ name: 'tree', pull: true, put: true }" item-key="id" @start="onDragStart"
      @end="onDragEnd" @move="onMove" ghost-class="ghost" animation="200">
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
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
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
const allExpanded = ref(true);

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
  emit('update:items', localItems.value);
};

const onMove = (evt) => {
  const { relatedContext, draggedContext } = evt;

  if (!draggedContext || !relatedContext) {
    return;
  }

  const { element: draggedElement, index: draggedIndex } = draggedContext;
  const { index: relatedIndex, element: relatedElement, list: relatedList } = relatedContext;

  if (!draggedElement || !relatedList) {
    return;
  }

  const { parentList: draggedParentList, parentIndex: draggedParentIndex } = findNestedItem(
    localItems.value,
    draggedElement.id
  );

  if (!draggedParentList) {
    return;
  }

  draggedParentList.splice(draggedParentIndex, 1);
  relatedList.splice(relatedIndex, 0, draggedElement);
};

const findNestedItem = (list, id) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      return { parentList: list, parentIndex: i };
    } else if (list[i].children) {
      const result = findNestedItem(list[i].children, id);
      if (result) {
        return result;
      }
    }
  }
  return null;
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

const toggleAll = () => {
  allExpanded.value = !allExpanded.value;
  if (allExpanded.value) {
    isOpen.value = localItems.value.map(() => true);
  } else {
    isOpen.value = localItems.value.map(() => false);
  }
};

onMounted(() => {
  isOpen.value = localItems.value.map(() => true);
});
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
