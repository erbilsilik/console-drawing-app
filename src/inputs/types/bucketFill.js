module.exports = class BucketFillInput {
  constructor(userInputArr) {
    this.userInputArr = userInputArr;
  }

  handle(canvas) {
    const [x, y] = this.userInputArr.slice(1, this.userInputArr.length).map((point) => Number(point));
    canvas.bucketFill(x, y);

    return { };
  }
};
