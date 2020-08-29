import React, {Component} from 'react';
import Pagination from "../Pagination";
import axios from "axios";

class GroupDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages:0,
            totalRecords:0,
            data:[],
            fetched:false,
        }
    }
    render()
    {
        return (<p>foo</p>)
    }
}

export default GroupDetails
