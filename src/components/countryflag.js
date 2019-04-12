import React, { Component } from 'react';
export default class CountryFlag extends Component{
    country = {
        spanish:'es',
        german:'de',
        finnish:'fi',
        british:'gb',
        australian:'au',
        italian:'it',
        colombian:'co',
        brazilian:'br',
        polish:'pl',
        venezuelan:'ve',
        french:'fr',
        austrian:'at'
    }
    get_country_code( countryname ){
      countryname = countryname.toLowerCase()

      return this.country[ countryname ]
    }
    render(){
        return (
          <img src={`https://www.countryflags.io/${ this.get_country_code( this.props.countryname ) }/flat/16.png`}></img>
        )
    }
}