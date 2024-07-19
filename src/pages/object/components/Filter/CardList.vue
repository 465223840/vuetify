<template>
  <v-row>
    <v-col v-for="item in list" :key="item" cols="4">
      <!-- <v-col v-for="item in list" :key="item" cols="4" sm="12" lg="6" xl="4" xxl="3"> -->
      <h-card :title="item.title">
        <BarChart :data="item.data" type="bar" :xAxisData="item.xAxisData" />
      </h-card>
    </v-col>
  </v-row>
</template>

<script setup>
import BarChart from '@/components/EChart/Bar.vue';

const list = [
  {
    title: '兵役情况',
    data: [
      { name: '1', value: 100 },
      { name: '2', value: 200 },
      { name: '3', value: 300 },
    ],
    xAxisData: ['1', '2', '3']
  },
  {
    title: '兵役情况',
    data: [
      { name: '1', value: 100 },
      { name: '2', value: 200 },
      { name: '3', value: 300 },
    ],
    xAxisData: ['1', '2', '3']
  },
  {
    title: '兵役情况',
    data: [
      { name: '1', value: 100 },
      { name: '2', value: 200 },
      { name: '3', value: 300 },
    ],
    xAxisData: ['1', '2', '3']
  }
]

</script>
