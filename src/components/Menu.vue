<template>
  <v-navigation-drawer :rail="rail" permanent>
    <v-list>
      <v-list-item prepend-avatar="@/assets/logo.png" title="FBI" @click.stop="rail = false">
        <template v-slot:append>
          <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail" />
        </template>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>

    <v-list density="compact" nav v-model="activated">
      <!-- <v-list-subheader>Plain Variant</v-list-subheader> -->
      <v-list-item v-for="(item, i) in items" :key="i" :value="item" :to="item.path">
        <template #prepend>
          <v-icon :icon="item.icon" :color="item.iconColor" />
        </template>
        <v-list-item-title v-text="item.text" />
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
const rail = ref(false)

const activated = ref('标签')
const items = [

  { text: '首页', path: '/', icon: 'mdi-view-dashboard', iconColor: 'green' },
  { text: '属性', path: '/model/attributis', icon: 'mdi-clock', iconColor: 'red' },
  { text: '标签', path: '/model/labels', icon: 'mdi-tag-multiple', iconColor: 'yellow' },
  { text: '模型', path: '/model/model', icon: 'mdi-flag', iconColor: 'blue' },


  { text: '对象查询', path: '/object/search', icon: 'mdi-account-search', iconColor: 'purple' },
  { text: '人群圈选', path: '/object/range', icon: 'mdi-account-group', iconColor: 'blue' },
  { text: '群体分析', path: '/object/analysis', icon: 'mdi-account-settings', iconColor: 'blue' },
]
</script>
