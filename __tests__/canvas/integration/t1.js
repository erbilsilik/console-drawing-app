const Canvas = require('../../../src/canvas/canvas');
const { DEFAULT_EMPTY_COLOR } = require('../../../src/constants/defaults');

test('test 1 -> E letter in box with filled outside', () => {
  const canvas = new Canvas();
  canvas.width = 50;
  canvas.height = 10;
  canvas.drawCanvas();
  canvas.drawLine(20, 2, 30, 2);
  canvas.drawLine(20, 5, 30, 5);
  canvas.drawLine(20, 8, 30, 8);
  canvas.drawLine(10, 1, 40, 9);
  canvas.drawRectangle(4, 1, 45, 9);
  canvas.markColor = 'q';
  canvas.bucketFill(40, 3);
  const result = [
    [
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR
    ],
    [
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, 'x',
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'q', 'q', 'q', 'q', 'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR
    ],
    [
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, 'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'q', 'q', 'q', 'q', 'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR
    ],
    [
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, 'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'q', 'q', 'q', 'q', 'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR
    ],
    [
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, 'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'q', 'q', 'q', 'q', 'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR
    ],
    [
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, 'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'q', 'q', 'q', 'q', 'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR
    ],
    [
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, 'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'q', 'q', 'q', 'q', 'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR
    ],
    [
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, 'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'q', 'q', 'q', 'q', 'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR
    ],
    [
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR
    ],
    new Array(canvas.width).fill(DEFAULT_EMPTY_COLOR)
  ];
  console.table(canvas.image);
  expect(canvas.image).toEqual(result);
});
