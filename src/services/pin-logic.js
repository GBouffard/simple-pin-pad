const expectedPin = [1, 8, 0, 7];

const pinLogic = {
  inputPin: [],

  selectDigit(digit) {
    this.inputPin.push(digit);

    if (this.inputPin.length === 4) {
      this.checkPin();
    }
  },

  checkPin() {
  }
};

export default pinLogic;