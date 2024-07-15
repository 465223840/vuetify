<template>
  <v-list-item border slim density="compact">
    <template #append>
      <span class="text-sm mr-3">{{ value.count || 0 }}</span>
      <v-btn color="#3B5263" icon="mdi-close" size="small" variant="text" @click="() => onRemove(index)"
        density="compact" />
    </template>
    <template #prepend>
      <v-icon :icon="value.icon" :color="value.iconColor" />
    </template>
    <v-list-item-title v-text="value.text" />
  </v-list-item>
</template>

<script setup>
const props = defineProps(['value'])
const emit = defineEmits(['remove'])

const onRemove = (index) => emit('remove', index)

</script>
