const {
  DEFAULT_WIDTH, DEFAULT_HEIGHT, DEFAULT_MARK_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_HORIZONTAL_BORDER,
  DEFAULT_VERTICAL_BORDER,
} = require('../constants/defaults');

const draw = Symbol();
const update = Symbol();

class Canvas {
  constructor() {
    this.width = DEFAULT_WIDTH;
    this.height = DEFAULT_HEIGHT;
    this.image = [];
    this.markColor = DEFAULT_MARK_COLOR;
    this.prevMarkColor = DEFAULT_MARK_COLOR;
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
      const validCoordinates = (row, col) => (
        row >= 0 && row < this.image.length && col >= 0 && col < this.image[row].length
      );

      const fillStack = [];
      fillStack.push([y, x]);

      while (fillStack.length > 0)
      {
        const [row, col] = fillStack.pop();

        if (!validCoordinates(row, col))
          continue;

        if (this.image[row][col] === this.markColor || this.image[row][col] === this.prevMarkColor)
          continue;

        this.image[row][col] = this.markColor;

        fillStack.push([row + 1, col]);
        fillStack.push([row - 1, col]);
        fillStack.push([row, col + 1]);
        fillStack.push([row, col - 1]);
      }
    this[update]();
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
          if (value === undefined && (i !== 0 || i !== this.height - 1)) {
            this.image[i].push(DEFAULT_EMPTY_COLOR);
          }
          else {
            this.image[i][j] = value;
          }
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
}

module.exports = Canvas;
