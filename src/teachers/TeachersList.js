import React, {Component} from 'react';
import Pagination from "../Pagination";
import teachers_list from "../server_data/teachers_list.json";

class TeachersList extends React.Component {
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
        setTimeout( () => {
            self.setState({
                data: teachers_list.teachers,
                totalRecords: teachers_list.totalRecords,
                fetched: true
            })
        },3000);
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
                title: 'Name'
            },
            {
                id: 2,
                title: 'Registration Date'
            },
            {
                id: 3,
                title: '#Groups'
            },
            {
                id: 4,
                title: 'Payments'
            },
            {
                id: 5,
                title: 'Debts'
            }
        ]
        return (
            <section id="teachersList">
                {this.state.fetched &&
                <Pagination columns={colNames}
                            urlRef={"/teacher/info/"}
                            keyName="entityId" data={this.state.data}/>
                }
            </section>
        )
    }
}

export default TeachersList;
