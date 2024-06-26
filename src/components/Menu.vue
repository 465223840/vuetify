<template>
  <v-navigation-drawer :rail="rail">
    <v-list>
      <v-list-item prepend-avatar="@/assets/logo.png" title="Sandra Adams" @click.stop="rail = false">
        <template v-slot:append>
          <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail" />
        </template>
      </v-list-item>
    </v-list>
    <!-- <v-divider></v-divider> -->
    <v-list density="compact" nav v-model="activated">
      <v-list-subheader>REPORTS</v-list-subheader>
      <v-list-item v-for="(item, i) in items" :key="i" :value="item" :to="item.path">
        <template v-slot:prepend>
          <v-icon :icon="item.icon" :color="item.iconColor"></v-icon>
        </template>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
      <v-list-subheader>REPORTS</v-list-subheader>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
const rail = ref(false)

const activated = ref('标签')
const items = [
  { type: 'divider' },
  { text: '首页', path: '/', icon: 'mdi-leaf', iconColor: 'green' },
  { text: '属性', path: '/model/attributis', icon: 'mdi-clock', iconColor: 'red' },
  { text: '标签', path: '/model/labels', icon: 'mdi-account', iconColor: 'yellow' },
  { text: '模型', path: '/model/model', icon: 'mdi-flag', iconColor: 'blue' },
]
</script>
