const expectedPin = [0, 9, 0, 4];

const pinLogic = {
  input: [],
  output: '',

  resetInput() {
    this.input = [];
  },

  resetOutput() {
    this.output = '';
  },

  selectDigit(digit) {
    this.input.push(digit);
    this.isPinComplete() ? this.checkPin() : this.updateOutput();
  },

  isPinComplete() {
    return this.input.length === 4
  },

  isCorrectPin() {
    return JSON.stringify(this.input) === JSON.stringify(expectedPin);
  },

  checkPin() {
    this.output = this.isCorrectPin() ? 'OK' : 'ERROR';
    this.resetInput();
  },

  updateOutput() {
    this.output = this.input.length === 1 ? 'X' : this.output + 'X';
  }
};

export default pinLogic;