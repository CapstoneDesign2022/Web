import ApexCharts from "react-apexcharts";
import React, { Component } from "react";
import BTC from '../dataFiles/BTC_data.json';

export default class Charts extends Component {
    constructor(props){
        super(props);

        const BTC_date = []
        const BTC_MAL = []
        const BTC_HL = []
        const BTC_LL = []

        for(var i = 0; i < BTC.length; i++){
            BTC_date.push(BTC[i].Datetime);
            BTC_MAL.push(BTC[i].KimchiMAL);
            BTC_HL.push(BTC[i].HighLimit);
            BTC_LL.push(BTC[i].LowLimit);
        }

        // 배열만들기 진행할 것
        
        this.state = {
            series : [{
                name : "이동평균선",
                data : BTC_MAL
            },
            {
                name : "불린저밴드 상한값",
                data : BTC_HL
            },
            {
                name : "불린저밴드 하한값",
                data : BTC_LL
            }],

            options : {
                chart : {
                    zoom : {
                        enabled : false
                    }
                },
                dataLabels : {
                    enabled : false
                },
                stroke : {
                    curve : 'straight'
                },
                title : {
                    text : "Example Chart Data",
                    align : 'center'
                },
                grid : {
                    row : {
                        colors : ['#f3f3f3', 'transparent'],
                        opacity : 0.5
                    },
                },
                xaxis : {
                    categories : BTC_date,
                },
                theme: {
                    mode: 'dark',
                    palette: 'palette2'
                },
            }
        }
    }

    render() {
        return(
            <ApexCharts
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="85%"
                height={500}
                align="center"
            />
        );
    }
}
