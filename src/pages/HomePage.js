import React, { Component } from 'react'
import Navbar from '../components/navbar'
import YearCard from '../components/yearcard'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact';

export default class HomePage extends Component {


  constructor(props) {
    super(props);
    this.state = { name: "Anand Kumar Chaudhary", race_list: [] };

    console.log(this.props.match.params.id);
  }


  componentDidMount() {

    let url = 'https://ergast.com/api/f1/driverStandings/1.json?limit=11&offset=55';

    fetch(url).then(response => response.json()).then((repos) => {
      console.log(repos.MRData.StandingsTable.StandingsLists);
      console.log(repos.length);
      this.setState({
        race_list: repos.MRData.StandingsTable.StandingsLists
      });
    });

  }

  render() {
    return (
      <div>
        <Navbar></Navbar>

        <MDBContainer fluid>

          <main style={{ marginTop: "0rem" }}>
            {this.state.race_list.length ? (
              <MDBRow center>
                {this.state.race_list.map(
                  function (year, i) {
                    return (
                      <MDBCol key={i} size="2"><YearCard driver={year.DriverStandings[0].Driver} won={year.DriverStandings[0].wins} points={year.DriverStandings[0].points} winnerid={year.DriverStandings[0].Driver.driverId} winner={year.DriverStandings[0].Driver.givenName} year={year.season}></YearCard></MDBCol>
                    )
                  }
                )}
              </MDBRow>
            ) : (
                <div className="spinner-grow text-info" style={{ marginLeft: '50%', marginTop: '15%' }} role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              )}

          </main>

        </MDBContainer>

      </div>
    )
  }
}