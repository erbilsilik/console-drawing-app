const Canvas = require('../../../src/canvas/canvas');
const { DEFAULT_EMPTY_COLOR } = require('../../../src/constants/defaults');

test('test 2 -> Sample I/O', () => {
  const canvas = new Canvas();
  canvas.width = 20;
  canvas.height = 4;
  canvas.drawCanvas();
  canvas.drawLine(1, 2, 6, 2);
  canvas.drawLine(6, 3, 6, 4);
  canvas.drawRectangle(16, 1, 20, 3);
  canvas.markColor = 'o';
  canvas.bucketFill(10, 3);
  const result = [
    [
      'o', 'o', 'o', 'o', 'o',
      'o', 'o', 'o', 'o', 'o',
      'o', 'o', 'o', 'o', 'o',
      'x', 'x', 'x', 'x', 'x',
    ],
    [
      'x', 'x', 'x', 'x', 'x',
      'x', 'o', 'o', 'o', 'o',
      'o', 'o', 'o', 'o', 'o',
      'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, 'x',
    ],
    [
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      'x', 'o', 'o', 'o', 'o',
      'o', 'o', 'o', 'o', 'o',
      'x', 'x', 'x', 'x', 'x',
    ],
    [
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      'x', 'o', 'o', 'o', 'o',
      'o', 'o', 'o', 'o', 'o',
      'o', 'o', 'o', 'o', 'o',
    ],
  ];
  console.table(canvas.image);
  expect(canvas.image).toEqual(result);
});
