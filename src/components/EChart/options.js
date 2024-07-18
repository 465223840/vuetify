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
    axisLabel: {
      padding: [0, 0, 0, 0],
      rotate: -30 // X轴标签倾斜 45 度
    }
  },
  grid: {
    top: '5%',
    left: '5%',
    bottom:'6%'
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
