<!-- BarChart.vue -->
<template>
  <div ref="chart" :style="{ width: '100%', height: '100%' }"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import * as echarts from 'echarts';

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
    name: '0-2',
    value: 100
  }, {
    name: '2-4',
    value: 100
  }, {
    name: '4-6',
    value: 100
  }, {
    name: '6-8',
    value: 100
  }, {
    name: '8-10',
    value: 100
  }, {
    name: '10-12',
    value: 100
  }, {
    name: '12-14',
    value: 100
  }, {
    name: '14-16',
    value: 100
  }, {
    name: '16-18',
    value: 100
  }, {
    name: '18-20',
    value: 100
  }, {
    name: '20-22',
    value: 100
  }, {
    name: '22-24',
    value: 100
  }
]

const chart = ref(null);
let myChart = null;

const initChart = () => {
  myChart = echarts.init(chart.value);
  const option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#6269fc', '#3ac1ff', '#ffcc40', '#ff5a5a', '#05c091', '#fad337', '#6e48ff'],
    legend: {
      show: true,
      height: 180,
      left: '42%',
      y: 'center',
      orient: 'vertical',
      align: 'left',
      itemGap: 15,
      itemWidth: 16,
      itemHeight: 12,
      textStyle: {
        fontSize: 14,
        rich: {
            name: {
                color: '#333',
                verticalAlign: 'right',
                align: 'left',
                fontSize: 14
            },
            value: {
                color: '#333',
                fontSize: 14
            },
            gray: {
                color: '#999',
                fontSize: 14
            }
        }
      },
      formatter: (name) => {
        if(data && data.length) {
          for (var i = 0; i < data.length; i++) {
            if(name === data[i].name) {
              return (
                  '{name|' + name +'}：' +
                  '{value|' + data[i].value +'}个'
              )
            }
          }
        }
      },
    },
    series: [
        {
            type: 'pie',
            radius: [0, '65%'],
            center: ['20%', '50%'],
            minAngle: 15,
            label: {
              show: false
            },
            data: data
        }
    ]
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
  window.addEventListener('resize', resizeChart);
});

onBeforeUnmount(() => {
  if (myChart) {
    echarts.dispose(myChart);
  }
  window.removeEventListener('resize', resizeChart);
});

// watch(() => props.data, initChart);
</script>

<style scoped>
/* Add any styles you need here */
</style>
