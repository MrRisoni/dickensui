import React, {Component} from 'react';
import SideBar from "../SideBar";
import axios from "axios";
import Donut from "../charts/Donut";
import GroupsList from "../groups/GroupsList";

class Analytics extends React.Component {

    render() {

        return (
                <div className="d-flex" id="wrapper">
                    <SideBar/>
                  <Donut/>
                </div>

        )
    }
}

export default Analytics;
