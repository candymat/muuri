/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

let id = 0;

/**
 * Returns a unique numeric id (increments a base value on every call).
 * @returns {number}
 */
export default function createUid() {
  return ++id;
}