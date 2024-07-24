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
    label: '标签1',
    id: 1,
    children: [
      {
        label: '标签1-1',
        id: 11,
        children: [
          {
            label: '标签1-1-1',
            id: 111,
            children: [
              {
                label: '标签1-1-1-1',
                id: 1111
              },
              {
                label: '标签1-1-1-2',
                id: 1112
              }
            ]
          },
          {
            label: '标签1-1-2',
            id: 112
          }
        ]
      },
      {
        label: '标签1-2',
        id: 12
      }
    ]
  },
  {
    label: '标签2',
    id: 2,
    children: [
      {
        label: '标签2-1',
        id: 21,
        children: [
          {
            label: '标签2-1-1',
            id: 211
          },
          {
            label: '标签2-1-2',
            id: 212,
            children: [
              {
                label: '标签2-1-2-1',
                id: 2121
              }
            ]
          }
        ]
      },
      {
        label: '标签2-2',
        id: 22
      }
    ]
  },
  {
    label: '标签3',
    id: 3,
    children: [
      {
        label: '标签3-1',
        id: 31
      },
      {
        label: '标签3-2',
        id: 32,
        children: [
          {
            label: '标签3-2-1',
            id: 321
          }
        ]
      }
    ]
  },
  {
    label: '标签4',
    id: 4,
    children: [
      {
        label: '标签4-1',
        id: 41
      },
      {
        label: '标签4-2',
        id: 42
      }
    ]
  },
  {
    label: '标签5',
    id: 5,
    children: [
      {
        label: '标签5-1',
        id: 51
      },
      {
        label: '标签5-2',
        id: 52,
        children: [
          {
            label: '标签5-2-1',
            id: 521,
            children: [
              {
                label: '标签5-2-1-1',
                id: 5211
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: '标签6',
    id: 6,
    children: [
      {
        label: '标签6-1',
        id: 61,
        children: [
          {
            label: '标签6-1-1',
            id: 611
          }
        ]
      }
    ]
  },
  {
    label: '标签7',
    id: 7
  },
  {
    label: '标签8',
    id: 8
  }
]
</script>

<style scoped>
:deep(.el-cascader-menu__wrap.el-scrollbar__wrap) {
  height: 100%;
}
</style>
