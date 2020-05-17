import {assert} from './assert';
import * as nodeAssert from 'assert';

describe('assert', () => {
  let stringOrNumber: string | number;

  it('should succeed', () => {
      assert(true);
      expect(true).toBeTrue();
  });

  it('should fail', () => {
    expect(() => assert(false)).toThrow();
  });

  it('should narrow type', () => {
    stringOrNumber = 'test';
    assert(typeof stringOrNumber === 'string');
    expect(typeof stringOrNumber).toEqual('string');
  });
});
