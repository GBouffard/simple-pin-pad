import pinLogic from '../services/pin-logic';

describe('Pin logic - ', () => {
  it('accepts singular digits as inputs', () => {
    pinLogic.selectDigit(9);
    expect(pinLogic.inputPin).toEqual([9]);
  });

  xit('checks the input against the hardcoded pin when the 4th digit is entered', () => {
  });

  xit('returns OK if the input is a match with the hardcoded pin', () => {
  });

  xit('returns ERROR if the input is not a match with the hardcoded pin', () => {
  });

  xit('resets the input pin once a check has been done', () => {
  });
});