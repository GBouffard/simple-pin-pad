const expectedPin = [0, 9, 0, 4];

const pinLogic = {
  input: [],
  output: '',

  resetPin() {
    this.input = [];
  },

  selectDigit(digit) {
    this.input.push(digit);

    if (this.isPinComplete()) {
      this.checkPin();
    }
  },

  isPinComplete() {
    return this.input.length === 4
  },

  isCorrectPin() {
    return JSON.stringify(this.input) === JSON.stringify(expectedPin);
  },

  checkPin() {
    this.output = this.isCorrectPin() ? 'OK' : 'ERROR';
    this.resetPin();
  }
};

export default pinLogic;