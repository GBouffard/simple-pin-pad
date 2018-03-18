import React from 'react';
import PropTypes from 'prop-types';

const ScreenDisplay = ({ display }) => {
  return (
    <div
      className="App__screen-display">
      {display}
    </div>
  );
};

ScreenDisplay.propTypes = {
  display: PropTypes.string.isRequired
};

export default ScreenDisplay;