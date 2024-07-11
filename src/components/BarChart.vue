<!-- BarChart.vue -->
<template>
  <div ref="chart" :style="{ width: '100%', height: '300px' }"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(['click'])

const chart = ref(null);
let myChart = null;

const initChart = () => {
  myChart = echarts.init(chart.value);
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderColor: '#ccc',
      borderWidth: 1,
      textStyle: {
        color: '#333',
      },
    },
    xAxis: {
      data: props.data.map(item => {
        return item.tag_code.split('/').slice(1).join('/');
      }),
      axisLabel: {
        padding: [0, 0, 0, 0],
        rotate: -30 // X轴标签倾斜 45 度
      }
    },
    grid: {
      top: '5%',
      left: '15%'
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: function (value, index) {
          return value >= 10000 ? parseInt(value / 10000) + "万" : value;
        },
      },
    },
    series: [
      {
        name: '属性',
        type: 'bar',
        barWidth: '50%',

        data: props.data.map(item => item.count),
      },
    ],
  };
  myChart.setOption(option);
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
