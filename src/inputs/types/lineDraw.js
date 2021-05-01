module.exports = class LineDrawInput {
  constructor(userInputArr) {
    this.userInputArr = userInputArr;
  }

  handle(canvas) {
    const [x1, y1, x2, y2] = this.userInputArr.slice(1, this.userInputArr.length).map((point) => Number(point));
    canvas.drawLine(x1, y1, x2, y2);

    return { };
  }
};
