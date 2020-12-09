import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import AppMantels from './AppMantels';
import AppBars from './AppBars';
import AppDoors from './AppDoors';
import AppMisc from './AppMisc';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppMantels />
    <AppBars />
    <AppDoors />
    <AppMisc />
  </React.StrictMode>,
  document.getElementById('root')
);

const rootElement = document.getElementById("root");
    ReactDOM.render(
      <Router>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/AppMantels" component={AppMantels} />
        <Route path="/AppBars" component={AppBars} />
        <Route path="/AppDoors" component={AppDoors} />
        <Route path="/AppMisc" component={AppMisc} />
      </Switch>
      </Router>,
      rootElement
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
