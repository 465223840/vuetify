<template>
  <div class="mt-2 p-3 bg-white z-10 min-w-[600px]  shadow-2xl">
    <div class="mb-2 h-6 flex justify-between items-center">
      <span class="text-sm">分析维度</span>
      <div class="flex gap-2">
        <h-input prefixIcon="mdi-magnify" />
        <v-btn color="primary" density="compact">加入</v-btn>
      </div>
    </div>
    <div class="bg-[#F3F5F6] w-100 min-h-40">
      <el-cascader-panel :options="options" :props="{ multiple: true, checkStrictly: true, }" class="h-100"
        v-model="data">
        <template #default="{ node, data }">
          <span>{{ data.label }}</span>
          <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
        </template>
      </el-cascader-panel>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['options'])

const data = ref([])

const options = [
  {
    value: 'guide',
    label: 'GuideGuid',
    children: [
      {
        value: 'guide',
        label: 'GuideGuid',
      }
    ]
  }
]
</script>

<style scoped>
:deep(.el-cascader-menu__wrap.el-scrollbar__wrap) {
  height: 100%;
}
</style>
