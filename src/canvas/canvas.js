const {
  DEFAULT_WIDTH, DEFAULT_HEIGHT, DEFAULT_MARK_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_HORIZONTAL_BORDER,
  DEFAULT_VERTICAL_BORDER,
} = require('../constants/defaults');

const draw = Symbol();
const fillCol = Symbol();
const update = Symbol();

class Canvas {
  constructor() {
    this.width = DEFAULT_WIDTH;
    this.height = DEFAULT_HEIGHT;
    this.image = [];
    this.markColor = DEFAULT_MARK_COLOR;
  }

  drawCanvas() {
    const algorithm = () => false;
    this[draw](algorithm);
  }

  drawLine(x1, y1, x2, y2) {
    const algorithm = (row, col) => {
      return (
          (row >= y1 && row <= y2) &&
          (col >= x1 && col <= x2)
        )
        ||
        (
          row === y1 &&
          (col >= x1 && col <= x2)
        );
    };
    this[draw](algorithm);
  }

  drawRectangle(x1, y1, x2, y2) {
    const algorithm = (row, col) => {
      return (
        row === y1 && col >= x1 && col <= x2) ||
        (row === y2 && col >= x1 && col <= x2) ||
        (
          (row > y1 && row < y2) &&
          (col === x1 || col === x2)
        );
    };
    this[draw](algorithm);
  }

  bucketFill(x, y) {
    const algorithm = (row, col) => {
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
            floodFillUtil(screen, width, height, x - 1, y, prevC, newC);
            floodFillUtil(screen, width, height, x, y + 1, prevC, newC);
            floodFillUtil(screen, width, height, x, y - 1, prevC, newC);
          };
          const floodFill = (screen, width, height, x, y, newC) => {
            const prevC = screen[x][y];
            floodFillUtil(screen, width, height, x, y, prevC, newC);
          };
          floodFill(this.image, this.width, this.height, y, x, this.markColor);
          return true;
        }
      }
      return false;
    };
    this[draw](algorithm);
  }

  [draw](callback) {
    for (let i = 0; i < this.height; i++) {
      const row = i + 1;
      if (!this.image[i]) {
        this.image.push([]);
      }
      for (let j = 0; j < this.width; j++) {
        const col = j + 1;
        const value = this.image[i][j];
        const checkResult = callback(row, col);
        if (!checkResult) {
          this[fillCol](value, i, j);
        }
        else {
          if (value === undefined) {
            this.image[i].push(this.markColor);
          }
          else {
            if (value === DEFAULT_EMPTY_COLOR) {
              this.image[i][j] = this.markColor;
            }
          }
        }
      }
    }
    this[update]();
  }

  [update]() {
    const extendedWith = this.width + 2;

    const border = DEFAULT_HORIZONTAL_BORDER.repeat(extendedWith);

    console.log(border);
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < extendedWith; j++) {
        if (j === 0 || j === this.width + 1) {
          process.stdout.write(DEFAULT_VERTICAL_BORDER);
        }
        else {
          try {
            process.stdout.write(this.image[i][j - 1]);
          }
          catch (e) {
            return;
          }
        }
      }
      console.log('');
    }
    console.log(border);
  }

  [fillCol](value, i, j) {
    if (value === undefined && (i !== 0 || i !== this.height - 1)) {
      this.image[i].push(DEFAULT_EMPTY_COLOR);
    } else {
      this.image[i][j] = value;
    }
  }
}

module.exports = Canvas;
