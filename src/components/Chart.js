import ApexCharts from "react-apexcharts";
import React, { Component } from "react";
import date_prem from '../dataFiles/BTC/date_prem.json';

export default class Charts extends Component {
    
    constructor(props){
        super(props);

        var Data = date_prem.map(function(element){
            var obj = []
            obj.push(element.Datetime);
            obj.push(element.Premium);
            console.log(obj);
            return obj;
        });

        console.log(Data)
        this.state = {
            series : [{
                data: Data
            }],

            options : {
                chart : {
                    type: 'area',
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
                stroke: {
                    colors: '#FF0000',
                },
                dataLabels : {
                    enabled : false
                },
                markers : {
                    size: 0,
                },
                title : {
                    text : "BTC 김프값 Chart Data",
                    align : 'center'
                },
                yaxis:{
                    labels: {
                        formatter: function(val){
                            return(val / 1000000).toFixed(0);
                        },
                    title: 'Price'
                    },
                },
                xaxis : {
                    type: 'datetime'
                },
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val){
                            return(val  / 1000000).toFixed(0)
                        },
                    },
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
                align="center"
            />
        );
    }
}
