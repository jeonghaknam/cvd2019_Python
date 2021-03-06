var myChart = echarts.init(document.getElementById('province'), null, {devicePixelRatio: 2.5});
        var option = {
                title : {
                    // text: '',
                    // subtext: '',
                    // x:''
                },
                tooltip : {
                    trigger: 'item',
                    formatter:function(params){
                        //定义一个res变量来保存最终返回的字符结果,并且先把地区名称放到里面
                        var res=params.name+'<br />';
                        //定义一个变量来保存series数据系列
                        var myseries=option.series;
                        //循环遍历series数据系列
                        for(var i=0;i<myseries.length;i++){
                            //在内部继续循环series[i],从data中判断：当地区名称等于params.name的时候就将当前数据和名称添加到res中供显示
                            for(var k=0;k<myseries[i].data.length;k++){
                                //console.log(myseries[i].data[k].name);
                                //如果data数据中的name和地区名称一样
                                if(myseries[i].data[k].name==params.name){
                                    //将series数据系列每一项中的name和数据系列中当前地区的数据添加到res中
                                    res+=myseries[i].name+'&nbsp;:&nbsp;'+myseries[i].data[k].value+'<br />';
                                }
                            }
                        }
                        return res;
                    }
                },
                legend: {
                    show: false,
                    orient: 'vertical',
                    x:'left',
                    data:this.legend,
                    selectedMode: false,
                    selected:{'Isolation':true, 'Total confirmed':false, 'Deaths':false,}
                },
                dataRange: {
                    show:false,
                    x: 'left',
                    y: 'bottom',
                    splitList: [
                        {start: 100000,},
                        {start: 10001,end: 100000},
                        {start: 1001,end: 10000},
                        {start: 501,end: 1000},
                        {start: 101,end: 500},
                        {start: 1,end: 100},
                    ],
                    color: ['#9a1f35', '#fe4365', '#fc9d9a', '#f9cda9', '#c8c8a9', '#83af9b']
                },

                roamController: {
                    show: false,
                    x: 'left',
                    mapTypeControl: {
                        'china': false
                    }
                },
                series : [
                    {
                        name: 'Isolation',
                        type: 'map',
                        mapType: 'korea',
                        // 控制地图大小
                        mapLocation: {
                            x: '240',
                            y: 'center',
                            height: '75%'
                        },
                        showLegendSymbol: false,
                        roam: 'false',
                        itemStyle:{
                            normal:{
                                label:{
                                    show:false,
                                    textStyle: {
                                       color: "rgb(249, 249, 249)"
                                    }
                                }
                            },
                            emphasis:{label:{show:false}}
                        },
                        data: province11,
                        nameMap:{
                        	'부산': 'Busan',
							'충북': 'Chungcheongbuk-do',
							'충남': 'Chungcheongnam-do',
							'대구': 'Daegu',
							'대전': 'Daejeon',
							'강원': 'Gangwon-do',
							'광주': 'Gwangju',
							'경기': 'Gyeonggi-do',
							'경북': 'Gyeongsangbuk-do',
							'경남': 'Gyeongsangnam-do',
							'인천': 'Incheon',
							'제주도': 'Jeju',
							'전북': 'Jeollabuk-do',
							'전남': 'Jeollanam-do',
							'세종': 'Sejong',
							'서울': 'Seoul',
							'울산': 'Ulsan',
                        },
                    },
                    {
                        name: 'Total confirmed',
                        type: 'map',
                        showLegendSymbol: false,
                        itemStyle:{
                            normal:{
                                label:{show:false,}},
                            emphasis:{label:{show:false}}
                    },
                        data: province22,
                    },
                    {
                        name: 'Deaths',
                        type: 'map',
                        showLegendSymbol: false,
                        itemStyle:{
                            normal:{
                                label:{show:false,}},
                            emphasis:{label:{show:false}}
                    },
                        data: province33,
                    }
                ]
            };
        myChart.setOption(option);