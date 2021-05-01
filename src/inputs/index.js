const readline = require('readline');

const Canvas = require('../canvas/canvas');
const InputFactory = require('./factory/inputFactory');

const input = (canvas = new Canvas()) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('enter command: ', (userInput) => {
    const { terminate } = (new InputFactory(userInput)).handle(canvas);
    if (terminate) {
      rl.close();
      return;
    }

    rl.close();
    input(canvas);
  });
};

module.exports = input;
