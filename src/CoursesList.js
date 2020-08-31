import React, {Component} from 'react';
import Pagination from "./Pagination";
import axios from 'axios'

class CoursesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: 0,
            totalRecords: 0,
            data: [],
            fetched: false,
        }
    }


    componentDidMount() {
        const self = this;
        console.log(process.env)
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/courses`)
            .then((responseObj) => {
                let courses = responseObj.data.map(crs => {
                    return {
                        id: crs.id,
                        title: crs.title,
                        type: crs['courseTypeObj']['title'],
                        fee:crs.latestFee,
                        wage:crs.latestWage,
                        numGroups: crs.numGroups,
                        numStudents: crs.numStudents,
                        numTeachers: crs.numTeachers,
                        sumPayments: crs.sumPayments,
                        sumHours: crs.sumHours
                    }
                })
                self.setState({
                    data: courses,
                    totalRecords: responseObj.data.length,
                    fetched: true
                })
            })
    }

    render() {
        console.log(this.state.data);

        const colNames = [
            {
                id: 0,
                title: 'id'
            },
            {
                id: 1,
                title: 'Title'
            },
            {
                id: 2,
                title: 'Type'
            },
            {
                id: 3,
                title: 'Fee'
            },
            {
                id: 4,
                title: 'Wage'
            },
            {
                id: 5,
                title: '#Groups'
            },
            {
                id: 6,
                title: '#Students'
            },
            {
                id: 7,
                title: '#Teachers'
            },
            {
                id: 8,
                title: 'Sum payments'
            },
            {
                id: 9,
                title: '#Hours'
            }
        ]
        return (
            <section id="coursesList">
                {this.state.fetched &&
                <Pagination columns={colNames}
                            urlRef={"/course/info/"}
                            keyName="id" data={this.state.data}/>
                }
            </section>
        )
    }
}

export default CoursesList;
