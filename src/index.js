import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StudentsList from './students/StudentsList';
import TeachersList from './teachers/TeachersList';
import GroupsList from './groups/GroupsList';
import Analytics from './analytics/Analytics';
import DefaultLayout from './DefaultLayout';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import GroupDetails from "./groups/GroupDetails";
import StudentDetails from "./students/StudentDetails";
import Timetable from "./Timetable";
import CoursesList from "./CoursesList";

require('dotenv').config()


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <DefaultLayout exact path="/" component={() => <Timetable/>} />
          <DefaultLayout exact path="/courses" component={() => <CoursesList/>} />
          <DefaultLayout exact path="/students" component={() => <StudentsList/>} />
          <DefaultLayout exact path="/teachers" component={() => <TeachersList/>} />
          <DefaultLayout exact path="/groups" component={() => <GroupsList/>} />
          <DefaultLayout exact path="/analytics" component={() => <Analytics/>} />
          <DefaultLayout exact path="/group/info/:groupId" component={() => <GroupDetails/>} />
          <DefaultLayout exact path="/student/info/:studentId" component={() => <StudentDetails/>} />

      </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
