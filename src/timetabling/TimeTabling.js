import React, {Component} from 'react';
import './timetabling.css';

class TimeTabling extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<section id="timetableSection">

            <div className="container-fluid">
                <div className="row flex-nowrap">
                    {this.props.days.map(dd => (
                        <div className="col-3">
                            <div className="course-div header"><p>{dd}</p></div>
                        </div>
                    ))}
                </div>

                {this.props.timetabling.map(hourlyData => (
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
}

export default TimeTabling;
