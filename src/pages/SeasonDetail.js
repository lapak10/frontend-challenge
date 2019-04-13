import React, { Component } from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import CountryFlag from "../components/countryflag";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBContainer } from 'mdbreact';

export default class SeasonDetail extends Component {

    constructor(props) {
        super(props);
        this.state = { season_races: [], winner_code: '' };
    }


    componentDidMount() {

        this.setState({})

        let url = `https://ergast.com/api/f1/${this.props.match.params.year}/results/1.json`

        fetch(url).
            then(response => response.json()).then((repos) => {
                console.log(repos.MRData.RaceTable.Races);
                console.log(repos.length);
                this.setState({
                    season_races: repos.MRData.RaceTable.Races,
                    season: repos.MRData.RaceTable.season,
                    winner_code: this.props.match.params.winnerid
                });
            });
    }

    render() {
        return (

            <div>
                <Navbar page='season' year={this.props.match.params.year}></Navbar>
                <MDBContainer fluid>
                    {this.state.season_races.length ? (
                        <MDBTable hover style={{ marginTop: '10px' }}>
                            <MDBTableHead color="info-color-dark" textWhite>
                                <tr>
                                    <th>Round No.</th>
                                    <th>Race Name</th>
                                    <th>Circuit Name</th>

                                    <th>Winner</th>

                                    <th>Constructor</th>
                                    <th>Laps</th>
                                    <th>Time</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {this.state.season_races.map(
                                    function (race, i) {
                                        return (

                                            <tr key={i} style={{ backgroundColor: this.props.match.params.winnerid === race.Results[0].Driver.driverId ? '#fff9c4' : '' }}>
                                                <td>{i + 1}</td>
                                                <td>{race.raceName}</td>
                                                <td>{race.Circuit.circuitName}</td>
                                                <td><CountryFlag countryname={race.Results[0].Driver.nationality}></CountryFlag> {race.Results[0].Driver.givenName} {race.Results[0].Driver.familyName}</td>

                                                <td>   <MDBBtn outline color="info" href={race.Results[0].Constructor.url} target='blank' size="sm"><CountryFlag countryname={race.Results[0].Constructor.nationality}></CountryFlag> {race.Results[0].Constructor.name}</MDBBtn></td>
                                                <td>{race.Results[0].laps}</td>
                                                <td>{race.Results[0].Time.time}</td>

                                            </tr>


                                        )
                                    }.bind(this)
                                )}


                            </MDBTableBody>
                        </MDBTable>

                    ) : (
                            <div className="spinner-grow text-info" style={{ marginLeft: '50%', marginTop: '15%' }} role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                </MDBContainer>
            </div>

        )
    }

}