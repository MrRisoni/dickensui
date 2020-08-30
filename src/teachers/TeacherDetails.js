import React, {Component} from 'react';
import axios from "axios";

class TeacherDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            details: {},
            fetched: false,
        }
    }

    componentDidMount() {
        const self = this;
        axios.get('http://localhost:8080/api/student/info/2').then(rsp => {
            self.setState({
                data: rsp.data,
                fetched: true
            })
        })
    }

    render() {
        if (this.state.fetched) {
            return (<section className="teachersSection">


            </section>)
        } else {
            return(<p>Please wait</p>)
        }
    }
}

export default TeacherDetails;
