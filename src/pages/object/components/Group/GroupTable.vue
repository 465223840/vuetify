<template>
  <el-table :data="data" :row-style="rowStyle">
    <el-table-column :label="header.title" :key="header.key" :width="header.width" v-for="(header, index) in headers">
      <template #default="scope">
        <div style="display: flex; align-items: center" v-if="header.key === 'actions'">
          <h-button type="link" @click="$emit('operation', 'detail', scope.row, scope.$index)">详情</h-button>
          <h-button type="link" @click="$emit('operation', 'edit', scope.row, scope.$index)">编辑</h-button>
          <h-button type="link" @click="$emit('operation', 'remove', scope.row, scope.$index)">删除</h-button>
          <h-button type="link" @click="$emit('operation', 'open', scope.row, scope.$index)">转为公开</h-button>
          <h-button type="link" @click="$emit('operation', 'copy', scope.row, scope.$index)">加入组合库</h-button>
        </div>
        <div style="display: flex; align-items: center" v-else-if="['name1'].includes(header.key)">
          <v-icon v-if="header.key == 'name1'" icon="mdi-account-group" class="text-[#4A70D8]" />
          <h-button type="link" @click="$emit('operation', 'name', scope.row, scope.$index)">{{ scope.row[header.key] }}
          </h-button>
        </div>
        <div v-else>
          <span style="margin-left: 10px">{{ scope.row[header.key] }}</span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['operation'])


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


const rowStyle = ({ row, rowIndex }) => {
  // console.log(row)
}
</script>

<style lang="scss" scoped></style>
