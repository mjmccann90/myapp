import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    const fullName = <p>{this.props.taco.first} {this.props.taco.last}</p>
    return (
      <div className="App">
        {/* comments cannot go directly below the return */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello, {fullName}
          </p>
          <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
