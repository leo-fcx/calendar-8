import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from "./calendar";

const getFormattedDate = (date) => {
  const mm  = date.getMonth();
  const dd  = date.getDate();

  return [
    date.getFullYear(),
    (mm>9 ? '' : '0') + mm,
    (dd>9 ? '' : '0') + dd
  ].join('-');
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      totalDays: 30,
      countryCode: 'US'
    };
    this.onStartDateChange = this.onStartDateChange.bind(this);
  }

  onStartDateChange (e) {
    this.setState({
      startDate: new Date(`${e.target.value} 00:00:00`)
    })
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
            Start Date:
            <input
              type="date"
              value={getFormattedDate(this.state.startDate)}
              onChange={this.onStartDateChange}
            />
          </label>
          <br />
          <label>
            Number of days:
            <input
              type="number"
              value={this.state.totalDays}
              onChange={(e) => this.setState({totalDays: e.target.value})}
            />
          </label>
          <br />
          <label>
            Country code:
            <input
              type="text"
              value={this.state.countryCode}
              onChange={(e) => this.setState({countryCode: e.target.value})}
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
