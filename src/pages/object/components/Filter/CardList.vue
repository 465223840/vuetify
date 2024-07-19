<template>
  <v-row>
    <v-col v-for="item in list" :key="item" cols="4">
      <!-- <v-col v-for="item in list" :key="item" cols="4" sm="12" lg="6" xl="4" xxl="3"> -->
      <h-card :title="item.title">
        <component :is="componentId(item.type)" :data="item.data" :xAxisData="item.xAxisData"
          :legendData="item.legendData" :seriesData="item.seriesData" />
        <!-- <BarChart :data="item.data" type="bar" :xAxisData="item.xAxisData" /> -->
      </h-card>
    </v-col>
  </v-row>
</template>

<script setup>
import bar from '@/components/EChart/Bar.vue';
import pie from '@/components/EChart/Pie.vue';

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
