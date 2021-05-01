const inputMatchings = require('./checks');
const inputTypes = require('./types');

module.exports = class InputFactory {
  constructor(userInput) {
    this.userInput = userInput;
  }

  handle(canvas) {
    const instance = this.getInstance();
    if (instance) {
      return instance.handle(canvas);
    }
    return { terminate: false }
  }

  getInstance() {
    for (let input of inputMatchings.keys()) {
      const success = inputMatchings.get(input).test(this.userInput);
      if (success) {
        const userInputArr = this.userInput.split(' ');
        return inputTypes.get(input)(userInputArr);
      }
    }
  }
};
