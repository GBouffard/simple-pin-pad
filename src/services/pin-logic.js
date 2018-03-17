const expectedPin = [1, 8, 0, 7];

const pinLogic = {
  inputPin: [],

  selectDigit(digit) {
    this.inputPin.push(digit);
  }
};

export default pinLogic;