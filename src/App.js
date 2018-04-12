import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from "./calendar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calendar 8</h1>
        </header>
        <Calendar
          startDate={new Date()}
          totalDays={30}
          countryCode={'US'}
        />
      </div>
    );
  }
}

export default App;
