import React, {Component} from 'react';
import student_info from "./../../server_data/student_info.json";

class StudentDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            details: {},
            fetched: false,
        }
    }

    componentDidMount() {
        console.log(this.props);
        const self = this;
        setTimeout( () => {
            self.setState({
                data: student_info,
                fetched: true
            })
        },3000);
    }

    render() {
        if (this.state.fetched) {
            return (<section className="studentSection">
                <div className="row">
                    <div className="col-9">

                        <table className="table  table-bordered">
                            <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{this.state.data.fullName}</td>
                                <td>Address</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td></td>
                                <td>Email</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>#Groups</td>
                                <td>{this.state.data.groups.length}</td>
                                <td>Last payed</td>
                                <td>{this.state.data.lastPayed}</td>
                            </tr>
                            <tr>
                                <td>Total Payed</td>
                                <td>{this.state.data.totalPayed}</td>
                                <td>Remaining Debt</td>
                                <td>{this.state.data.remainDebt}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                Groups
                <div className="row">
                    <div className="col-9">
                        <table className="table table-bordered table-stripped">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Group</th>
                                    <th>Joined</th>
                                    <th>Dropped</th>
                                    <th>Payed</th>
                                    <th>Debts</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.groups.map(grp => (
                                    <tr>
                                        <td>{grp.groupId}</td>
                                        <td>{grp.courseName}</td>
                                        <td>{grp.joined}</td>
                                        <td>{grp.dropped}</td>
                                        <td>{grp.totalPayed}</td>
                                        <td>{grp.totalDebt}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                Payments and Debts
                <div className="row">
                    <div className="col-5">
                        <table className="table table-bordered table-stripped">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Group</th>
                                    <th>Payed</th>
                                    <th>period</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.data.payments.map(pay => (
                                <tr>
                                    <td>{pay.entityId}</td>
                                    <td>{pay.courseName}</td>
                                    <td>{pay.amount}</td>
                                    <td>{pay.monthTitle} {pay.year}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="col-5">
                        <table className="table table-bordered table-stripped">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Group</th>
                                    <th>Debts</th>
                                    <th>period</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.data.debts.map(dbt => (
                                <tr>
                                    <td>{dbt.entityId}</td>
                                    <td>{dbt.courseName}</td>
                                    <td>{dbt.amount}</td>
                                    <td>{dbt.monthTitle} {dbt.year}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>



            </section>);
        } else {
            return (<p>Wait...</p>)
        }
    }
}

export default StudentDetails;
