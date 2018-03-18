import pinLogic from '../services/pin-logic';

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
      pinLogic.selectDigit(0);
      pinLogic.selectDigit(9);
      pinLogic.selectDigit(0);
      pinLogic.selectDigit(4);
      expect(pinLogic.output).toEqual('OK');
    });  

    it('returns ERROR if the input pin is not a match with the expected pin', () => {
      pinLogic.selectDigit(0);
      pinLogic.selectDigit(6);
      pinLogic.selectDigit(6);
      pinLogic.selectDigit(6);
      expect(pinLogic.output).toEqual('ERROR');
    });

    xit('updates when a first digit is entered', () => {
    });
  }); 
});