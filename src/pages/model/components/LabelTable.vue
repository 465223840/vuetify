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

</script>

<style lang="scss" scoped>
</style>
