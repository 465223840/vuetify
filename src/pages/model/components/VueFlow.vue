<script setup>
import { Panel, VueFlow, isNode, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import { ref, reactive, onMounted } from 'vue'
import { CustomNode, ParentNode, ChildNode, ToolbarNode } from './Nodes'
import './VueFlow.scss'

import DropzoneBackground from './Sidebar/DropzoneBackground.vue'
import Sidebar from './Sidebar/Sidebar.vue'
import useDragAndDrop from './Sidebar/useDnD'


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

const { onPaneReady, onNodeClick, onNodeContextMenu, onEdgeClick, onConnect, addEdges, addNodes, setTransform, toObject, dimensions } = useVueFlow()

const elements = ref(props.data)
const hidden = ref(false)
const dark = ref(false)

onPaneReady(({ fitView }) => fitView())

function onAdd() {
  const id = Date.now()
  const newNode = {
    id: `random_node-${id}`,
    label: `Node ${id}`,
    position: { x: Math.random() * dimensions.value.width, y: Math.random() * dimensions.value.height },
  }

  addNodes([newNode])
}
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



const logToObject = () => console.log(toObject())
const resetTransform = () => setTransform({ x: 0, y: 0, zoom: 1 })
const toggleClass = () => dark.value = !dark.value


</script>

<template>
  <VueFlow v-model="elements" :class="{ dark }" class="basicflow" :min-zoom="0.3" :max-zoom="4">
    <Background :pattern-color="dark ? '#FFFFFB' : '#aaa'" gap="8" />
    <MiniMap />
    <Controls />
    <DropzoneBackground :style="{
      backgroundColor: isDragOver ? '#e7f3ff' : 'transparent',
      transition: 'background-color 0.2s ease',
    }">
      <p v-if="isDragOver">Drop here</p>
    </DropzoneBackground>
    <Sidebar />

    <Panel position="top-right" width="300">
      <div class="controls">
        <button style="background-color: #113285; color: white" title="Reset Transform" @click="resetTransform">
          <svg width="16" height="16" viewBox="0 0 32 32">
            <path fill="#FFFFFB"
              d="M18 28A12 12 0 1 0 6 16v6.2l-3.6-3.6L1 20l6 6l6-6l-1.4-1.4L8 22.2V16a10 10 0 1 1 10 10Z" />
          </svg>
        </button>
        <button :style="{ backgroundColor: dark ? '#FFFFFB' : '#292524', color: dark ? '#292524' : '#FFFFFB' }"
          @click="toggleClass">
          <template v-if="dark">
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path fill="#292524"
                d="M12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05L4.575 6q-.3-.275-.288-.7q.013-.425.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7q0 .4-.275.7q-.275.3-.687.287q-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712q0-.413.275-.688q.275-.3.688-.287q.412.012.712.287L19.425 18q.3.275.288.7q-.013.425-.288.725q-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688q.012-.412.287-.712L18 4.575q.275-.3.7-.288q.425.013.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275q-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275q.412 0 .687.275q.3.275.288.688q-.013.412-.288.712L6 19.425q-.275.3-.7.287q-.425-.012-.725-.287Z" />
            </svg>
          </template>
          <template v-else>
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path fill="#FFFFFB"
                d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025q.337.025.662.075q-1.025.725-1.637 1.887Q11.1 6.15 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.375 0 2.525-.613q1.15-.612 1.875-1.637q.05.325.075.662Q21 11.65 21 12q0 3.75-2.625 6.375T12 21Z" />
            </svg>
          </template>
        </button>
        <button title="打印" @click="logToObject">
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path fill="#292524"
              d="M20 19V7H4v12h16m0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16m-7 14v-2h5v2h-5m-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59l3.99-4Z" />
          </svg>
        </button>
        <button style="background-color: #6f3381" @click="onAdd">add node</button>
      </div>
      <v-expand-transition>
        <v-card :title="nodeInfo.label" :subtitle="nodeInfo.label" v-show="hidden" width="300"
          :text="nodeInfo.description">
          <v-divider></v-divider>
          123123
        </v-card>
      </v-expand-transition>
    </Panel>
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


</template>
<style scoped>
:deep(.vue-flow__node) {
  /* background-color: red; */
  padding: 6px;
  cursor: pointer;
  font-size: 12px;
  border: 1px solid #426D66;
  border-radius: 4px;
  background: var(--vf-node-bg);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  --vf-handle: var(--vf-node-color, #1a192b);
  --vf-box-shadow: var(--vf-node-color, #1a192b);
}
</style>
