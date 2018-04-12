import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Calendar.css';

class Calendar extends Component {
  static buildData(startDate, length) {

    const endDate = new Date();
    endDate.setDate(startDate.getDate() + length);

    const currentDate = new Date(startDate);

    const data = [];
    const month = {};
    const days = {};
    const initialMonth = startDate.getMonth();
    const initialYear = startDate.getYear();

    for (var i = 1; i <= length; i++) {
      const dayData =  currentDate.setDate(currentDate.getDate() + i);

      if (initialMonth !== currentDate.getMonth()) {
        data.push({});
      }

      const day = currentDate.getDay();
      days.push({
        day,
        date: currentDate.getDate(),
        isWeekend: day === 0 || day === 6,
        inRange: true,
        isHoliday: false,
      });
    }

    return [
      {
        month:1,
        days: [
          {
            day: 1,
            date: 1,
            isWeekend: true,
            inRange: true,
            isHoliday: false,
          }
        ]
      }
    ];
  }

  render() {

    const {
      startDate,
      totalDays
    } = this.props;

    const data = Calendar.buildData(startDate, totalDays);

    return (
      <div className="calendar">
        {this.props.totalDays}
      </div>
    );
  }
}

Calendar.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  totalDays: PropTypes.number.isRequired,
  countryCode: PropTypes.string.isRequired,
};


export default Calendar;
