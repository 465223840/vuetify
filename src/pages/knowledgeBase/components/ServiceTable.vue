<template>
  <el-table :data="dataList">
    <el-table-column type="selection" width="50"></el-table-column>
    <el-table-column label="名称" prop="name">
      <template #default="scope">
        <el-link type="primary">{{ scope.row.name }}</el-link>
      </template>
    </el-table-column>
    <el-table-column label="类型" prop="type"></el-table-column>
    <el-table-column label="域名" prop="domain"></el-table-column>
    <el-table-column label="包名" prop="packageName"></el-table-column>
    <el-table-column label="开发厂商" prop="developer"></el-table-column>
    <el-table-column label="关联属性">
      <template #default="scope">
        <el-tag v-for="tag in scope.row.relatedAttrList" :key="tag" type="primary" class="mr-1">{{ tag }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="建立时间" prop="createTime" width="120"></el-table-column>
    <el-table-column label="操作" width="120">
      <template #default="scope">
        <el-tooltip effect="dark" content="编辑" placement="top">
          <el-button class="btn-icon" type="primary" text @click="editDrawer = true"><el-icon>
              <Edit />
            </el-icon></el-button>
        </el-tooltip>
        <el-tooltip effect="dark" content="删除" placement="top">
          <el-button class="btn-icon" type="primary" text><el-icon>
              <Delete />
            </el-icon></el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
  <div class="flex justify-center mt-4">
    <el-pagination
      hide-on-single-page
      v-model:current-page="currentPage"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)
const dataList = ref([])

const baseUrl = '/api/service/manage/normal';
const params = new URLSearchParams({
  pageNo: currentPage.value,
  pageSize: pageSize.value
});
const url = `${baseUrl}?${params.toString()}`;

// queryTable()

const handleCurrentChange = (v) => {
  console.log(v)
  currentPage.value = v
  queryTable()
}

const handleSizeChange = () => {
}

const queryTable = () => {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data)
      total.value = data.result.total
      dataList.value = data.result.records
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

</script>

<style lang="scss" scoped>
</style>
