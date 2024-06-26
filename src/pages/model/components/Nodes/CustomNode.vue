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

import { ref } from 'vue'

const labels = { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' }
const forecast = [
  { name: '涉黄', icon: '', desc: '属性描述' },
  { name: '涉赌', icon: '', desc: '属性描述' },
  { name: '涉诈', icon: '', desc: '属性描述' },
]

const expand = ref(false)
const time = ref(0)
</script>

<template>
  <v-card class="mx-auto" width="320" :title="data.data.label" :subtitle="data.data.description">
    <v-expand-transition>
      <div v-if="expand">

        <v-list class="bg-transparent">
          <v-list-item v-for="item in forecast" :key="item.name" :append-icon="item.icon" :subtitle="item.desc"
            :title="item.name">
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn :text="!expand ? '展开 Report' : '折叠 Report'" @click="expand = !expand" color='#6A1B9A'></v-btn>
      <v-btn :text="!expand ? '展开 Report' : '折叠 Report'" color="error">del</v-btn>
    </v-card-actions>
  </v-card>

  <Handle id="a" type="target" :position="Position.Left" :style="sourceHandleStyleA" />
  <Handle id="b" type="source" :position="Position.Right" :style="sourceHandleStyleB" />
</template>
<style scoped>
.custom-node {
  width: 150px;

}
</style>
