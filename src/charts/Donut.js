import React, {Component} from 'react';
import Chart from "react-apexcharts";


class Donut extends React.Component {
    constructor(props) {
        super(props);
            }



    render() {
        let vals = [];
        let labels = [];

        for (let [key, value] of Object.entries(this.props.data)) {
            console.log(key, value);
            vals.push(value);
            labels.push(key);

        }
        let chartData = {
            series: vals,
            options: {
                chart: {
                    width: 380,
                    type: 'donut',
                },
                labels: labels,
                dataLabels: {
                    enabled: true
                },
                fill: {
                    type: 'gradient',
                },
                legend: {
                    formatter: function(val, opts) {
                        return val + " - " + opts.w.globals.series[opts.seriesIndex]
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


        };
        return (
            <div className="donut">
                <Chart options={chartData.options}
                       series={chartData.series}
                       type="donut"
                       width="600" />
            </div>

        );
    }
}

export default Donut;
