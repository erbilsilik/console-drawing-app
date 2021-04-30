const {
  DEFAULT_WIDTH, DEFAULT_HEIGHT, DEFAULT_MARK_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_HORIZONTAL_BORDER,
  DEFAULT_VERTICAL_BORDER,
} = require('../constants/defaults');

class Canvas {
  constructor() {
    this.width = DEFAULT_WIDTH;
    this.height = DEFAULT_HEIGHT;
    this.image = [];
    this.markColor = DEFAULT_MARK_COLOR;
  }

  draw(callback) {
    for (let i = 0; i < this.height; i++) {
      const row = i + 1;
      if (!this.image[i]) {
        this.image.push([]);
      }
      for (let j = 0; j < this.width; j++) {
        const col = j + 1;
        const value = this.image[i][j];
        callback({ i, j, row, col, value });
      }
    }
  }

  drawCanvas() {
    const alg = ({ i, j, colValue }) => {
      this.pushEmpty(colValue, i, j);
    };
    this.draw(alg);
    this.update();
  }

  drawLine(x1, y1, x2, y2) {
    const slopeX = x2 - x1;
    const slopeY = y2 - y1;

    const algorithm = ({ i, j, row, col, value }) => {
      // line
      if (slopeX === 0 || slopeY === 0) {
        // vertical line
        if (slopeX === 0 && (col >= x1 && col <= x2) && (row >= y1 && row <= y2)) {
          if (value === undefined) {
            this.image[i].push(this.markColor);
          } else {
            this.image[i][j] = this.markColor;
          }
        }
        // horizontal line
        else if (slopeY === 0 && (row === y1 && col >= x1 && col <= x2)) {
          if (value === undefined) {
            this.image[i].push(this.markColor);
          } else {
            this.image[i][j] = this.markColor;
          }
        } else {
          if (value === undefined) {
            this.image[i].push();
          } else {
            this.image[i][j] = value;
          }
        }
      }
      // empty
      else {
        this.pushEmpty(value, i, j);
      }
    };
    this.draw(algorithm);
    this.update();
  }

  drawRectangle(x1, y1, x2, y2) {
    const algorithm = ({ i, j, row, col, value }) => {
      // rectangle
      if (
        (col >= x1 && col <= x2) &&
        (row === y1 || row === y2 || (row === y2 - y1 && (col === x1 || col === x2)))
      ) {
        if (value === undefined) {
          this.image[i].push(this.markColor);
        } else {
          this.image[i][j] = this.markColor;
        }
      }
      // empty
      else {
        this.pushEmpty(value, i, j);
      }
    };
    this.draw(algorithm);
    console.log(this.image);
    this.update();
  }

  bucketFill(x, y) {
    const algorithm = ({ i, j, row, col }) => {
      if (x && y) {
        if (col === x && row === y) {
          const floodFillUtil = (screen, width, height, x, y, prevC, newC) => {
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
          };
          const floodFill = (screen, width, height, x, y, newC) => {
            const prevC = screen[x][y];
            floodFillUtil(screen, width, height, x, y, prevC, newC);
          };
          floodFill(this.image, this.width, this.height, y, x, this.markColor);
        }
      }
      // empty
      else {
        this.pushEmpty(value, i, j);
      }
    };
    this.draw(algorithm);
    this.update();
  }

  pushEmpty(value, i, j) {
    if (value === undefined && (i !== 0 || i !== this.height - 1)) {
      this.image[i].push(DEFAULT_EMPTY_COLOR);
    } else {
      this.image[i][j] = value;
    }
  }

  update() {
    const extendedWith = this.width + 2;

    const border = DEFAULT_HORIZONTAL_BORDER.repeat(extendedWith);

    console.log(border);
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < extendedWith; j++) {
        if (j === 0 || j === this.width + 1) {
          process.stdout.write(DEFAULT_VERTICAL_BORDER);
        } else {
          process.stdout.write(this.image[i][j - 1]);
        }
      }
      console.log('');
    }
    console.log(border);
  }
}

module.exports = class SingletonCanvas {
  constructor() {
    throw new Error('Use SingletonCanvas.getInstance()');
  }

  static getInstance() {
    if (!SingletonCanvas.instance) {
      SingletonCanvas.instance = new Canvas();
    }
    return SingletonCanvas.instance;
  }
};
