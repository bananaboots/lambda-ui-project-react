import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from "./HeaderComponent";
import HomepageComponent from "./HomepageComponent";
import ServicesComponent from "./ServicesComponent";
import FooterComponent from "./FooterComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <HeaderComponent title="S&J" />
        <Switch>
          <Route exact path = "/"  component = {HomepageComponent} />
          <Route exact path = "/services"  component = {ServicesComponent} />
        </Switch>
        <FooterComponent />
      </div>
      </Router>
    );
  }
}

export default App;
