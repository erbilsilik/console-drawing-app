const Canvas = require('../../../src/canvas/canvas');
const {
  DEFAULT_EMPTY_COLOR, DEFAULT_WIDTH, DEFAULT_HEIGHT, DEFAULT_MARK_COLOR,
} = require('../../../src/constants/defaults');

let canvas;

describe('Canvas', () => {
  beforeEach(() => {
    canvas = new Canvas();
  });

  afterEach(() => {
    canvas = null;
  });

  test('canvas instance', () => {
    expect(canvas).toBeDefined();
    expect(canvas.image.length).toEqual(0);
    expect(canvas.width).toEqual(DEFAULT_WIDTH);
    expect(canvas.height).toEqual(DEFAULT_HEIGHT);
    expect(canvas.markColor).toEqual(DEFAULT_MARK_COLOR);
  });

  test('canvas drawing', () => {
    canvas.width = 20;
    canvas.height = 4;
    canvas.drawCanvas();
    const blankImage = [];
    for (let i = 0; i < canvas.height; i++) {
      blankImage.push([]);
      for (let j = 0; j < canvas.width; j++) {
        blankImage[i][j] = DEFAULT_EMPTY_COLOR;
      }
    }
    expect(canvas.image).toEqual(blankImage);
  });

  test('line drawing', () => {
    canvas.width = 20;
    canvas.height = 4;
    canvas.drawLine(1, 2, 6, 2);
    const result = [
      [],
      [
        DEFAULT_MARK_COLOR,
        DEFAULT_MARK_COLOR,
        DEFAULT_MARK_COLOR,
        DEFAULT_MARK_COLOR,
        DEFAULT_MARK_COLOR,
        DEFAULT_MARK_COLOR,
      ],
      [],
      [],
    ];
    expect(canvas.image).toEqual(result);
  });

  test('line drawing 2', () => {
    canvas.width = 20;
    canvas.height = 4;
    canvas.drawLine(6, 3, 6, 4);
    const result = [[], [], [DEFAULT_MARK_COLOR], [DEFAULT_MARK_COLOR]];
    expect(canvas.image).toEqual(result);
  });

  test('rectangle drawing', () => {
    canvas.width = 20;
    canvas.height = 4;
    canvas.drawRectangle(16, 1, 20, 3);
    const result = [
      [
        ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ',
        'x', 'x', 'x', 'x', 'x',
      ],
      [
        ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ',
        'x', ' ', ' ', ' ', 'x',
      ],
      [
        ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ',
        'x', 'x', 'x', 'x', 'x',
      ],
      [
        ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ',
      ],
    ];
    expect(canvas.image).toEqual(result);
  });
});
