import React from "react";
import { Route, Switch } from "react-router-dom";


import HomePage from "./pages/HomePage";
import SeasonDetail from "./pages/SeasonDetail";



class Routes extends React.Component {
  render() {
    return (
      <Switch>
        

        
        <Route path="/season/:year/champion/:winnerid" component={SeasonDetail} />
        <Route path="/" component={HomePage} />
        
       
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;