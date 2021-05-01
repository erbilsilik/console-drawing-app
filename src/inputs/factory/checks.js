const {
  QUIT, COLOR, CANVAS, LINE, RECTANGLE, BUCKET_FILL,
} = require('../../constants/inputs');

const quitRegex = /^Q$/;
const colorRegex = /^C\s\w$/;
const canvasRegex = /^N\s\d+\s\d+$/;
const lineRegex = /^L\s\d+\s\d+\s\d+\s\d+$/;
const rectangleRegex = /^R\s\d+\s\d+\s\d+\s\d+$/;
const bucketFillRegex = /^B\s\d+\s\d+$/;

module.exports = new Map([
  [QUIT, quitRegex],
  [COLOR, colorRegex],
  [CANVAS, canvasRegex],
  [LINE, lineRegex],
  [RECTANGLE, rectangleRegex],
  [BUCKET_FILL, bucketFillRegex],
]);
