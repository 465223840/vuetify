<template>
  <el-tabs v-model="tab">
    <el-tab-pane label="网站对象" name="website">
      <ServicesTable/>
    </el-tab-pane>
    <el-tab-pane label="IMSI对象" name="imsi">
      <ImsiTable />
    </el-tab-pane>
  </el-tabs>
</template>
<script setup>
import ServicesTable from './ServicesTable.vue'
import ImsiTable from './ImsiTable.vue'

const tab = ref('website')


</script>
