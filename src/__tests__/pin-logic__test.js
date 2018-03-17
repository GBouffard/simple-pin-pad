import pinLogic from '../services/pin-logic';

describe('Pin logic - ', () => {
  beforeEach(() => {
    pinLogic.resetPin();
  });

  it('accepts singular digits as inputs', () => {
    pinLogic.selectDigit(9);
    expect(pinLogic.pin).toEqual([9]);
  });

  it('triggers a check against the expected pin when the 4th digit of the input pin is entered', () => {
    spyOn(pinLogic, 'checkPin');

    for (let i = 0; i < 4; i++) {
      pinLogic.selectDigit(9);
    }

    expect(pinLogic.checkPin).toHaveBeenCalled();
  });

  it('returns OK if the input pin is a match with the expected pin', () => {
    pinLogic.selectDigit(0);
    pinLogic.selectDigit(9);
    pinLogic.selectDigit(0);
    pinLogic.selectDigit(4);
    expect(pinLogic.display).toEqual('OK');
  });

  it('returns ERROR if the input pin is not a match with the expected pin', () => {
    pinLogic.selectDigit(0);
    pinLogic.selectDigit(6);
    pinLogic.selectDigit(6);
    pinLogic.selectDigit(6);
    expect(pinLogic.display).toEqual('ERROR');
  });

  xit('resets the input pin pin once a check has been done', () => {
  });
});