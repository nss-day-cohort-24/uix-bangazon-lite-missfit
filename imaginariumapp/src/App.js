import React, { Component } from 'react';
import PageHeader from './components/header/header';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
