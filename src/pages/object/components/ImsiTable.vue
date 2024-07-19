<template>
  <v-data-table :items="items" :headers="headers">
    <template v-slot:item.imsi_id="{ item }">
      <v-btn color="primary" variant="plain">{{ item.imsi_id }}</v-btn>
    </template>
    <template v-slot:item.app_count="{ item }">
      {{ item.app_count }} / {{ item.applet_count }} / {{ item.web_count }}
    </template>
    <template v-slot:item.illegal_app_count="{ item }">
      {{ item.illegal_app_count }} / {{ item.illegal_web_count }}
    </template>
    <template v-slot:item.tags="{ item }">
      <v-chip color="primary" size="small" v-for="tag in item.tags">
        {{ tag }}
      </v-chip>
    </template>
    <template v-slot:item.discovery_time="{ item }">
      <div>最早：{{ item.discovery_time[0] }}</div>
      <div>最晚：{{ item.discovery_time[1] }}</div>
    </template>
    <template v-slot:item.action="{ item }">
      <v-tooltip text="详情">
        <template #activator="{ props }">
          <v-btn v-bind="props" icon="mdi-information-outline" color="primary" variant="plain" size="small" />
        </template>
      </v-tooltip>
      <v-tooltip text="收藏">
        <template #activator="{ props }">
          <v-btn v-bind="props" icon="mdi-information-outline" color="primary" variant="plain" size="small" />
        </template>
      </v-tooltip>
      <v-tooltip text="刷新">
        <template #activator="{ props }">
          <v-btn v-bind="props" icon="mdi-refresh" color="primary" variant="plain" size="small" />
        </template>
      </v-tooltip>

    </template>
  </v-data-table>
</template>

<script setup>
const headers = ref([
  { title: 'IMSI对象', key: 'imsi_id' },
  { title: '手机号', key: 'phone_num' },
  { title: '应用/小程序/网站', key: 'app_count' },
  { title: '非法应用/网站', key: 'illegal_app_count' },
  { title: '业务标签', key: 'tags' },
  { title: '发现时间', key: 'discovery_time' },
  { title: '操 作', key: 'action' }
])

const items = [
  {
    imsi_id: '1781683296486',
    phone_num: '13812341564',
    app_count: 24,
    applet_count: 38,
    web_count: 26,
    illegal_app_count: 3,
    illegal_web_count: 24,
    tags: ['涉赌', '藏族', '男性', '青年人'],
    discovery_time: ['2024-04-21  08:50:08', '2024-06-21  08:50:08']
  },
  {
    imsi_id: '178168320000',
    phone_num: '13812341564',
    app_count: 24,
    applet_count: 38,
    web_count: 26,
    illegal_app_count: 3,
    illegal_web_count: 24,
    tags: ['涉赌', '藏族', '男性', '青年人'],
    discovery_time: ['2024-04-21  08:50:08', '2024-06-21  08:50:08']
  }
]
</script>

<style lang="scss" scoped></style>
