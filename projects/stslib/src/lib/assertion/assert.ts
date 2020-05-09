import * as nodeAssert from 'assert';

export function assert(condition: unknown, msg?: string): asserts condition {
  if (!condition) {
    nodeAssert.fail(msg);
  }
}
