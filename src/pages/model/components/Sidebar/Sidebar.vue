<script setup>
import useDragAndDrop from './useDnD'
const { onDragStart } = useDragAndDrop()

</script>

<template>
  <aside class="aside">
    <div class="description">You can drag these nodes to the pane.</div>
    <div class="nodes">
      <div class="vue-flow__node-input" :draggable="true" @dragstart="onDragStart($event, 'input')">Input Node</div>
      <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'default')">Default Node
      </div>
      <div class="vue-flow__node-output" :draggable="true" @dragstart="onDragStart($event, 'output')">Output Node</div>
    </div>
  </aside>
</template>
<style scoped>
.aside {
  color: #fff;
  font-weight: 700;
  border-right: 1px solid #eee;
  padding: 15px 10px;
  font-size: 12px;
  background: #10b981bf;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, .3);
  box-shadow: 0 5px 10px #0000004d
}

.aside .nodes>* {
  margin-bottom: 10px;
  cursor: grab;
  font-weight: 500;
  -webkit-box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, .25);
  box-shadow: 5px 5px 10px 2px #00000040
}

.aside .description {
  margin-bottom: 10px
}
</style>
