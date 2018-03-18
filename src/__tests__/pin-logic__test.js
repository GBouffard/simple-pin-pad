import pinLogic from '../services/pin-logic';

const enterWrongPin = () => {
  pinLogic.selectDigit(0);
  pinLogic.selectDigit(6);
  pinLogic.selectDigit(6);
  pinLogic.selectDigit(6);
};

const enterRightPin = () => {
  pinLogic.selectDigit(0);
  pinLogic.selectDigit(9);
  pinLogic.selectDigit(0);
  pinLogic.selectDigit(4);
};

describe('Pin logic - ', () => {
  describe('Input logic - ', () => {
    beforeEach(() => {
      pinLogic.resetInput();
    });

    it('is empty when initialised', () => {
      expect(pinLogic.input).toEqual([]);
    });

    it('accepts singular digits as inputs', () => {
      pinLogic.selectDigit(9);
      expect(pinLogic.input).toEqual([9]);
    });  

    it('triggers a check against the expected pin when the 4th digit of the input pin is entered', () => {
      spyOn(pinLogic, 'checkPin');  

      for (let i = 0; i < 4; i++) {
        pinLogic.selectDigit(9);
      }  

      expect(pinLogic.checkPin).toHaveBeenCalled();
    });   

    it('resets the input pin pin once a check has been done', () => {
      pinLogic.selectDigit(0);
      pinLogic.selectDigit(9);
      pinLogic.selectDigit(0);
      expect(pinLogic.input).not.toEqual([]);
      pinLogic.selectDigit(4);
      expect(pinLogic.input).toEqual([]);
    });
  });

  describe('Output logic - ', () => {
    beforeEach(() => {
      pinLogic.resetInput();
      pinLogic.resetOutput();
    });

    it('is empty when initialised', () => {
      expect(pinLogic.output).toEqual('');
    });

    it('does not display the first digit', () => {
      pinLogic.selectDigit(5);
      expect(pinLogic.output).toEqual('X');
    });

    it('does not display the second digit', () => {
      pinLogic.selectDigit(2);
      pinLogic.selectDigit(1);
      expect(pinLogic.output).toEqual('XX');
    });

    it('does not display the third digit', () => {
      pinLogic.selectDigit(3);
      pinLogic.selectDigit(6);
      pinLogic.selectDigit(9);
      expect(pinLogic.output).toEqual('XXX');
    });

    it('returns OK if the input pin is a match with the expected pin', () => {
      enterRightPin();
      expect(pinLogic.output).toEqual('OK');
    });  

    it('returns ERROR if the input pin is not a match with the expected pin', () => {
      enterWrongPin();
      expect(pinLogic.output).toEqual('ERROR');
    });

    it('updates when a first digit is entered', () => {
      enterWrongPin();
      pinLogic.selectDigit(0);
      expect(pinLogic.output).toEqual('X');
    });
  });

  describe('Lock down logic - ', () => {
    beforeEach(() => {
      pinLogic.resetInput();
      pinLogic.resetOutput();
      pinLogic.resetErrors();
    });

    it('is false when initialised', () => {
      expect(pinLogic.locked).toEqual(false);
    });

    it('has no errors count when initialised', () => {
      expect(pinLogic.errorsCount).toEqual(0);
    });

    it('knows how many errors are counted', () => {
      enterWrongPin();
      enterWrongPin();
      expect(pinLogic.errorsCount).toEqual(2);
    });

    it('is not locked when less than 3 errors have been made', () => {
      enterWrongPin();
      enterWrongPin();
      expect(pinLogic.locked).toEqual(false);
    });

    it('is locked when 3 errors have been made', () => {
      enterWrongPin();
      enterWrongPin();
      enterWrongPin();
      expect(pinLogic.locked).toEqual(true);
    });

    it('update the output to LOCKED when 3 errors have been made', () => {
      enterWrongPin();
      enterWrongPin();
      enterWrongPin();
      expect(pinLogic.output).toEqual('LOCKED');
    });

    xit('disable the keypad when locked', () => {
    });

    xit('unlocks the keypad after 30 seconds', () => {
    });
  });
});