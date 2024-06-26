<template>
  <div class="h-full" absolute>
    <VueFlow :data="elements" />
  </div>
</template>

<script setup>
import VueFlow from './components/VueFlow.vue'

const nodes = ref([
  {
    id: '1', data: { label: '流程1', description: '这里是描述。。。', status: '全局启用' }, position: { x: -200, y: 50 }, type: 'input', sourcePosition: 'right',
  },
  { id: '2', data: { label: '流程2', description: '这里是描述。。。', status: '全局启用' }, position: { x: 200, y: -110 }, type: 'custom', },
  { id: '3', data: { label: '流程3', description: '这里是描述。。。', status: '全局启用' }, position: { x: 200, y: 100 }, type: 'parent' },
  {
    id: '4', data: { label: '流程4', description: '这里是描述。。。', status: '全局启用', StartOrEnd: 'start' }, position: { x: 25, y: 75 }, type: 'child', targetPosition: 'left', extent: 'parent', parentNode: '3',
  },
  {
    id: '6', data: { label: '流程6', description: '这里是描述。。。', status: '全局启用' }, position: { x: 25, y: 150 }, type: 'child', targetPosition: 'left', parentNode: '3',
  },
  {
    id: '5', data: { label: '流程5', description: '这里是描述。。。', status: '全局启用', StartOrEnd: 'end' }, position: { x: 25, y: 230 }, type: 'child', targetPosition: 'left', parentNode: '3'
  },
  {
    id: '7', data: { label: '点我', toolbarPosition: 'bottom', toolbarVisible: false }, type: 'menu',
    position: { x: 100, y: 100 },
  },

])
const edges = ref([
  {
    id: '1-2', source: '1', target: '2', animated: true, style: (edge) => {
      if (!edge.sourceNode.selected && !edge.targetNode.selected) {
        return
      }
      return { stroke: '#10b981', strokeWidth: 3 }
    },
  },
  {
    id: '1-7', source: '1', target: '7', animated: true, style: (edge) => {
      if (!edge.sourceNode.selected && !edge.targetNode.selected) {
        return
      }
      return { stroke: '#10b981', strokeWidth: 3 }
    },
  },
  {
    id: '1-3', source: '1', target: '3', animated: true, style: (edge) => {
      if (!edge.sourceNode.selected && !edge.targetNode.selected) {
        return
      }
      return { stroke: '#10b981', strokeWidth: 3 }
    },
  },
  {
    id: '3-4', source: '4', target: '6', animated: true, style: (edge) => {
      if (!edge.sourceNode.selected && !edge.targetNode.selected) {
        return
      }
      return { stroke: '#10b981', strokeWidth: 3 }
    },
  },
  {
    id: '1-5', source: '6', target: '5', animated: true, style: (edge) => {
      if (!edge.sourceNode.selected && !edge.targetNode.selected) {
        return
      }
      return { stroke: '#10b981', strokeWidth: 3 }
    },
  },

])

const elements = ref([...nodes.value, ...edges.value])

</script>

<style lang="scss" scoped></style>
