import React from 'react';
import PropTypes from 'prop-types'
import _ from 'lodash';
import './Month.css'

const months = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

const Month = ({ month, year, days }) => (
  <div className="month">
    <div className="header">{months[month]} {year}</div>
    <div className="body">
      {
        _.times(days[0].day, (value) => (
          <div
            key={`${year}${month}-empty-${value}`}
            className="day"
          >
            &nbsp;
          </div>
        ))
      }
      {
        days.map(item => (
          <div
            key={`${year}${month}${item.date}`}
            className={`day
              ${item.inRange ? 'range' : ''}
              ${item.isWeekend ? 'weekend' : ''}
              ${item.isHoliday ? 'holiday' : ''}
            `}
          >
            {item.date}
          </div>
        ))
      }
      {
        _.times((6 - days[days.length - 1].day), (value) => (
          <div
            key={`${year}${month}-empty-${value}`}
            className="day"
          >
            &nbsp;
          </div>
        ))
      }
    </div>
  </div>
);

Month.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  days: PropTypes.array.isRequired,

};
export default Month;