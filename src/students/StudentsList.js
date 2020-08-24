import React, {Component} from 'react';
import Pagination from "../Pagination";
import SideBar from "../SideBar";

class StudentsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
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
                <div className="d-flex" id="wrapper">
                    <SideBar/>
                    <Pagination columns={colNames}/>
                </div>
            </section>
        )
    }
}

export default StudentsList;
