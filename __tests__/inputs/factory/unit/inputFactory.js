const InputFactory = require('../../../../src/inputs/factory/inputFactory');
const DrawCanvasInput = require('../../../../src/inputs/types/drawCanvas');
const LineDrawInput = require('../../../../src/inputs/types/lineDraw');
const RectangleDrawInput = require('../../../../src/inputs/types/rectangleDraw');
const ChangeColorInput = require('../../../../src/inputs/types/changeColor');
const BucketFillInput = require('../../../../src/inputs/types/bucketFill');
const QuitInput = require('../../../../src/inputs/types/quit');

describe('Input Factory', () => {
  test('draw canvas input', () => {
    const instance = (new InputFactory('N 20 4')).getInstance();
    expect(instance).toBeInstanceOf(DrawCanvasInput);
  });
  test('draw canvas input', () => {
    const instance = (new InputFactory('L 1 2 6 2')).getInstance();
    expect(instance).toBeInstanceOf(LineDrawInput);
  });
  test('draw canvas input -> 2', () => {
    const instance = (new InputFactory('L 6 3 6 4')).getInstance();
    expect(instance).toBeInstanceOf(LineDrawInput);
  });
  test('draw rectangle input', () => {
    const instance = (new InputFactory('R 16 1 20 3')).getInstance();
    expect(instance).toBeInstanceOf(RectangleDrawInput);
  });
  test('color change input', () => {
    const instance = (new InputFactory('C o')).getInstance();
    expect(instance).toBeInstanceOf(ChangeColorInput);
  });
  test('bucket fill input', () => {
    const instance = (new InputFactory('B 10 3')).getInstance();
    expect(instance).toBeInstanceOf(BucketFillInput);
  });
  test('quit input', () => {
    const instance = (new InputFactory('Q')).getInstance();
    expect(instance).toBeInstanceOf(QuitInput);
  });
});
