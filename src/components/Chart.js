import ApexCharts from "react-apexcharts";
import React, { Component } from "react";
import date_prem from '../dataFiles/BTC/date_prem.json';

export default class Charts extends Component {
    
    constructor(props){
        super(props);

        var Data = date_prem.map(function(element){
            var obj = []
            obj[element.Datetime] = element.Premium;
            console.log(obj);
            return obj
        });

        console.log(Data);

        this.state = {
            series : [{
                data: Data
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
                    type: 'datetime'
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
