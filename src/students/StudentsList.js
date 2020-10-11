import React, {Component} from 'react';
import Pagination from "../Pagination";
import SideBar from "../SideBar";
import axios from "axios";

class StudentsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages:0,
            totalRecords:0,
            data:[],
            fetched:false,
        }
    }

    componentDidMount() {
        const self = this;
        axios.get('https://dickenserp-api.herokuapp.com/api/students').then(rsp => {
            self.setState({
                data: rsp.data.students,
                totalRecords: rsp.data.totalRecords,
                fetched:true
            })
        })
    }

    render() {
        const colNames = [
            {
                id:0,
                title:'id'
            },
            {
                id:1,
                title:'Name'
            },
            {
                id:2,
                title:'Registration Date'
            },
            {
                id:3,
                title:'#Groups'
            },
            {
                id:4,
                title:'Payments'
            },
            {
                id:5,
                title:'Debts'
            },
            {
                id:6,
                title:'Last Payed'
            }
        ]
        return (
            <section id="studentsList">
                {this.state.fetched &&
                    <Pagination columns={colNames}
                                urlRef={"/student/info/"}
                                keyName="entityId"
                                data={this.state.data}/>
                }
            </section>
        )
    }
}

export default StudentsList;
