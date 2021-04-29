const floodFill = require('./floodFill');

function updateGraphicMatrix(graphicMatrix, { width, height, markColor, x1, y1, x2, y2, slopeX, slopeY, x, y }) {
  for (let i = 0; i < height; i++) {
    if (!graphicMatrix[i]) {
      graphicMatrix.push([]);
    }
    for (let j = 0; j < width; j++) {
      const value = graphicMatrix[i][j];
      // line
      if (slopeX === 0 || slopeY === 0) {
        // vertical line
        if (slopeX === 0 && (j + 1 >= x1 && j + 1 <= x2) && (i + 1 >= y1 && i + 1 <= y2)) {
          if (value === undefined) {
            graphicMatrix[i].push(markColor);
          } else {
            graphicMatrix[i][j] = markColor;
          }
        }
        // horizontal line
        else if (slopeY === 0 && (i + 1 === y1 && j + 1 >= x1 && j + 1 <= x2)) {
          if (value === undefined) {
            graphicMatrix[i].push(markColor);
          } else {
            graphicMatrix[i][j] = markColor;
          }
        } else {
          if (value === undefined) {
            graphicMatrix[i].push(' ');
          } else {
            graphicMatrix[i][j] = value;
          }
        }
      }
      // rectangle
      else if (
        (j + 1 >= x1 && j + 1 <= x2) &&
        (i + 1 === y1 || i + 1 === y2 || (i + 1 === y2 - y1 && (j + 1 === x1 || j + 1 === x2)))
      ) {
        if (value === undefined) {
          graphicMatrix[i].push(markColor);
        } else {
          graphicMatrix[i][j] = markColor;
        }
      }
      // fill
      else if (x && y) {
        if (j + 1 === x && i + 1 === y) {
          floodFill(graphicMatrix, width, height, y, x, markColor);
        }
      }
      // empty
      else {
        if (value === undefined && i !== 0 || i !== height - 1) {
            graphicMatrix[i].push(' ');
        } else {
          graphicMatrix[i][j] = value;
        }
      }
    }
  }
}

function draw(graphicMatrix, width, height) {
  const canvasWidth = width + 2;

  console.log('*'.repeat(canvasWidth));

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < canvasWidth; j++) {
      if (j === 0 || j === width + 1) {
        process.stdout.write('|');
      }
      else {
        process.stdout.write(graphicMatrix[i][j - 1]);
      }
    }
    console.log('');
  }

  console.log('*'.repeat(canvasWidth));
}

module.exports = {
  updateGraphicMatrix,
  draw,
};
