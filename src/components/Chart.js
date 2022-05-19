import ApexCharts from "react-apexcharts";
import React, { Component } from "react";
import ETH_data from '../dataFiles/BTC/ETH_data.json';

export default class Charts extends Component {
    
    constructor(props){
        super(props);

        var date_prem = ETH_data.map(function(element){
            var obj = []
            obj.push(element.Datetime);
            obj.push(element.KimchiPremium);
            return obj;
        });

        var date_MAL = ETH_data.map(function(element){
            var obj1 = []
            obj1.push(element.Datetime);
            obj1.push(element.KimchiMAL);
            return obj1;
        });

        var date_HL = ETH_data.map(function(element){
            var obj2 = []
            obj2.push(element.Datetime);
            obj2.push(element.HighLimit);
            return obj2;
        });

        var date_LL = ETH_data.map(function(element){
            var obj3 = []
            obj3.push(element.Datetime);
            obj3.push(element.LowLimit);
            return obj3;
        });

        this.state = {
            series : [{
                name: 'Premium 값',
                type: 'line',
                data: date_prem
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
                curve: 'smooth'
            },
            options : {
                colors: ['#FF5A6A', '#FFBA1F', '#99AAFF','#667FFF'],

                chart : {
                    foreColor: '#CFDDE6',
                    stacked: false,
                    height: 300,
                    zoom : {
                        type: 'x',
                        enabled : true,
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        autoSelected: 'zoom'
                    }
                },
                dataLabels : {
                    enabled : false
                },
                markers : {
                    size: 0
                },
                title : {
                    text : "BTC 김프값 Chart Data",
                    align : 'center'
                },
                xaxis : {
                    type: 'datetime'
                },
                yaxis : {
                    showAlways: true,
                },
                tooltip: {
                    x: {
                        format: 'yyyy/MM/dd/HH:mm'
                    }
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
