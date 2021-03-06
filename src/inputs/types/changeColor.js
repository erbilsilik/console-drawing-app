module.exports = class ChangeColorInput {
  constructor(userInputArr) {
    this.userInputArr = userInputArr;
  }

  handle(canvas) {
    const [markColor] = this.userInputArr.slice(1, this.userInputArr.length);
    canvas.prevMarkColor = canvas.markColor;
    canvas.markColor = markColor;

    return { };
  }
};
