import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ text, onClick, className }) => {
  const buttonClassName = classNames('App__pin-pad-button', className);

  return (
    <button
      onClick={onClick}
      className={buttonClassName}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};
