const expectedPin = [0, 9, 0, 4];

const pinLogic = {
  input: [],
  output: '',
  errorsCount: 0,
  locked: false,

  resetInput() {
    this.input = [];
  },

  resetOutput() {
    this.output = '';
  },

  resetErrors() {
    this.errorsCount = 0;
    this.locked = false;
  },

  selectDigit(digit) {
    if (this.locked === false) {
      this.input.push(digit);
      this.isPinComplete() ? this.checkPin() : this.updateOutput();
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
    this.checkForLockdown();
    this.resetInput();
  },

  updateOutput() {
    this.output = this.input.length === 1 ? 'X' : this.output + 'X';
  },

  checkForLockdown() {
    if (!this.isCorrectPin()) {
      this.errorsCount += 1;
      this.shouldLock();
    }
  },

  shouldLock() {
    if (this.errorsCount === 3) {
      this.output = 'LOCKED';
      this.locked = true;
      unlocksIn30Seconds();
    }
  },

  unlocks() {
    setTimeout(() => {
      this.resetOutput();
      this.resetErrors();
      sessionStorage.setItem('display', this.output);
    }, 30000);
  }
};

const unlocksIn30Seconds = pinLogic.unlocks.bind(pinLogic);

export default pinLogic;