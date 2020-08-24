import React from 'react';
import './SideBar.css';

function SideBar() {
    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Dickens </div>
            <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Timetable</a>
                <li className="list-group-item list-group-item-action bg-light">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarStudentsDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Students
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarStudentsDropdown">
                        <a className="dropdown-item" href="#">New Student</a>
                        <a className="dropdown-item" href="/students">Students List</a>
                        <a className="dropdown-item" href="#">Search</a>
                    </div>
                </li>
                <li className="list-group-item list-group-item-action bg-light">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarTeachersDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Teachers
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarTeachersDropdown">
                        <a className="dropdown-item" href="#">New Teacher</a>
                        <a className="dropdown-item" href="/teachers">Teachers List</a>
                        <a className="dropdown-item" href="#">Search</a>
                    </div>
                </li> <li className="list-group-item list-group-item-action bg-light">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Groups
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">New Group</a>
                    <a className="dropdown-item" href="/groups">Groups List</a>
                </div>
            </li>
                <a href="#" className="list-group-item list-group-item-action bg-light">Analytics</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Users</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Staff</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">My Account</a>


            </div>
        </div>
    );
}

export default SideBar;
