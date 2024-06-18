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

const sourceHandleStyleB = computed(() => ({
  backgroundColor: props.data.color,
  filter: 'invert(100%)',
  // bottom: '10px',
  // top: 'auto',
}))
</script>

<template>
  <div class="custom-node">

    <div class="p-2 flex justify-between">
      <span>{{ data.data.label }}</span>

      <v-btn icon="mdi-delete" color="red" size="x-small" density="comfortable" />

    </div>
    <div class="p-2">
      <v-chip size="x-small" class="" color="pink" label>
        <v-icon icon="mdi-label" start></v-icon>
        {{ data.data.status }}
      </v-chip>
    </div>


    <!-- <div>
      <img src="@/assets/logo.png" width="20" alt="">
    </div> -->
  </div>

  <Handle id="a" type="target" :position="Position.Left" :style="sourceHandleStyleA" />
  <Handle id="b" type="source" :position="Position.Right" :style="sourceHandleStyleB" />
</template>
<style scoped>
.custom-node {
  width: 150px;

}
</style>
