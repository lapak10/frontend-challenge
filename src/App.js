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

      <Router>
        <Routes />
      </Router>

    )
  }

}