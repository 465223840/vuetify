<script setup>
import { Handle, Position } from '@vue-flow/core'
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const sourceHandleStyleA = computed(() => ({ backgroundColor: props.data.color, filter: 'invert(100%)' }))

const sourceHandleStyleB = computed(() => ({ backgroundColor: props.data.color, filter: 'invert(100%)' }))
</script>

<template>
  <div class="custom-node">
    <span>{{ data.data.label }}</span>
    <v-chip size="x-small" color="green" variant="flat">
      <v-icon icon="mdi-label" start></v-icon>
      {{ data.data.status }}
    </v-chip>

  </div>

  <Handle id="a" type="target" :position="Position.Left" :style="sourceHandleStyleA" />
  <Handle id="b" type="source" :position="Position.Right" :style="sourceHandleStyleB" />
</template>
<style scoped>
.custom-node {
  background: rgba(19, 141, 3, 0.4);
  width: 200px;
  height: 300px;

}
</style>
