import React, {Component} from 'react';
import axios from "axios";

class GroupDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            details: {},
            fetched: false,
        }
    }

    componentDidMount() {
        const self = this;
        axios.get('http://localhost:8080/api/group/info/2').then(rsp => {
            self.setState({
                data: rsp.data,
                fetched: true
            })
        })
    }


    render() {
        if (this.state.fetched) {
            return (<section className="groupSection">
                    <h2>{this.state.data.course}</h2>


                    <div className="row">
                        <div className="col-12">

                            <table className="table table-striped table-bordered">
                                <tbody>
                                <tr>
                                    <td>Started</td>
                                    <td>{this.state.data.createdAt}</td>
                                    <td>Student Debt</td>
                                    <td>{this.state.data.sumStudentDebts}</td>
                                </tr>
                                <tr>
                                    <td>Members</td>
                                    <td>{this.state.data.totalMembers}</td>
                                    <td>Student Payments</td>
                                    <td>{this.state.data.sumStudentPayments}</td>
                                </tr>
                                <tr>
                                    <td>Speed</td>
                                    <td>{this.state.data.speed}</td>
                                    <td>Teacher Debt</td>
                                    <td>{this.state.data.sumTeacherDebts}</td>
                                </tr>
                                <tr>
                                    <td>Hours</td>
                                    <td>{this.state.data.sumHours}</td>
                                    <td>Teacher Payements</td>
                                    <td>{this.state.data.sumTeacherPayments}</td>
                                </tr>
                                <tr>
                                    <td>Wage</td>
                                    <td>{this.state.data.wage}</td>
                                    <td>Fee</td>
                                    <td>{this.state.data.fee}</td>
                                </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>

                    {this.state.data.seminarModules.length >0 &&
                        <div className="row">
                            <div className="col-8">
                                <div className="alert alert-primary  alert-height" role="alert">
                                    <h5>Seminar Modules</h5>
                                </div>

                                <table className="table table-sm  table-striped table-bordered">
                                    <thead>
                                    <th>Id</th>
                                    <th>Name</th>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }

                <div className="row">
                    <div className="col-5">


                        <div className="alert alert-danger  alert-height" role="alert">
                            <h5>Teacher Debts</h5>
                        </div>

                        <table className="table table-sm  table-striped table-bordered">
                            <thead>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Month</th>
                                <th>Amount</th>
                            </thead>
                            <tbody>
                                {this.state.data.teacherDebts.map(tch => (
                                    <tr>
                                        <td>{tch.entityId}</td>
                                        <td>{tch.fullName}</td>
                                        <td>{tch.monthTitle} {tch.year}</td>
                                        <td>{tch.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="col-5">

                        <div className="alert alert-danger  alert-height" role="alert">
                            <h5>Student Debts</h5>
                        </div>
                        <table className="table table-sm  table-striped table-bordered">
                            <thead>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Month</th>
                                <th>Amount</th>
                            </thead>
                            <tbody>
                                {this.state.data.studentsDebts.map(std => (
                                     <tr>
                                        <td>{std.entityId}</td>
                                        <td>{std.fullName}</td>
                                        <td>{std.monthTitle} {std.year}</td>
                                        <td>{std.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>

                <h5>Students list</h5>

                <div className="row">
                    <div className="col-10">
                        <table className="table table-sm table-striped table-bordered table-hover">
                            <thead>
                            <th>id</th>
                            <th>Name</th>
                            <th>Joined</th>
                            <th>Dropped</th>
                            <th>Payed</th>
                            <th>Debt</th>
                            </thead>
                            <tbody>
                            {this.state.data.studentsList.map(std => (
                                <tr>
                                    <td>{std.studentId}</td>
                                    <td>{std.fullName}</td>
                                    <td>{std.joined}</td>
                                    <td>{std.dropped}</td>
                                    <td>{std.sumPayed}</td>
                                    <td>{std.sumOwns}</td>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <h5>Courses History</h5>
                <div className="row">
                    <div className="col-10">
                        <table className="table table-sm table-striped table-bordered table-hover">
                            <thead>
                            <th>Started</th>
                            <th>Duration</th>
                            <th>Room</th>
                            <th>Fee</th>
                            <th>Wage</th>
                            </thead>
                            <tbody>
                            {this.state.data.history.map(hist => (
                                <tr>
                                    <td>{hist.started}</td>
                                    <td>{hist.duration}</td>
                                    <td>{hist.roomName}</td>
                                    <td>{hist.fee}</td>
                                    <td>{hist.wage}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                </section>
            )
        } else {
            return (<p>Wait...</p>)
        }
    }
}

export default GroupDetails
