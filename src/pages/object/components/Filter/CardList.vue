<template>
  <v-row>
    <v-col v-for="item in list" :key="item" cols="4" sm="12" lg="4" xl="3" xxl="2">
      <h-card :title="item.title">
        <template #btns>
          <h-select :options="options" v-model:value="item.type" />
        </template>
        <component :is="componentId(item.type)" :data="item.data" :xAxisData="item.xAxisData"
          :legendData="item.legendData" :seriesData="item.seriesData" />
      </h-card>
    </v-col>
  </v-row>
</template>

<script setup>
import bar from '@/components/EChart/Bar.vue';
import pie from '@/components/EChart/Pie.vue';

const options = [
  { label: '柱状图', value: 'bar' },
  { label: '饼图', value: 'pie' }
]

const componentId = (type) => {
  switch (type) {
    case 'bar':
      return bar;
    case 'pie':
      return pie;
    default:
      return bar;
  }
}


const props = defineProps(['list'])



</script>
