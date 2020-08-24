import React, {Component} from 'react';
import Pagination from "../Pagination";
import SideBar from "../SideBar";

class GroupsList extends React.Component {
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
                title:'title'
            },
            {
                id:2,
                title:'Speed'
            },
            {
                id:3,
                title:'Age'
            },
            {
                id:4,
                title:'Starts'
            },
            {
                id:5,
                title:'Ends'
            },
            {
                id:6,
                title:'Students'
            },
            {
                id:7,
                title:'Hours'
            },
            {
                id:8,
                title:'Payments'
            },
            {
                id:9,
                title:'Debts'
            }
        ]
        return (
            <section id="groupsList">
                <div className="d-flex" id="wrapper">
                    <SideBar/>
                    <Pagination columns={colNames}/>
                </div>
            </section>
        )
    }
}

export default GroupsList;
