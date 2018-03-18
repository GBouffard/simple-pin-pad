import React, { Component } from 'react';
import pinLogic from '../../services/pin-logic';
import Button from '../atoms/button';

const addButtonElement = (digit, array) => {
  array.push(
    <Button
      key={digit}
      text={(digit.toString())}
      onClick={() => { pinLogic.selectDigit(digit); }} />
  );
}

const addButtonsElements = () => {
  const buttonsElements = [];
  for (let i = 1; i < 10; i++) {
    addButtonElement(i, buttonsElements);
  }
  addButtonElement(0, buttonsElements);
  return buttonsElements;
};

const ButtonsSection = () => {
  const buttonsElements = addButtonsElements();

  return (
    <section>
      {buttonsElements}
    </section>
  );
};

export default ButtonsSection;
