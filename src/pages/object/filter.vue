<template>
  <div class="h-full p-4 bg-#F3F5F6">
    <div class="border mb-2 bg-white p-5">
      <LabelExpression :searchText="searchText" :cacheTags="cache_tags" :calcTags="calc_tags" />
    </div>
    <Analyse :list="list" />
  </div>
</template>

<script setup>
import LabelExpression from './components/Filter/LabelExpression/index.vue'

import Analyse from './components/Filter/Analyse/index.vue'


const searchText = ref('')
const cache_tags = ref([
  { text: '女士', count: 100 },
  { text: '学生', count: 200 },
])
const calc_tags = ref([
  { text: '女士', count: 100 },
  { text: '学生', count: 200 },
])


const list = [
  {
    id: 1,
    title: '兵役情况',
    type: 'bar',
    seriesData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    xAxisData: ['aaaaaa', 'bbbbbb', 'cccccc', 'dddddd', 'eeeeee', 'ffffff', 'gggggg', 'hhhhhh', 'iiiiii', 'jjjjjj', 'kkkkkk', 'llllll', 'mmmmmm', 'nnnnnn', 'oooooo', 'pppppp', 'qqqqqq', 'rrrrrr', 'ssssss']
  },
  {
    id: 2,
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
    id: 3,
    title: '兵役情况',
    type: 'bar',
    seriesData: [11, 12, 13],
    xAxisData: ['a', 'b', 'c']
  }
]

</script>
