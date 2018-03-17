import pinLogic from '../services/pin-logic';

describe('Pin logic - ', () => {
  it('accepts singular digits as inputs', () => {
    pinLogic.selectDigit(9);
    expect(pinLogic.inputPin).toEqual([9]);
  });

  it('triggers a check against the expected pin when the 4th digit of the input is entered', () => {
    spyOn(pinLogic, 'checkPin');

    for (let i = 0; i < 3; i++) {
      pinLogic.selectDigit(9);
    }

    expect(pinLogic.checkPin).toHaveBeenCalled();
  });

  xit('returns OK if the input is a match with the hardcoded pin', () => {
  });

  xit('returns ERROR if the input is not a match with the hardcoded pin', () => {
  });

  xit('resets the input pin once a check has been done', () => {
  });
});