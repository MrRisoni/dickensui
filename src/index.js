import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StudentsList from './students/StudentsList';
import TeachersList from './teachers/TeachersList';
import GroupsList from './groups/GroupsList';
import Analytics from './analytics/Analytics';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Route path="/" component={App} exact />
          <Route path="/students" component={StudentsList} />
          <Route path="/teachers" component={TeachersList} />
          <Route path="/groups" component={GroupsList} />
          <Route path="/analytics" component={Analytics} />

      </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
