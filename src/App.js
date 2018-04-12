import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from "./calendar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      totalDays: 30,
      countryCode: 'US'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calendar 8</h1>
        </header>
        <div className="controls">
          <label>
            Number of days:
            <input
              type="number"
              value={this.state.totalDays}
              onChange={(e) => this.setState({totalDays: e.target.value})}
            />
          </label>
        </div>
        <Calendar
          startDate={this.state.startDate}
          totalDays={this.state.totalDays}
          countryCode={this.state.countryCode}
        />
      </div>
    );
  }
}

export default App;
