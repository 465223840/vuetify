<template>
  <el-table :data="data" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="60" align="center" />
    <el-table-column :label="header.title" :key="header.key" v-for="(header, index) in headers">
      <template #default="scope">
        <div style="display: flex; align-items: center" v-if="header.key === 'actions'">
          <h-button type="link" @click="removeItem(scope.$index)">删除</h-button>
        </div>
        <div style="display: flex; align-items: center" v-else-if="['name1'].includes(header.key)">
          <h-button type="link" @click="onSkip(scope.row)">{{ scope.row[header.key] }}</h-button>
        </div>
        <div v-else>
          <span style="margin-left: 10px">{{ scope.row[header.key] }}</span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['removeItem', 'action'])

const multipleSelection = ref([])


const removeItem = (index) => {
  emit('removeItem', index)
};
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

const headers = [
  {
    title: '群体名称',
    align: 'start',
    key: 'name1',
  },
  {
    title: '群体来源',
    align: 'end',
    key: 'name2',
  },
  {
    title: '群体类型',
    align: 'end',
    key: 'name3',
  },
  {
    title: '操作',
    align: 'end',
    width: 340,
    key: 'actions',
  },
]
</script>

<style lang="scss" scoped></style>
