import React, {Component} from 'react';
import axios from "axios";
import './Timetable.css';

class Timetable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            fetched: false,
        }
    }

    componentDidMount() {
        const self = this;
        axios.get('http://localhost:8080/api/timetable').then(rsp => {
            self.setState({
                data: rsp.data,
                fetched: true
            })
        })
    }

    render() {
        if (this.state.fetched) {
            return (<section id="timetableSection">

                <div className="container-fluid">
                    <div className="row flex-nowrap">
                        {this.state.data.days.map(dd => (
                            <div className="col-3">
                                <div className="course-div header"><p>{dd}</p></div>
                            </div>
                        ))}
                    </div>

                    {this.state.data.timetabling.map(hourlyData => (
                        <div className="row flex-nowrap">

                            {hourlyData.map(record => (
                                <div className="col-3 card-course">
                                    <div className="card card-block courseBlock"><p>{record}</p></div>
                                </div>
                            ))}
                        </div>
                    ))}

                </div>

            </section>)
        }
        else {
            return (<p>Wait...</p>)
        }
    }
}

export  default Timetable;
