import React from 'react';
import ReactDOM from 'react-dom';
import './css/teamList.css';
import './css/CreateTeam.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
