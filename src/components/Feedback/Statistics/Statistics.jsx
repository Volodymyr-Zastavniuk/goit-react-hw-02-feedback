import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className="Statistics__list">
        <li>
          <p className="Statistics__text">Good: {good}</p>
        </li>
        <li>
          <p className="Statistics__text">Neutral: {neutral}</p>
        </li>
        <li>
          <p className="Statistics__text">Bad: {bad}</p>
        </li>
      </ul>
      <p className="Statistics__text"> Total: {total} </p>
      <p className="Statistics__text">
        Positive Feedback: {positivePercentage}
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statistics;
