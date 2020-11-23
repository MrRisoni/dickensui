import React, {Component} from 'react';
import Donut from "../charts/Donut";
import pie_data from "../server_data/analytics_pie.json";

class Analytics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pieData: {
                profit: 0,
                grossIncome: 0,
                netIncome: 0,
                studentPayments: 0,
                totalExpenses: 0,
                taxes: 0,
                staffPayments: 0,
                staffInsurances: 0,
                staffNetPayments: 0,
                studentDebts: 0,
                staffInDebt: 0,
            },
            fetched: false,
        }
    }

    componentDidMount() {
        const self = this;
        setTimeout( () => {

            self.setState({
                pieData: {
                    profit: pie_data[0].profit,
                    grossIncome: pie_data[0].grossIncome,
                    netIncome: pie_data[0].netIncome,
                    studentPayments: pie_data[0].studentPayments,
                    totalExpenses: pie_data[0].totalExpenses,
                    taxes: pie_data[0].taxes,
                    staffPayments: pie_data[0].staffPayments,
                    staffInsurances: pie_data[0].staffInsurances,
                    staffNetPayments: pie_data[0].staffNetPayments,
                    studentDebts: pie_data[0].studentDebts,
                    staffInDebt: pie_data[0].staffInDebt,
                },
                fetched: true
            })
        },3000);
    }


    render() {
        if (this.state.fetched) {
            return (
              <Donut data={this.state.pieData}/>
            )
        } else {
            return (<p>Wait...</p>)
        }
    }
}

export default Analytics;
