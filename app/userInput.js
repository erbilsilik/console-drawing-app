const readline = require('readline');

const { updateGraphicMatrix, draw } = require('./canvas');

const input = (graphicMatrix, markColor = 'x') => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('enter command: ', (userInput) => {

    console.log(' ----------------------- ' + userInput + ' -----------------------');

    // --- VARIABLES ---
    let width = 20;
    let height = 4;
    let canvas = [width, height];
    let x1, y1, x2, y2, x, y;
    // --- VARIABLES ---

    // --- USER INPUT CHECKS  ---
    if (userInput === 'Q') {
      rl.close();
      return;
    }

    if (/C\s\w/.test(userInput)) {
      [markColor] = userInput.split(' ').slice(1, 3);
      rl.close();
      input(graphicMatrix, markColor);
      return;
    }

    const isCanvasDrawInput = /N\s\d+\s\d+/.test(userInput);
    if (isCanvasDrawInput) {
      canvas = userInput.split(' ').slice(1, 3);
      [width, height] = canvas;
    }

    const isDrawInput = /[L-R]\s\d+\s\d+\s\d+\s\d+/.test(userInput);
    if (isDrawInput) {
      [x1, y1, x2, y2] = userInput.split(' ').slice(1, 5);
      x1 = Number(x1);
      y1 = Number(y1);
      x2 = Number(x2);
      y2 = Number(y2);
    }
    // --- USER INPUT CHECKS  ---

    width = Number(width);
    height = Number(height);

    const properties = { width, height, markColor };

    const isFillInput = /B\s\d+\s\d+/.test(userInput);
    if (isFillInput) {
      [x, y] = userInput.split(' ').slice(1, 3);
      x = Number(x);
      y = Number(y);
      Object.assign(properties, { x, y })
    }

    if (isDrawInput) {
      const slopeX = x2 - x1;
      const slopeY = y2 - y1;

      console.log('slope X: ' + slopeX);
      console.log('slope Y: ' + slopeY);

      Object.assign(properties, { x1, y1, x2, y2, slopeX, slopeY });

      // if (slopeX !== 0 && slopeY !== 0) {
      //   console.log('Currently only horizontal or vertical lines are supported');
      //   rl.close();
      //   return;
      // }
    }

    updateGraphicMatrix(
      graphicMatrix,
      properties,
    );

    draw(graphicMatrix, width, height);

    rl.close();

    input(graphicMatrix, markColor);
  });
};

module.exports = input;
