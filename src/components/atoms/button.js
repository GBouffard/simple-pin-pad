import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, className }) => (
  <button
    onClick={onClick}
    className={className}>
    {text}
  </button>
);

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};
