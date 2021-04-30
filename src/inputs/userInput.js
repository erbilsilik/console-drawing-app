const readline = require('readline');

const userInputChecks = require('./checks');
const {
  QUIT, COLOR, CANVAS, RECTANGLE, LINE, BUCKET_FILL,
} = require('../constants/inputs');

const Canvas = require('../canvas/canvas');

const input = (canvas = new Canvas()) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('enter command: ', (userInput) => {
    let width, height, x1, y1, x2, y2, x, y;

    // -------  QUIT INPUT -------
    const isQuitInput = userInputChecks.get(QUIT).test(userInput);
    if (isQuitInput) {
      rl.close();
      return;
    }
    // -------  QUIT INPUT -------

    // ------- CHANGE COLOR INPUT  -------
    const isColorChangeInput = userInputChecks.get(COLOR).test(userInput);
    if (isColorChangeInput) {
      const actionRemoved = userInput.split(' ');
      [markColor] = actionRemoved.slice(1, actionRemoved.length);
      canvas.markColor = markColor;
      rl.close();
      input(canvas);
      return;
    }
    // ------- CHANGE COLOR INPUT  -------

    // ------- DRAW CANVAS INPUT  -------
    const isCanvasDrawInput = userInputChecks.get(CANVAS).test(userInput);
    if (isCanvasDrawInput) {
      const actionRemoved = userInput.split(' ');
      [width, height] = actionRemoved.slice(1, actionRemoved.length).map((point) => Number(point));
      canvas.width = width;
      canvas.height = height;
      canvas.drawCanvas();
    }
    // ------- DRAW CANVAS INPUT -------

    // ------- LINE DRAW INPUT -------
    const isLineDrawInput = userInputChecks.get(LINE).test(userInput);
    if (isLineDrawInput) {
      const actionRemoved = userInput.split(' ');
      [x1, y1, x2, y2] = actionRemoved.slice(1, actionRemoved.length).map((point) => Number(point));
      canvas.drawLine(x1, y1, x2, y2);
    }
    // ------- LINE DRAW INPUT -------

    // ------- RECTANGLE DRAW INPUT -------
    const isRectangleDrawInput = userInputChecks.get(RECTANGLE).test(userInput);
    if (isRectangleDrawInput) {
      const actionRemoved = userInput.split(' ');
      [x1, y1, x2, y2] = actionRemoved.slice(1, actionRemoved.length).map((point) => Number(point));
      canvas.drawRectangle(x1, y1, x2, y2);
    }
    // ------- RECTANGLE DRAW INPUT -------

    // ------- BUCKET-FILL INPUT -------
    const isBucketFillInput = userInputChecks.get(BUCKET_FILL).test(userInput);
    if (isBucketFillInput) {
      const actionRemoved = userInput.split(' ');
      [x, y] = actionRemoved.slice(1, actionRemoved.length).map((point) => Number(point));
      canvas.bucketFill(x, y);
    }
    // ------- BUCKET-FILL INPUT -------

    rl.close();

    input(canvas);
  });
};

module.exports = input;
