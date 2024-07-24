<template>
  <div>
    <div class="bg-white border p-2">
      <v-row justify="space-between">
        <v-col cols="6">
          <v-sheet class="pa-2 ma-2">
            <h-input prefixIcon="mdi-magnify" v-model="search" />
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet class="pa-2 ma-2">
            <!-- <h-input prefixIcon="mdi-magnify" v-model="search" /> -->
            <el-button type="primary">查 询</el-button>
            <el-button>重置</el-button>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
    <!-- scope.column.label -->
    <div>
      <el-table :data="tableData" @selection-change="handleSelectionChange" :row-style="rowStyle">
        <el-table-column type="selection" width="60" align="center" />
        <el-table-column :label="header.title" :key="header.key" :width="header.width" v-for="header in headers">
          <template #default="scope">
            <div style="display: flex; align-items: center" v-if="header.key === 'actions'">
              <el-button type="primary" link>详情</el-button>
              <el-button type="primary" link>编辑</el-button>
              <el-button type="primary" link>删除</el-button>
              <el-button type="primary" link>转为公开</el-button>
              <el-button type="primary" link>加入组合库</el-button>
            </div>
            <div style="display: flex; align-items: center" v-else-if="['name1', 'name2'].includes(header.key)">
              <el-icon v-if="header.key == 'name1'">
                <timer />
              </el-icon>
              <el-button type="primary" link>{{ scope.row[header.key] }}</el-button>
            </div>
            <div v-else>
              <span style="margin-left: 10px">{{ scope.row[header.key] }}</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const multipleSelection = ref([])

const search = ref('')
const headers = [
  {
    title: '群体名称',
    align: 'start',
    key: 'name1',
    width: 180
  },
  {
    title: '群体来源',
    align: 'end',
    key: 'name2',
    width: 120
  },
  {
    title: '群体类型',
    align: 'end',
    key: 'name3',
    width: 120
  },
  {
    title: '群组标签',
    align: 'end',
    key: 'name4',
  },
  {
    title: '创建人',
    align: 'end',
    key: 'name5',
  },
  {
    title: '创建时间',
    align: 'end',
    key: 'name6',
  },
  {
    title: '操作',
    align: 'end',
    width: 340,
    key: 'actions',
  },
]
const tableData = [
  {
    name1: '2016-05-03',
    name2: 'Tom',
    name3: 'No. 189,',
  },
  {
    name1: '2016-05-02',
    name2: 'Tom',
    name3: 'No. 189,',
  },
  {
    name1: '2016-05-04',
    name2: 'Tom',
    name3: 'No. 189,',
  },
  {
    name1: '2016-05-01',
    name2: 'Tom',
    name3: 'No. 189,',
  },
]

const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

const rowStyle = ({ row, rowIndex }) => {
  console.log(row)
}
</script>
