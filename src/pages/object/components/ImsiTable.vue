<template>
  <el-table :data="items">
    <el-table-column label="序号" type="index" width="55px"></el-table-column>
    <el-table-column label="IMSI对象">
      <template #default="scope">
        <el-link type="primary" @click="openProfile(scope.row)">{{ scope.row.imsi_id }}</el-link>
      </template>
    </el-table-column>
    <el-table-column label="手机号" prop="phone_num" width="150px"></el-table-column>
    <el-table-column label="应用/小程序/网站" width="180px">
      <template #default="scope">
        {{ scope.row.app_count }} / {{ scope.row.applet_count }} / {{ scope.row.web_count }}
      </template>
    </el-table-column>
    <el-table-column label="非法应用/网站" width="150px">
      <template #default="scope">
        {{ scope.row.illegal_app_count }} / {{ scope.row.illegal_web_count }}
      </template>
    </el-table-column>
    <el-table-column label="业务标签">
      <template #default="scope">
        <el-tag
          class="ml-1"
          v-for="(tag, i) in scope.row.tags"
          :key="i">{{ tag }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="发现时间">
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
      </template>
    </el-table-column>
  </el-table>
  <el-row class="mt-6 mb-2.5" justify="center">
    <el-pagination layout="prev, pager, next" :total="50" />
  </el-row>
</template>

<script setup>
const items = [
  {
    imsi_id: '1781683296486',
    phone_num: '13812341564',
    collect: true,
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
    collect: false,
    app_count: 24,
    applet_count: 38,
    web_count: 26,
    illegal_app_count: 3,
    illegal_web_count: 24,
    tags: ['涉赌', '藏族', '男性', '青年人'],
    discovery_time: ['2024-04-21  08:50:08', '2024-06-21  08:50:08']
  }
]

const openProfile = () => {
  setTimeout(() => {
    router.push(`/object/SearchResults?type=${type}&keywords=${keywords}`)
    loading.value = false
  }, 200);
}
</script>

<style lang="scss" scoped></style>
