import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody } from 'mdbreact'

export default class YearCard extends Component {
    
    render() {
        return (
            <Link to={`/season/${this.props.year}/champion/${this.props.winnerid}`}  >

                <MDBCard news className="hoverable" style={{ marginTop: "1rem" }}>
                    <MDBCardBody>
                        <MDBCardTitle className="text-center blue-grey-text" style={{ fontSize: '17px' }}>{this.props.year}</MDBCardTitle>
                        <MDBCardText className="text-center cyan-text font-weight-bold justify-content-around" style={{ fontSize: '19px' }}>
                            {this.props.driver.givenName} {this.props.driver.familyName}
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