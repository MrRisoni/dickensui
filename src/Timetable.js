import React, {Component} from 'react';
import TimeTabling from "./timetabling/TimeTabling";
import timetable_data from "./server_data/timetable.json";


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
        setTimeout( () => {
            self.setState({
                data: timetable_data,
                fetched: true
            });
        },3000);
       
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
