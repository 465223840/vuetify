<template>
  <draggable class="dragArea list-group" :list="operatorTags" :group="{ name: 'tags', pull: 'clone', put: false }"
    @change="log">
    <template #item="{ element, index }">
      <transition name="fade">
        <h-tag :count="element.count" :key="index">
          {{ element.text }}
        </h-tag>
      </transition>
    </template>
  </draggable>
</template>

<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';

const operatorTags = ref([
  { text: '&' },
  { text: '|' },
  { text: '!' },
  { text: '()' },
]);

const log = (evt) => {
  console.log(evt);
};
</script>

<style scoped>
.dragArea {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
