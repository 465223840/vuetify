<script setup>
import { VueFlow, isNode, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import { ref, onMounted } from 'vue'
import { CustomNode, ParentNode, ChildNode, ToolbarNode } from './Nodes'
import './VueFlow.scss'

import DropzoneBackground from './Sidebar/DropzoneBackground.vue'
import Sidebar from './Sidebar/Sidebar.vue'
import useDragAndDrop from './Sidebar/useDnD'
import Panel from './Panel.vue'


const { onDragOver, onDrop, onDragLeave, isDragOver } = useDragAndDrop()
const nodeInfo = ref({})

const props = defineProps({
  data: {
    type: Object,
    default: () => { }
  }
})
const emits = defineEmits(['onNodeClick'])

onMounted(() => {
  const el = document.getElementsByClassName('basicflow')[0]
  el.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });
})

const { onPaneReady, onNodeClick, onNodeContextMenu, onEdgeClick, onConnect, } = useVueFlow()

const elements = ref(props.data)
const hidden = ref(false)
const dark = ref(false)


onPaneReady(({ fitView }) => fitView())


onNodeClick(({ node }) => {
  console.log(node)
  nodeInfo.value = node.data
  hidden.value = true
})

onNodeContextMenu(({ node }) => {
  console.log(node)
})

onEdgeClick(({ edge }) => {
  console.log(edge)
  edge.label = edge.id
})


/**
 * onConnect is called when a new connection is created.
 * You can add additional properties to your new edge (like a type or label) or block the creation altogether
 */
onConnect((params) => {
  console.log(params)
  addEdges(params)
})

</script>

<template>
  <div class="dnd-flow" @drop="onDrop">
    <VueFlow v-model="elements" :class="{ dark }" class="basicflow" :min-zoom="0.3" :max-zoom="4" @dragover="onDragOver"
      @dragleave="onDragLeave">
      <Background :pattern-color="dark ? '#FFFFFB' : '#aaa'" gap="8" />
      <MiniMap />
      <Controls />
      <DropzoneBackground :style="{
        backgroundColor: isDragOver ? '#e7f3ff' : 'transparent',
        transition: 'background-color 0.2s ease',
      }">
        <p v-if="isDragOver">拖拽至此</p>
      </DropzoneBackground>
      <Panel v-model:dark="dark" :hidden="hidden" :nodeInfo="nodeInfo" />
      <template #node-custom="data">
        <CustomNode :data="data" />
      </template>
      <template #node-parent="data">
        <ParentNode :data="data" />
      </template>
      <template #node-child="data">
        <ChildNode :data="data" />
      </template>
      <template #node-menu="data">
        <ToolbarNode :id="data.id" :data="data" />
      </template>
    </VueFlow>
    <Sidebar />
  </div>
</template>
<style scoped>
.dnd-flow {
  flex-direction: column;
  display: flex;
  height: 100%
}

:deep(.vue-flow__node) {
  cursor: pointer;
  font-size: 12px;
  border: 1px solid #426D66;
  background-color: #fff;
  /* padding: 6px; */
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

}
</style>
