import React, {Component} from 'react';
import Pagination from "../Pagination";
import SideBar from "../SideBar";
import students_list from "./../../server_data/students_list.json";


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
        setTimeout( () => {
            self.setState({
                data: students_list.students,
                totalRecords: students_list.totalRecords,
                fetched:true
            })
        },3000);
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
