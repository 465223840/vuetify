<template>
  <div class="flex gap-2 flex-wrap">
    <!-- <div v-for="(item, i) in items" :key="i" class="p-2 flex justify-between align-center"
      @click="$emit('click', item.text)">
      <div flex>
        <div absolute>
          <v-chip :color="color(item.type)" density="compact" class="text-center">
            {{ item.type }}
          </v-chip>
        </div>
        <v-btn class="ml-18" density="compact" variant="text">
          {{ item.text }}
        </v-btn>
      </div>
      <v-btn icon="mdi-close" density="compact" size="small" variant="text" />
    </div> -->
    <v-btn :color="color(item.type)" variant="plain" flat class="text-none" border v-for="(item, i) in items" @click="()=>onClick(item.type,item.text)">
      {{ item.type }} ：{{ item.text }}
    </v-btn>
  </div>
</template>
<script setup>
const emit = defineEmits(['click'])

const items = [
  { type: '小程序', text: 'My Files', icon: 'mdi-close' },
  { type: '应用', text: 'Shared with me', icon: 'mdi-close' },
  { type: '网站', text: 'Starred', icon: 'mdi-close' },
  { type: 'IMSI', text: 'Recent', icon: 'mdi-close' },
  { type: '小程序', text: 'Offline', icon: 'mdi-close' },
  { type: '全部', text: 'Uploads', icon: 'mdi-close' },
  { type: 'IMSI', text: 'Backups', icon: 'mdi-close' },
]

const sorted_items = items.sort((a, b) => a.type.localeCompare(b.type));

const onClick = (type,keywords)=> {
  emit('click', type,keywords)
}

const color = (type) => {
  switch (type) {
    case 'IMSI':
      return 'primary'
    case '应用':
      return 'orange'
    case '小程序':
      return 'green'
    case '网站':
      return 'purple'
    default:
      return '全部'
  }
}
</script>
