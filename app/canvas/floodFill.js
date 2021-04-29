const { DEFAULT_EMPTY_COLOR } = require('../constants/defaults');

function floodFillUtil(screen, width, height, x, y, prevC, newC) {
  if (x < 0 || x >= height || y < 0 || y >= width || screen[x][y] !== prevC || screen[x][y] === newC) {
    return;
  }

  if (screen[x][y] === DEFAULT_EMPTY_COLOR) {
    screen[x][y] = newC;
  }

  floodFillUtil(screen, width, height, x + 1, y, prevC, newC);
  floodFillUtil(screen, width, height,x - 1, y, prevC, newC);
  floodFillUtil(screen, width, height, x, y + 1, prevC, newC);
  floodFillUtil(screen, width, height, x, y - 1, prevC, newC);
}

function floodFill(screen, width, height, x, y, newC) {
  const prevC = screen[x][y];
  floodFillUtil(screen, width, height, x, y, prevC, newC);
}

module.exports = floodFill;
