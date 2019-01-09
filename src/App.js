import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Route>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Route>
    );
  }
}

export default App;
