import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Calendar.css';

class Calendar extends Component {
  static buildData(startDate, length) {

    const endDate = new Date();
    endDate.setDate(startDate.getDate() + length);

    const currentDate = new Date(startDate);

    const data = [];
    let days = [];
    let initialMonth = currentDate.getMonth();
    let initialYear = currentDate.getFullYear();

    for (var i = 1; i <= length; i++) {

      if (initialMonth !== currentDate.getMonth()) {
        data.push({
          month: initialMonth,
          year: initialYear,
          days,
        });
        days = [];
        initialMonth = currentDate.getMonth();
        initialYear = currentDate.getFullYear();
      }

      const day = currentDate.getDay();
      days.push({
        day,
        date: currentDate.getDate(),
        isWeekend: day === 0 || day === 6,
        inRange: true,
        isHoliday: false,
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }

    if (days.length > 0) {
      data.push({
        month: initialMonth,
        year: initialYear,
        days,
      });
    }

    return data;
  }

  render() {

    const {
      startDate,
      totalDays
    } = this.props;

    const data = Calendar.buildData(startDate, totalDays);

    console.log(data);

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
