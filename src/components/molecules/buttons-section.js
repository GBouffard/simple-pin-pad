import React from 'react';
import pinLogic from '../../services/pin-logic';
import Button from '../atoms/button';

const addButtonElement = (digit, array, classname = '') => {
  array.push(
    <Button
      key={digit}
      text={(digit.toString())}
      className={classname}
      onClick={() => { 
        pinLogic.selectDigit(digit);
        sessionStorage.setItem('display', pinLogic.output);
      }} />
  );
}

const addButtonsElements = () => {
  const buttonsElements = [];
  for (let i = 1; i < 10; i++) {
    addButtonElement(i, buttonsElements);
  }
  addButtonElement(0, buttonsElements, 'App__last-button');
  return buttonsElements;
};

const ButtonsSection = () => {
  const buttonsElements = addButtonsElements();

  return (
    <section
      className="App__button-section">
      {buttonsElements}
    </section>
  );
};

export default ButtonsSection;
