<template>
  <div ref="chart" :style="{ width: '100%', height: '100%' }"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import * as echarts from 'echarts';
import 'echarts-wordcloud';

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

const chart = ref(null);
let myChart = null;

const demoData = [
  {
      "name": "花鸟市场",
      "value": 1446
  },
    {
        "name": "汽车",
        "value": 928
    },
    {
        "name": "视频",
        "value": 906
    },
    {
        "name": "电视",
        "value": 825
    },
    {
        "name": "Lover Boy 88",
        "value": 514
    },
    {
        "name": "动漫",
        "value": 486
    },
    {
        "name": "音乐",
        "value": 53
    },
    {
        "name": "直播",
        "value": 163
    },
    {
        "name": "广播电台",
        "value": 86
    },
    {
        "name": "戏曲曲艺",
        "value": 17
    },
    {
        "name": "演出票务",
        "value": 6
    },
    {
        "name": "给陌生的你听",
        "value": 1
    },
    {
        "name": "资讯",
        "value": 1437
    },
    {
        "name": "商业财经",
        "value": 422
    }
]

const wordCloudColor = ['#fd1f4f', '#f560af', '#ff9ce5', '#8d62fc', '#c0a8ff']

const initChart = () => {
  myChart = echarts.init(chart.value);
  const option = {
    tooltip: {
        show: false
    },
    grid: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    series: [{
        type: 'wordCloud',
        gridSize: 20,
        sizeRange: [12, 22],
        rotationRange: [0, 0],
        textStyle: {
            normal: {
                color: function() {
                  return wordCloudColor[Math.round(Math.random() * 5)]
                }
                // color: function() {
                //     return 'rgb(' +
                //             Math.round(Math.random() * 255) +
                //             ', ' + Math.round(Math.random() * 255) +
                //             ', ' + Math.round(Math.random() * 255) + ')'
                // }
            }
        },
        layoutAnimation: true,
        left: 'center',
        top: 'center',
        width: '100%',
        height: '100%',
        right: null,
        bottom: null,
        // width: 300,
        // height: 200,
        // top: 20,
        data: demoData
    }]
  };
  myChart.setOption(option);
  myChart.off('click');
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

<style lang="scss" scoped></style>
