<template>
  <v-data-table :items="items" :headers="headers">
    <template v-slot:item.name="{ item }">
      <v-btn color="primary" variant="plain">{{ item.name }}</v-btn>
    </template>
    <template v-slot:item.user_count="{ item }">
      <v-btn color="primary" variant="plain">{{ item.user_count }}</v-btn>
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
  { title: '网站名称', key: 'name' },
  { title: '域名', key: 'domain' },
  { title: '地域', key: 'region' },
  { title: '政府服务', key: 'gov_services' },
  { title: '行业属性', key: 'industry_attributes' },
  { title: '用户数量', key: 'user_count' },
  { title: '发现时间', key: 'discovery_time' },
  { title: '操 作', key: 'action' }
])

const items = [
  {
    name: '新竹市家庭教育中心',
    domain: 'dep-family.hccg.gov.tw',
    region: "台湾",
    gov_services: "教育",
    industry_attributes: "培训教育",
    user_count: "9999",
    discovery_time: ['2024-04-21  08:50:08', '2024-06-21  08:50:08'],
  },
  {
    name: '新竹市家庭教育中心',
    domain: 'dep-family.hccg.gov.tw',
    region: "台湾",
    gov_services: "教育",
    industry_attributes: "培训教育",
    user_count: "9999",
    discovery_time: ['2024-04-21  08:50:08', '2024-06-21  08:50:08'],
  }
]
</script>

<style lang="scss" scoped></style>
