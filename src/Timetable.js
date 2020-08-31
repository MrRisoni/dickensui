import React, {Component} from 'react';
import axios from "axios";
import TimeTabling from "./timetabling/TimeTabling";

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
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/timetable`).then(rsp => {
            self.setState({
                data: rsp.data,
                fetched: true
            })
        })
    }

    render() {
        if (this.state.fetched) {
            return (<section id="timetableSection">
                    <TimeTabling days={this.state.data.days} timetabling={this.state.data.timetabling} />
            </section>)
        }
        else {
            return (<p>Wait...</p>)
        }
    }
}

export  default Timetable;
