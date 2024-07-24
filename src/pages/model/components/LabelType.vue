<template>
  <el-input
    class="mb-2.5"
    v-model="filterText"
    placeholder="请输入搜索内容"
  />
  <el-tree
    ref="treeRef"
    :data="treeData"
    node-key="id"
    default-expand-all
    :expand-on-click-node="false"
    :filter-node-method="filterNode"
  >
    <template #default="{ node, data }">
      <el-row class="custom-tree-node">
        <span>{{ node.label }}</span>
        <span>
          <a @click="append(data)"><el-icon><Plus /></el-icon></a>
          <el-dropdown>
            <a class="ml-2"><el-icon><MoreFilled /></el-icon></a>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="rename(node, data)">重命名</el-dropdown-item>
                <el-dropdown-item @click="remove(node, data)">删除</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </span>
      </el-row>
    </template>
  </el-tree>
</template>

<script setup>
const filterText = ref('')
const treeRef = ref()

let id = 1000

const defaultProps = {
  children: 'children',
  label: 'label',
}

watch(filterText, (val) => {
  treeRef.value.filter(val)
})

const filterNode = (value, data) => {
  if (!value) return true
  return data.label.includes(value)
}

const append = (data) => {
  ElMessageBox.prompt('请输入分类名称', '添加分类', {
    confirmButtonText: '新建',
    cancelButtonText: '取消',
  })
    .then(({ value }) => {
      if (!!value.trim()) {
        const newChild = { id: id++, label: value, children: [] }
        if (!data.children) {
          data.children = []
        }
        data.children.push(newChild)
        treeData.value = [...treeData.value]
        ElMessage({
          type: 'success',
          message: '添加成功！',
        })
      }
    })
    .catch(() => {
      // cancel
    })
}

const rename = (node, data) => {
  ElMessageBox.prompt('请输入新的分类名称', '编辑分类', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    inputValue: data.label
  })
    .then(({ value }) => {
      if (!!value.trim()) {
        const parent = node.parent
        const children = parent.data.children || parent.data
        const index = children.findIndex((d) => d.id === data.id)
        children.splice(index, 1, {...data, label: value})
        treeData.value = [...treeData.value]
        ElMessage({
          type: 'success',
          message: '修改成功！',
        })
      }
    })
    .catch(() => {
      // cancel
    })
}

const remove = (node, data) => {
  ElMessageBox.confirm(
    '是否删除？',
    '删除提示',
    {
      confirmButtonText: '继续',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex((d) => d.id === data.id)
      children.splice(index, 1)
      treeData.value = [...treeData.value]
      ElMessage({
        type: 'success',
        message: '删除成功！',
      })
    })
    .catch(() => {
      // cancel
    })
}

const treeData= ref([
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
])

</script>

<style lang="scss" scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
