const expectedPin = [0, 9, 0, 4];

const pinLogic = {
  pin: [],
  display: '',

  resetPin() {
    this.pin = [];
  },

  selectDigit(digit) {
    this.pin.push(digit);

    if (this.isPinComplete()) {
      this.checkPin();
    }
  },

  isPinComplete() {
    return this.pin.length === 4
  },

  isCorrectPin() {
    return JSON.stringify(this.pin) === JSON.stringify(expectedPin);
  },

  checkPin() {
    this.display = this.isCorrectPin() ? 'OK' : 'ERROR';
  }
};

export default pinLogic;