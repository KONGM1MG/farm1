(function () {
    'use strict';
    var myChart = echarts.init(document.getElementById('left-header-nong'));


    var option = {
        title: {
            textStyle: {
                color: '#2b8fff',
                fontSize: 14,
                fontWeight: 'bold'
            }
        },
        tooltip: {},
        legend: {
            show: false
        },
        xAxis: {
            data: ["电池电压", "盐度", "溶解氧", "浊度", "pH", "水温"],
            axisLabel: {
                // X 轴标签
                rotate: 40,
                fontSize: 10
            },
            // 坐标轴线相关设置设置
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            }

        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            }
        },
        series: [{
                name: '浅蓝',
                type: 'bar',
                data: [25.90, 0, 8.37,34.16, 2.05, 15],
                itemStyle: {
                    color: '#52d2ff'
                },
                barWidth: 10,
                label: {
                    show: true,
                    position: 'top',
                    fontSize: 10,
                    color: '#52d2ff'
                }
            },
            {
                name: '深蓝',
                type: 'bar',
                data: [],
                itemStyle: {
                    color: '#1763ff'
                },
                barWidth: 10,
                label: {
                    show: true,
                    position: 'top',
                    fontSize: 10,
                    color: '#1763ff'
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    })
    // 屏幕适配
})()