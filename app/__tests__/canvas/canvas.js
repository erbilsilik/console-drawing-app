const SingletonCanvas = require('../../canvas/canvas');
const { DEFAULT_EMPTY_COLOR } = require('../../constants/defaults');

test('test 1', () => {
  const canvas = SingletonCanvas.getInstance();
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
      'x', 'x', 'x', 'x', 'x'
    ],
    [
      'x', 'x', 'x', 'x', 'x',
      'x', 'o', 'o', 'o', 'o',
      'o', 'o', 'o', 'o', 'o',
      'x', DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, 'x'
    ],
    [
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      'x', 'o', 'o', 'o', 'o',
      'o', 'o', 'o', 'o', 'o',
      'x', 'x', 'x', 'x', 'x'
    ],
    [
      DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR, DEFAULT_EMPTY_COLOR,
      'x', 'o', 'o', 'o', 'o',
      'o', 'o', 'o', 'o', 'o',
      'o', 'o', 'o', 'o', 'o'
    ]
  ];
  console.log(canvas.image);
  expect(canvas.image).toEqual(result);
});
