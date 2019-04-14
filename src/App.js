import React, { Component } from 'react';
import './App.css';
import AppContainer from './containers/AppContainer';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer />
      </Router>
    );
  }
}

export default App;
