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
    top: '10%',
    left: '5%',
    bottom:'10%'
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: '属性',
      type: 'bar',
      barWidth: '50%',
      data: [],
    },
  ],
};
