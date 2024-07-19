<template>
  <div class="h-full p-4 bg-#F3F5F6">
    <div class="border mb-2 bg-white p-4">
      <LabelExpression :searchText="searchText" :cacheTags="cache_tags" :calcTags="calc_tags" />
    </div>
    <div class="mb-2 ">
      <div class="flex justify-between">
        <UserCount :count="200" />
        <Operation class="float-right" />
      </div>
      <HideTags :data="hide_tags" />
    </div>
    <div class="bg-#F3F5F6">
      <CardList :list="list" />
    </div>
  </div>

</template>

<script setup>
import CardList from './components/Filter/CardList.vue'
import UserCount from './components/Filter/UserCount.vue'
import Operation from './components/Filter/Operation.vue'
import HideTags from './components/Filter/HideTags.vue'
import LabelExpression from './components/Filter/LabelExpression/index.vue'

const searchText = ref('')
const cache_tags = ref([
  { text: '女士', count: 100 },
  { text: '学生', count: 200 },
])
const calc_tags = ref([
  { text: '女士', count: 100 },
  { text: '学生', count: 200 },
])
const hide_tags = ref([
  { text: '分析维度1' },
  { text: '分析维度2' },
])

const list = [
  {
    title: '兵役情况',
    seriesData: [1, 2, 3],
    xAxisData: ['a', 'b', 'c']
  },
  {
    title: '兵役情况',
    type: 'pie',
    seriesData: [
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' },
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video Ads' }
    ],

  },
  {
    title: '兵役情况',
    seriesData: [11, 12, 13],
    xAxisData: ['a', 'b', 'c']
  }
]

</script>
