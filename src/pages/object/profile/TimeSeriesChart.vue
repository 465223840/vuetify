<!-- BarChart.vue -->
<template>
  <div ref="chart" :style="{ width: '100%', height: '100%' }"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import * as echarts from "echarts";

// const props = defineProps({
//   data: {
//     type: Array,
//     required: true,
//   },
//   options: {
//     type: Object,
//     default: true,
//   },
// });
// const emit = defineEmits(['click'])

const data = [
  {
    name: "0-2",
    value: 100,
  },
  {
    name: "2-4",
    value: 100,
  },
  {
    name: "4-6",
    value: 100,
  },
  {
    name: "6-8",
    value: 100,
  },
  {
    name: "8-10",
    value: 100,
  },
  {
    name: "10-12",
    value: 100,
  },
];

const chart = ref(null);
let myChart = null;

const initChart = () => {
  myChart = echarts.init(chart.value);
  const option = {
    color: [
      "#9fb7e4",
      "#3ac1ff",
      "#ffcc40",
      "#ff5a5a",
      "#05c091",
      "#fad337",
      "#6e48ff",
    ],
    yAxis: {
      data: data.map(item => item.name),
      axisLabel: {
        padding: [0, 0, 0, 0],
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    grid: {
      top: '5%',
      bottom: '10%',
      left: '15%'
    },
    xAxis: {
      type: "value",
      axisLabel: {
      },
    },
    series: [
      {
        type: "bar",
        barWidth: 10,
        label: {
          show: false,
        },
        data: data.map(item => item.value),
      },
    ],
  };
  myChart.setOption(option);
};

const resizeChart = () => {
  if (myChart) {
    myChart.resize();
  }
};

onMounted(() => {
  initChart();
  window.addEventListener("resize", resizeChart);
});

onBeforeUnmount(() => {
  if (myChart) {
    echarts.dispose(myChart);
  }
  window.removeEventListener("resize", resizeChart);
});

// watch(() => props.data, initChart);
</script>

<style scoped>
/* Add any styles you need here */
</style>
