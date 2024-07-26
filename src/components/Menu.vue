<template>
  <v-navigation-drawer :rail="rail" permanent>
    <v-list>
      <v-list-item prepend-avatar="@/assets/logo.png" title="BFI" @click.stop="rail = false">
        <template #append>
          <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail" />
        </template>
      </v-list-item>
      <v-divider />
    </v-list>
    <v-list density="compact" nav v-model="activated">
      <template v-for="(item, index) in items">
        <v-list-subheader v-if="item.type == 'subheader'">
          {{ item.text }}
        </v-list-subheader>
        <v-divider v-else-if="item.type == 'divider'" />
        <v-list-item v-else :value="item" :to="item.path">
          <template #prepend>
            <v-icon :icon="item.icon" :color="item.iconColor" />
          </template>
          <v-list-item-title v-text="item.text" />
        </v-list-item>
      </template>
    </v-list>
    <template #append>
      <div class="bg-red pa-2">
        <v-btn block>
          userinfo
        </v-btn>
      </div>
    </template>


  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
const rail = ref(false)

const activated = ref('标签')
const items = [

  { text: '首页', path: '/', icon: 'mdi-view-dashboard', iconColor: 'green' },

  { text: '对象', type: 'subheader' },
  { type: 'divider' },
  { text: '画像查询', path: '/object/search', icon: 'mdi-account-search', iconColor: 'purple' },
  { text: '标签圈人', path: '/object/filter', icon: 'mdi-filter', iconColor: 'blue' },
  { text: '人群圈选', path: '/object/range', icon: 'mdi-account-group', iconColor: 'blue' },
  { text: '群体列表', path: '/object/group', icon: 'mdi-account-settings', iconColor: 'blue' },


  { text: '模型', type: 'subheader' },
  { type: 'divider' },
  { text: '属性', path: '/model/attributis', icon: 'mdi-clock', iconColor: 'red' },
  { text: '标签', path: '/model/labels', icon: 'mdi-tag-multiple', iconColor: 'yellow' },
  { text: '模型', path: '/model/model', icon: 'mdi-flag', iconColor: 'blue' },

  { text: '知识库', type: 'subheader' },
  { type: 'divider' },
  { text: '正常服务', path: '/knowledgeBase/normalService', icon: 'mdi-heart', iconColor: 'green' },
  { text: '非法服务', path: '/knowledgeBase/illegalService', icon: 'mdi-alert', iconColor: 'yellow' },
  { text: '模型', path: '/model/model', icon: 'mdi-flag', iconColor: 'blue' },

  { text: '资源', type: 'subheader' },
  { text: '网站', path: '/resource/website', icon: 'mdi-web', iconColor: 'blue' },
]
</script>
