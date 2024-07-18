<template>
  <div class="w-full flex align-center justify-between">
    <div class="flex align-center">
      <Icon :type="item.type" />
      <div class="mr-2">
        <v-icon v-if="item.children && item.children.length > 0"
          :icon="`mdi-chevron-${isOpen[index] ? 'down' : 'right'}`" />
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div>
      (Level: {{ level }})
      <a href="#" style="margin-left: 8px; font-size: 12px;" @click="onRemove(item.id)">
        <v-icon icon="mdi-close" />
      </a>
    </div>
  </div>
</template>

<script setup>
import Icon from './Icon.vue'

const props = defineProps(['item', 'isOpen', 'level'])
const emit = defineEmits(['remove'])

const onRemove = (id) => emit('remove', id)
</script>

<style lang="scss" scoped></style>
