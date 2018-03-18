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
    for (let i = 0; i < this.input.length; i++) {
      this.output += 'X';
    }
  }
};

export default pinLogic;