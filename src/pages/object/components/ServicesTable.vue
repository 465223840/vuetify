<template>
  <el-table :data="items">
    <el-table-column label="序号" type="index" width="55px"></el-table-column>
    <el-table-column label="网站名称" prop="name">
      <template #default="scope">
        <el-link type="primary" @click="openProfile(scope.row)">{{ scope.row.name }}</el-link>
      </template>
    </el-table-column>
    <el-table-column label="域名" prop="domain"></el-table-column>
    <el-table-column label="地域" prop="region"></el-table-column>
    <el-table-column label="政府服务" prop="gov_services"></el-table-column>
    <el-table-column label="行业属性" prop="industry_attributes"></el-table-column>
    <el-table-column label="用户数量" prop="user_count">
      <template #default="scope">
        <el-link type="primary">{{ scope.row.user_count }}</el-link>
      </template>
    </el-table-column>
    <el-table-column label="发现时间" prop="discovery_time" width="240px">
      <template #default="scope">
        最早：{{ scope.row.discovery_time[0] }} <br />
        最晚：{{ scope.row.discovery_time[1] }}
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-tooltip
          effect="dark"
          content="详情"
          placement="top"
        >
          <el-button
            class="btn-icon"
            type="primary"
            text><el-icon><InfoFilled /></el-icon></el-button>
        </el-tooltip>
        <el-tooltip
          v-if="!scope.row.collect"
          effect="dark"
          content="收藏"
          placement="top"
        >
          <el-button
            class="btn-icon"
            type="primary"
            text><el-icon><Star /></el-icon></el-button>
        </el-tooltip>
        <el-tooltip
          v-if="scope.row.collect"
          effect="dark"
          content="取消收藏"
          placement="top"
        >
          <el-button
            class="btn-icon"
            type="primary"
            text><el-icon><StarFilled /></el-icon></el-button>
        </el-tooltip>
        <el-tooltip
          effect="dark"
          content="更新信息"
          placement="top"
        >
          <el-button
            class="btn-icon"
            type="primary"
            text><el-icon><Refresh /></el-icon></el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
  <el-row class="mt-6 mb-2.5" justify="center">
    <el-pagination layout="prev, pager, next" :total="50" />
  </el-row>
</template>

<script setup>
const router = useRouter()

const items = [
  {
    name: '新竹市家庭教育中心',
    domain: 'dep-family.hccg.gov.tw',
    collect: true,
    region: "台湾",
    gov_services: "教育",
    industry_attributes: "培训教育",
    user_count: "9999",
    discovery_time: ['2024-04-21  08:50:08', '2024-06-21  08:50:08'],
  },
  {
    name: '新竹市家庭教育中心',
    domain: 'dep-family.hccg.gov.tw',
    collect: false,
    region: "台湾",
    gov_services: "教育",
    industry_attributes: "培训教育",
    user_count: "9999",
    discovery_time: ['2024-04-21  08:50:08', '2024-06-21  08:50:08'],
  }
]

const openProfile = (row) => {
  console.log(row.name)
  setTimeout(() => {
    router.push(`/object/profile/123`)
  }, 200);
}
</script>

<style lang="scss" scoped></style>
