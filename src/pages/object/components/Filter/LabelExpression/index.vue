<template>
  <div class="border bg-[#F5FAFA]" @contextmenu.prevent>
    <div class="flex gap-2 items-center p-2 border-b-2">
      <v-menu>
        <template #activator="{ props }">
          <h-input prefixIcon="mdi-magnify" v-model="searchText" class="min-w-96" v-bind="props" />
        </template>
        <v-card class="min-w-96 mt-2">
          <v-list density="compact" nav :lines="false" @click:select="onClickSelect" v-if="items.length > 0">
            <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary">
              <v-list-item-title v-text="item.display"></v-list-item-title>
            </v-list-item>
          </v-list>
          <div v-else class="p-8 text-gray-300 text-center">
            无匹配项
          </div>
        </v-card>
      </v-menu>

      <v-btn density="comfortable" icon="mdi-file-tree-outline" size="small" tile class="mr-4 text-xs">
        <v-icon />
        <v-menu :close-on-content-click="false" activator="parent">
          <LabelTree />
        </v-menu>
      </v-btn>

      <div class="flex gap-2 w-screen" ref="el1">
        <h-tag v-for="item in list1" :key="item.id" clearable @remove="onRemoveTag(item.id)">
          {{ item.label }}
        </h-tag>
      </div>

      <h-select @select="onQuickGenerate" icon='mdi-function-variant' :options="[
        { label: '与 (&)', value: '&' },
        { label: '或 (|)', value: '|' },
        { label: '非 (!)', value: '!' }
      ]" />
    </div>

    <div class="flex relative p-1">
      <div class="flex gap-2 p-2 border-r-2" ref="el3">
        <h-tag v-for="item in list3" :key="item.id" :color="item.color">
          {{ item.label }}
        </h-tag>
      </div>

      <div class="flex flex-wrap gap-2 p-2 w-screen" ref="el2">
        <h-tag v-for="item in list2" :key="item.id" :color="item.color" @contextmenu="handleRightClick(item, $event)">
          {{ item.label }}
        </h-tag>
      </div>

      <div class="p-2">
        <el-button :icon="Delete" @click="onClearTags">清空</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Delete } from '@element-plus/icons-vue'

import UseData from './UseData';

const props = defineProps({
  treeData: {
    type: Array, default: () => [
      {
        label: '标签1',
        id: 1,
        children: [{ label: '标签1-1', id: 11 }],
      },
      { label: '标签2', id: 2 },
    ]
  },
})

const {
  el1, el2, el3, searchText, items, list1, list2, list3,
  onClickSelect, onClearTags, onQuickGenerate, onRemoveTag, handleRightClick
} = UseData({ treeData: props.treeData })



</script>
