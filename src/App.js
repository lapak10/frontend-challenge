import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./Routes";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MDBBtn,MDBNav,MDBRow,MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBNavbar,MDBListGroupItem,MDBListGroup, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle,MDBFormInline,MDBFooter, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

  export default class AppRouter extends Component {
    render(){
      return (
        
        <Router>
          <Routes />
         </Router>
        
      )
    }
    
  }