import React, {Component} from 'react';
import SideBar from "../SideBar";
import axios from "axios";
import Donut from "../charts/Donut";
import GroupsList from "../groups/GroupsList";

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
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/revenue/pie`).then(rsp => {
            self.setState({
                pieData: {
                    profit: rsp.data[0].profit,
                    grossIncome: rsp.data[0].grossIncome,
                    netIncome: rsp.data[0].netIncome,
                    studentPayments: rsp.data[0].studentPayments,
                    totalExpenses: rsp.data[0].totalExpenses,
                    taxes: rsp.data[0].taxes,
                    staffPayments: rsp.data[0].staffPayments,
                    staffInsurances: rsp.data[0].staffInsurances,
                    staffNetPayments: rsp.data[0].staffNetPayments,
                    studentDebts: rsp.data[0].studentDebts,
                    staffInDebt: rsp.data[0].staffInDebt,
                },
                fetched: true
            })
        })
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
