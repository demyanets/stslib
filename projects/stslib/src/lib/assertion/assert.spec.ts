import {assert} from './assert';

describe('assert', () => {
  it('should succeed', () => {
      assert(true);
      expect(true).toBeTrue();
  });

  it('should trow exception', () => {
    expect(() => assert(false)).toThrowError();
  });
});
