import React from 'react';
import PropTypes from 'prop-types'

const Month = ({ month, year, days }) => (
  <div className="month">
    <div className="header">{month} {year}</div>
    <div className="body">
      {
        days.map(item => (
          <div
            key={`${year}${month}${item.date}`}
            className={`day ${item.isWeekend ? 'weekend' : ''} ${item.isHoliday ? 'holiday' : ''}`}
          >
            {item.date}
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