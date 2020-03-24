$(function() {
  var myChart = echarts.init($('.b2').get(0));
  var container = $('.b1');
  //表格
  var hot = new Handsontable(container.get(0), {
      data: [
          ['Java', '1', '降', '-0.01%'],
          ['C', '2', '升', '+2.44%'],
          ['Python', '3', '升', '+1.41%'],
          ['C++', '4', '降',  '-2.58%'],
          ['C#', '5', '升',  '+2.07%'],
          ['Visual Basic .Net', '6', '降', '-1.17%'],
          ['JavaScript', '7', '降', '-0.85%']
        ],
      contextMenu: true,          // 启用快捷菜单
      manualRowResize : true,     // 允许行拖动  
      manualColumnResize : true,  // 允许列拖动 
      rowHeaders: false,
      colWidths:200,
      colHeaders: [
          '语言名称',
          '排名',
          '升或降',
          '变化幅度'
        ]
    });
  //java语言变化图
  var option = {
    title: {
      text: 'JavaScript语言排名变化'
    },
    tooltip: {},
    legend: {
      data:['信息量']
    },
    xAxis: {
      data: [2000,2005,2010,2015,2020]
    },
    yAxis: {},
    series: [{
      name: '信息量',
      type: 'line',
      smooth: 'true',
      data:[6,9,8,8,7]
    }]
  };

  myChart.setOption(option);
  return hot;
});
