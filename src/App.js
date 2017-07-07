import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    if (typeof window.Intercom === 'function') {
      window.Intercom('boot', { app_id: 'ggxrd885' });
    }

    setTimeout(() => {
      if (typeof window.Intercom === 'function') {
        window.Intercom('shutdown');
      }
    }, 10000);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
