const {
  DEFAULT_WIDTH, DEFAULT_HEIGHT, DEFAULT_MARK_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_HORIZONTAL_BORDER,
  DEFAULT_VERTICAL_BORDER,
} = require('../constants/defaults');

const floodFill = require('./floodFill');

class Canvas {
  constructor() {
    this.width = DEFAULT_WIDTH;
    this.height = DEFAULT_HEIGHT;
    this.image = [];
    this.markColor = DEFAULT_MARK_COLOR;
  }

  drawCanvas() {
    for (let i = 0; i < this.height; i++) {
      if (!this.image[i]) {
        this.image.push([]);
      }
      for (let j = 0; j < this.width; j++) {
        const value = this.image[i][j];
        this.pushEmpty(value, i, j);
      }
    }
  }

  drawLine(x1, y1, x2, y2) {
    const slopeX = x2 - x1;
    const slopeY = y2 - y1;

    for (let i = 0; i < this.height; i++) {
      if (!this.image[i]) {
        this.image.push([]);
      }
      for (let j = 0; j < this.width; j++) {
        const value = this.image[i][j];
        // line
        if (slopeX === 0 || slopeY === 0) {
          // vertical line
          if (slopeX === 0 && (j + 1 >= x1 && j + 1 <= x2) && (i + 1 >= y1 && i + 1 <= y2)) {
            if (value === undefined) {
              this.image[i].push(this.markColor);
            } else {
              this.image[i][j] = this.markColor;
            }
          }
          // horizontal line
          else if (slopeY === 0 && (i + 1 === y1 && j + 1 >= x1 && j + 1 <= x2)) {
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
      }
    }
  }

  drawRectangle(x1, y1, x2, y2) {
    for (let i = 0; i < this.height; i++) {
      if (!this.image[i]) {
        this.image.push([]);
      }
      for (let j = 0; j < this.width; j++) {
        const value = this.image[i][j];
        // rectangle
        if (
          (j + 1 >= x1 && j + 1 <= x2) &&
          (i + 1 === y1 || i + 1 === y2 || (i + 1 === y2 - y1 && (j + 1 === x1 || j + 1 === x2)))
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
      }
    }
  }

  bucketFill(x, y) {
    for (let i = 0; i < this.height; i++) {
      if (!this.image[i]) {
        this.image.push([]);
      }
      for (let j = 0; j < this.width; j++) {
        const value = this.image[i][j];

        // fill
        if (x && y) {
          if (j + 1 === x && i + 1 === y) {
            floodFill(this.image, this.width, this.height, y, x, this.markColor);
          }
        }
        // empty
        else {
          this.pushEmpty(value, i, j);
        }
      }
    }
  }

  pushEmpty(value, i, j) {
    if (value === undefined && i !== 0 || i !== this.height - 1) {
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
