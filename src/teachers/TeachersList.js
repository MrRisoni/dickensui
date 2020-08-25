import React, {Component} from 'react';
import Pagination from "../Pagination";
import SideBar from "../SideBar";
import axios from 'axios'

class TeachersList extends React.Component {
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
        axios.get('http://localhost:8080/api/teachers').then(rsp =>{
            self.setState({
                data: rsp.data.teachers,
                totalRecords: rsp.data.totalRecords,
                fetched:true
            })
        })
    }

    render() {
        console.log(this.state.data);

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
            }
        ]
        return (
            <section id="teachersList">
                {this.state.fetched &&
                    <Pagination columns={colNames} keyName="entityId" data={this.state.data}/>
                }
            </section>
        )
    }
}

export default TeachersList;
