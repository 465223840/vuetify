<script setup>
import { Handle, Position, useVueFlow } from '@vue-flow/core'
import { NodeToolbar } from '@vue-flow/node-toolbar'

const props = defineProps(['id', 'data'])

const actions = ['👎', '✋', '👍']

const { updateNodeData } = useVueFlow()
</script>

<template>
  <div class="vue-flow__node-toolbar">
    <NodeToolbar :is-visible="data.toolbarVisible" :position="data.toolbarPosition">
      <button v-for="action of actions" :key="action" type="button" :class="{ selected: action === data.action }"
        @click="updateNodeData(props.id, { action })">
        {{ action }}
      </button>
    </NodeToolbar>

    <div>
      {{ data.data.label }}
    </div>

    <Handle type="target" :position="Position.Left" />
    <Handle type="source" :position="Position.Right" />
  </div>
</template>
<style scoped>
.vue-flow__node-toolbar {
  display: flex;


}

.vue-flow__node-toolbar button {
  background: #4a5568;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
}

.vue-flow__node-toolbar button.selected {
  background: #2563eb;
}

.vue-flow__node-toolbar button:hover {
  background: #2563eb;
}

.vue-flow__node-menu {
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.vue-flow__node-menu.selected {
  box-shadow: 0 0 0 2px #2563eb;
}
</style>
