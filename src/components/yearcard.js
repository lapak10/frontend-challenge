import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { MDBCard, MDBCardTitle, MDBCardText,MDBCardImage,MDBBtn,MDBCardBody } from 'mdbreact'

export default class YearCard extends Component {
    constructor(props) 
      { 
          super(props); 
      } 
    render() { return (
        <Link to={`/season/${this.props.year}/champion/${this.props.winnerid}`}  >
        {/* <MDBCard>
        <MDBCardImage className="img-fluid" src="https://www.countryflags.io/au/flat/64.png" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard> */}
      <MDBCard news className="hoverable" style={{ marginTop: "1rem" }}>
      <MDBCardBody>
        <MDBCardTitle className="text-center blue-grey-text" style={{fontSize:'17px'}}>{ this.props.year }</MDBCardTitle>
        <MDBCardText className="text-center light-blue-text font-weight-bold justify-content-around" style={{fontSize:'19px'}}>
         {this.props.driver.familyName} {this.props.driver.givenName}
        </MDBCardText>
        <div className="d-flex flex-row justify-content-around">
        <div className="p-2 orange-text"><i class="fas fa-award" ></i> {this.props.won}</div>
     
      <div className="p-2 teal-text"><i class="fas fa-star" ></i> {this.props.points}</div>
        </div>
        </MDBCardBody>
      </MDBCard>
      </Link>
    )
  }
  }