export default {
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
    data: [],

  },
  grid: {
    top: '15%',
    left: '15%',
    bottom:'15%'
  },
  yAxis: {

  },
  series: [
    {
      name: '属性',
      type: 'bar',
      barWidth: '15%',
      data: [],
      itemStyle: {
        color: '#8DA6DE'
      }
    },
  ],
};
