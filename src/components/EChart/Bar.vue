<!-- BarChart.vue -->
<template>
  <div ref="chart" :style="{ width: '100%', 'min-height': '220px', height: '100%' }"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import * as echarts from 'echarts';
import bar_options from './options';

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  xAxisData: {
    type: Array,
    required: true,
  },
  options: {
    type: Object,
    default: bar_options,
  },
  type: {
    type: String,
    default: 'bar'
  }
});

const emit = defineEmits(['click'])
const options = ref(props.options)
const chart = ref(null);
let myChart = null;

const initChart = () => {
  myChart = echarts.init(chart.value);
  options.value.xAxis.data = props.data
  options.value.series[0].data = props.xAxisData
  options.value.series[0].type = props.type

  myChart.setOption(options.value);
  myChart.off('click');
  myChart.on('click', (params) => {
    const parts = params.name.split('/');
    const lastPart = parts[parts.length - 1];
    console.log(lastPart)
    emit('click', lastPart)
  });
};

const resizeChart = () => {
  if (myChart) {
    myChart.resize();
  }
};

onMounted(() => {
  initChart();
  window.addEventListener('resize', resizeChart);
});

onBeforeUnmount(() => {
  if (myChart) {
    echarts.dispose(myChart);
  }
  window.removeEventListener('resize', resizeChart);
});

watch(() => props.data, initChart);
</script>

<style scoped>
/* Add any styles you need here */
</style>
