import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" render={() => <Header />}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
