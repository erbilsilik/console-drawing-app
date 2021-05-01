module.exports = class DrawCanvasInput {
  constructor(userInputArr) {
    this.userInputArr = userInputArr;
  }

  handle(canvas) {
    const [width, height] = this.userInputArr.slice(1, this.userInputArr.length).map((point) => Number(point));
    canvas.width = width;
    canvas.height = height;
    canvas.drawCanvas();

    return { };
  }
};
