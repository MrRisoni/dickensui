import React, {Component} from 'react';
import Pagination from "../Pagination";
import SideBar from "../SideBar";
import axios from "axios";

class GroupsList extends React.Component {
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
        axios.get('https://dickenserp-api.herokuapp.com/api/groups').then(rsp => {
            self.setState({
                data: rsp.data.groups,
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
                title:'Wage'
            },
            {
                id:5,
                title:'Fee'
            },
            {
                id:6,
                title:'Starts'
            },
            {
                id:7,
                title:'Ends'
            },
            {
                id:8,
                title:'Students'
            },
            {
                id:9,
                title:'Hours'
            },
            {
                id:10,
                title:'Payments Teacher'
            },
            {
                id:11,
                title:'Payments Students'
            },
            {
                id:12,
                title:'Debts Teacher'
            },
            {
                id:13,
                title:'Debts Students'
            }
        ]
        return (
            <section id="groupsList">
                {this.state.fetched &&
                    <Pagination columns={colNames}
                                urlRef={"/group/info/"}
                                keyName="id"
                                data={this.state.data}/>
                }
            </section>
        )
    }
}

export default GroupsList;
