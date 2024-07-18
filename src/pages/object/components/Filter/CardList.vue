<template>
  <v-row>
    <v-col v-for="n in 3" :key="n" cols="4" sm="12" lg="6" xl="4" xxl="3">
      <h-card title="31222">
        <BarChart :data="[]" />
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
  }
]




</script>
