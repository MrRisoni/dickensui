import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StudentsList from './students/StudentsList';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Route path="/" component={App} exact />
          <Route path="/students" component={StudentsList} />
      </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
