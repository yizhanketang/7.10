// 基于准备好的dom，初始化echarts实例

var main = document.getElementById('main')

var myChart = echarts.init(main);

// 指定图表的配置项和数据
var option = {
  title: {
    text: 'ECharts 新手上路',
    textStyle: {
      color: 'red'
    }
  },
  tooltip: {},
  legend: {
    data:['销量1']
  },
  xAxis: {
    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  },
  yAxis: {},
  series: [{
    name: '销量1',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

