import React from 'react';
import './SideBar.css';

function SideBar() {
    return (
        <div className="bg-dark border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Dickens</div>
            <div className="list-group list-group-flush">
                <a href="/" className="list-group-item list-group-item-action ">Dashboard</a>
                <a href="/" className="list-group-item list-group-item-action ">Timetable</a>
                <li className="list-group-item list-group-item-action">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarCoursesDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Courses
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarCoursesDropdown">
                        <a className="dropdown-item" href="/courses">Courses List</a>
                    </div>
                </li>
                <li className="list-group-item list-group-item-action">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarStudentsDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Students
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarStudentsDropdown">
                        <a className="dropdown-item" href="#">New Student</a>
                        <a className="dropdown-item" href="/students">Students List</a>
                    </div>
                </li>
                <li className="list-group-item list-group-item-action">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarTeachersDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Teachers
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarTeachersDropdown">
                        <a className="dropdown-item" href="#">New Teacher</a>
                        <a className="dropdown-item" href="/teachers">Teachers List</a>
                    </div>
                </li>
                <li className="list-group-item list-group-item-action">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Groups
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">New Group</a>
                        <a className="dropdown-item" href="/groups">Groups List</a>
                    </div>
                </li>
                <a href="/analytics" className="list-group-item list-group-item-action ">Analytics</a>
            </div>
        </div>
    );
}

export default SideBar;
