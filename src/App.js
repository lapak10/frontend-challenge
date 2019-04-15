import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router, } from "react-router-dom";

export default class AppRouter extends Component {
  render() {
    return (
      
      //Main component of our application which acts as the root component
      <Router>
        {/* Routes Component handles and manages all the other components which should come at what url */}
        <Routes />
      </Router>

    )
  }

}