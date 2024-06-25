(function () {
    'use strict';
    var myChart = echarts.init(document.getElementById('left-mid-nong'));

    // 指定图表的配置项和数据
    var option = {
        tooltip: {},
        legend: [{
                // 设置布局方向
                orient: 'vertical',
                // 文字和图形对齐方式
                align: 'left',
                right: '25%',
                top: '10%',
                // 图形形状
                icon: 'circle',
                padding: [20, 0, 0, 0],
                itemGap: 20,
                textStyle: {
                    borderRadius: 100,
                    color:'#fff'
                },
                data: ["鲤鱼", "青鱼", "草鱼", "鲢鱼", "鳙鱼"]
            },
            {
                orient: 'vertical',
                right: '6%',
                top: '10%',
                padding: [20, 0, 0, 0],
                itemGap: 20,
                // 文字和图形对齐方式
                align: 'left',
                // 图形形状
                icon: 'circle',
                textStyle: {
                    borderRadius: 100,
                    color:'#fff'
                },
                data: []
            }
        ],
        series: [{
            name: '数量',
            type: 'pie',
            radius: '50%',
            right: '40%',
            bottom:'10%',
            data: [{
                    value: '634',
                    name: '鲤鱼'
                },
                {
                    value: 735,
                    name: '鳙鱼'
                },
                {
                    value: 510,
                    name: '青鱼'
                },
                {
                    value: 1548,
                    name: '鲢鱼'
                },
                {
                    value: 535,
                    name: '草鱼'
                }
            ]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    })

    
})()