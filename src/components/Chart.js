import ApexCharts from "react-apexcharts";
import React, { Component } from "react";

export default class Charts extends Component {
    constructor(props){
        super(props);

        this.state = {
            series : [{
                name : "Data1",
                data : [10, 41, 35, 51, 49, 62, 69, 91, 148]
            },
            {
                name : "Data2",
                data : [1, 4, 15, 41, 69, 32, 39, 31, 48]
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
                    categories : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
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
