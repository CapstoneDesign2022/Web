import ApexCharts from "react-apexcharts";
import React, { Component } from "react";
import BTC_data from '../dataFiles/BTC/BTC_final.json';
//import BTC_meet from '../dataFiles/BTC/BTC_meet.json'
export default class Charts extends Component {
    
    constructor(props){
        super(props);

        var date_prem = BTC_data.map(function(element){
            var obj = []
            obj.push(element.Datetime);
            obj.push(element.KimchiPremium);
            return obj;
        });

        var date_MAL = BTC_data.map(function(element){
            var obj1 = []
            obj1.push(element.Datetime);
            obj1.push(element.KimchiMAL);
            return obj1;
        });

        var date_HL = BTC_data.map(function(element){
            var obj2 = []
            obj2.push(element.Datetime);
            obj2.push(element.HighLimit);
            return obj2;
        });

        var date_LL = BTC_data.map(function(element){
            var obj3 = []
            obj3.push(element.Datetime);
            obj3.push(element.LowLimit);
            return obj3;
        });
/*
        var meet_point = BTC_meet.map(function(element){
            var obj4 = []
            obj4.push(element.Datetime);
            obj4.push(element.MeetPoint);
            return obj4;
        });
*/
        this.state = {
            series : [{
                name: 'Premium 값',
                type: 'line',
                data: date_prem,
            },{
                name: '이동평균선',
                type: 'line',
                data: date_MAL
            },{
                name: '블린저밴드 상한선',
                type: 'line',
                data: date_HL
            },{
                name: '블린저밴드 하한선',
                type: 'line',
                data: date_LL
            }],
            stroke : {
                curve: 'smooth',
            },
            options : {
                colors: ['#FBBA22', '#E95968', '#9BA9FF','#7C7EE4'],

                chart : {
                    foreColor: '#CFDDE6',
                    stacked: false,
                    height: 300,
                    zoom : {
                        type: 'x',
                        enabled : true,
                        autoScaleYaxis: true
                    },
                    background: 'transparent'
                },
                dataLabels : {
                    enabled : false
                },
                title : {
                    text : "재정거래 Chart Data",
                    align : 'center'
                },
                markers:{
                    size: 0
                },
                xaxis : {
                    type: 'datetime',
                    lables:{
                        format: 'yyyy/MM/dd HH:mm'
                    }
                },
                yaxis : {
                    showAlways: true,
                }
            },
        }
    }

    render() {
        return(
            <ApexCharts
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="85%"
                align="center"
            />
        );
    }
}
