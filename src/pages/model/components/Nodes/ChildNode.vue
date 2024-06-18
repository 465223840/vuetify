<script setup>
import { Handle, Position } from '@vue-flow/core'
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  StartOrEnd: {
    type: String,
    default: ''
  },


})

const sourceHandleStyleA = computed(() => ({ backgroundColor: props.data.color, filter: 'invert(100%)' }))

const sourceHandleStyleB = computed(() => ({ backgroundColor: props.data.color, filter: 'invert(100%)' }))
</script>

<template>
  <div class="custom-node">
    <span>{{ data.data.label }}</span>
    <div class="p-2">
      <v-chip size="x-small" class="" color="pink" label>
        <v-icon icon="mdi-label" start></v-icon>
        {{ data.data.status }}
      </v-chip>
    </div>

  </div>
  <template v-if="data.data.StartOrEnd == 'start'">
    <Handle id="b" type="source" :position="Position.Bottom" :style="sourceHandleStyleB" />
  </template>
  <template v-else-if="data.data.StartOrEnd == 'end'">
    <Handle id="a" type="target" :position="Position.Top" :style="sourceHandleStyleA" />
  </template>
  <template v-else>
    <Handle id="a" type="target" :position="Position.Top" :style="sourceHandleStyleA" />
    <Handle id="b" type="source" :position="Position.Bottom" :style="sourceHandleStyleB" />
  </template>


</template>
<style scoped></style>
