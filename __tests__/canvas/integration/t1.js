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
  canvas.drawLine(19, 2, 19, 8);
  canvas.drawRectangle(4, 1, 45, 9);
  canvas.markColor = 'q';
  canvas.bucketFill(40, 3);
  const d = DEFAULT_EMPTY_COLOR;
  const result = [
    [
      d, d, d, 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', d, d, d,
      d, d
    ],
    [
      d, d, d, 'x', d, d,
      d, d,
      d, d, d, d, d,
      d, d, d,
      d, d, 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'q', 'q',
      'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q',
      'q', 'q', 'q', 'q', 'x', d, d, d,
      d, d
    ],
    [
      d, d, d, 'x', d, d,
      d, d,
      d, d, d, d, d,
      d, d, d,
      d, d, 'x', 'q', 'q', 'q', 'q', 'q',
      'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q',
      'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q',
      'q', 'q', 'q', 'q', 'x', d, d, d,
      d, d
    ],
    [
      d, d, d, 'x', d, d,
      d, d,
      d, d, d, d, d,
      d, d, d,
      d, d, 'x', 'q', 'q', 'q', 'q', 'q',
      'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q',
      'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q',
      'q', 'q', 'q', 'q', 'x', d, d, d,
      d, d
    ],
    [
      d, d, d, 'x', d, d,
      d, d,
      d, d, d, d, d,
      d, d, d,
      d, d, 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'q', 'q',
      'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q',
      'q', 'q', 'q', 'q', 'x', d, d, d,
      d, d
    ],
    [
      d, d, d, 'x', d, d,
      d, d,
      d, d, d, d, d,
      d, d, d,
      d, d, 'x', 'q', 'q', 'q', 'q', 'q',
      'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q',
      'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q',
      'q', 'q', 'q', 'q', 'x', d, d, d,
      d, d
    ],
    [
      d, d, d, 'x', d, d,
      d, d,
      d, d, d, d, d,
      d, d, d,
      d, d, 'x', 'q', 'q', 'q', 'q', 'q',
      'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q',
      'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q',
      'q', 'q', 'q', 'q', 'x', d, d, d,
      d, d
    ],
    [
      d, d, d, 'x', d, d,
      d, d,
      d, d, d, d, d,
      d, d, d,
      d, d, 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'q', 'q',
      'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q',
      'q', 'q', 'q', 'q', 'x', d, d, d,
      d, d
    ],
    [
      d, d, d, 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',
      'x', 'x', 'x', 'x', 'x', d, d, d,
      d, d
    ],
    new Array(canvas.width).fill(d)
  ];
  expect(canvas.image).toEqual(result);
});
