const {
  QUIT, COLOR, CANVAS, LINE, RECTANGLE, BUCKET_FILL,
} = require('../../constants/inputs');

const QuitInput = require('../types/quit');
const ChangeColorInput = require('../types/changeColor');
const DrawCanvasInput = require('../types/drawCanvas');
const LineDrawInput = require('../types/lineDraw');
const RectangleDrawInput = require('../types/rectangleDraw');
const BucketFillInput = require('../types/bucketFill');

module.exports = new Map([
  [QUIT, (userInputArr) => new QuitInput(userInputArr)],
  [COLOR, (userInputArr) => new ChangeColorInput(userInputArr)],
  [CANVAS, (userInputArr) => new DrawCanvasInput(userInputArr)],
  [LINE, (userInputArr) => new LineDrawInput(userInputArr)],
  [RECTANGLE, (userInputArr) => new RectangleDrawInput(userInputArr)],
  [BUCKET_FILL, (userInputArr) => new BucketFillInput(userInputArr)],
]);
