import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }


  render() {
    return (
      <MDBNavbar className="blue-gradient" dark expand="md">
        <MDBNavbarNav left>

          <MDBNavItem>
            <MDBNavLink to="/"><i style={{ display: this.props.page === 'season' ? '' : 'none' }} class="fas fa-chevron-left"></i>
              <MDBNavbarBrand>
                <strong className="white-text">{this.props.page === 'season' ? `Races of ${this.props.year}` : 'FinCompare ScoreBoard'}</strong>
              </MDBNavbarBrand></MDBNavLink>
          </MDBNavItem>

        </MDBNavbarNav>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>


        </MDBCollapse>

      </MDBNavbar>
    );
  }
}