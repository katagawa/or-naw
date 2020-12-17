/* vim:set expandtab ff=unix fenc=utf-8 ts=2 */
/*! index.js */
/* Copyright (c) 2010-2020 <katagawa@gmail.com>
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
/* globals define, module, self */
/* jshint asi: true */

(function (root, factory) {
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.OrNaw = factory()
  }
}(typeof self !== 'undefined' ? self : this, function () {
  /**
   * Type checks and assertions
   * @class OrNaw
   * @constructor
   */
  function OrNaw () {
  }

  /**
   * @param {?*} [o] The variable to test
   * @param {string} [label] Display name for the variable, to be shown in error
   *     messages. Defaults to "Argument"
   * @static
   * @throws {ReferenceError} if `o` is undefined
   * @throws {TypeError} if `o` is not an `Array`
   */
  OrNaw.arrayOrNaw = function (o, label) {
    OrNaw.definedOrNaw(o, label)

    if (!OrNaw.isString(label)) {
      label = 'Argument'
    }

    if (!Array.isArray(o)) {
      throw new TypeError(label + ' is not an array')
    }
  }

  /**
   * @param {?*} [o] The variable to test
   * @param {string} [label] Display name for the variable, to be shown in error
   *     messages. Defaults to "Argument"
   * @static
   * @throws {ReferenceError} if `o` is undefined
   * @throws {TypeError} if `o` is not a `boolean`
   */
  OrNaw.booleanOrNaw = function (o, label) {
    OrNaw.definedOrNaw(o, label)

    if (!OrNaw.isString(label)) {
      label = 'Argument'
    }

    if (!OrNaw.isBoolean(o)) {
      throw new TypeError(label + ' is not a boolean')
    }
  }

  /**
   * @param {?*} [o] The variable to test
   * @param {string} [label] Display name for the variable, to be shown in error
   *     messages. Defaults to "Argument"
   * @static
   * @throws {ReferenceError} if `o` is undefined
   * @throws {TypeError} if `o` is not a `Date`
   */
  OrNaw.dateOrNaw = function (o, label) {
    OrNaw.definedOrNaw(o, label)

    if (!OrNaw.isString(label)) {
      label = 'Argument'
    }

    if (!OrNaw.isDate(o)) {
      throw new TypeError(label + ' is not a Date')
    }
  }

  /**
   * @param {?*} [o] The variable to test
   * @param {string} [label] Display name for the variable, to be shown in error
   *     messages. Defaults to "Argument"
   * @static
   * @throws {ReferenceError} if `o` is undefined
   */
  OrNaw.definedOrNaw = function (o, label) {
    if (!OrNaw.isString(label)) {
      label = 'Argument'
    }

    if (OrNaw.isUndefined(o)) {
      throw new ReferenceError(label + ' is undefined')
    }
  }

  /**
   * @param {?*} [o] The variable to test
   * @param {string} [label] Display name for the variable, to be shown in error
   *     messages. Defaults to "Argument"
   * @static
   * @throws {ReferenceError} if `o` is undefined
   * @throws {TypeError} if `o` is not a `Element`
   */
  OrNaw.elementOrNaw = function (o, label) {
    OrNaw.definedOrNaw(o, label)

    if (!OrNaw.isString(label)) {
      label = 'Argument'
    }

    if (!OrNaw.isElement(o)) {
      throw new TypeError(label + ' is not a Element')
    }
  }

  /**
   * @param {?*} [o] The variable to test
   * @param {string} [label] Display name for the variable, to be shown in error
   *     messages. Defaults to "Argument"
   * @static
   * @throws {ReferenceError} if `o` is undefined
   * @throws {TypeError} if `o` is not a `Function`
   */
  OrNaw.functionOrNaw = function (o, label) {
    OrNaw.definedOrNaw(o, label)

    if (!OrNaw.isString(label)) {
      label = 'Argument'
    }

    if (!OrNaw.isFunction(o)) {
      throw new TypeError(label + ' is not a function')
    }
  }

  /**
   * @param {?*} [o] The variable to test
   * @returns `true` if `o` is of type `boolean`. Otherwise, returns `false`.
   * @static
   */
  OrNaw.isBoolean = function (o) {
    return (typeof o) === 'boolean'
  }

  /**
   * @param {?*} [o] The variable to test
   * @returns `true` if `o` is an instance of `Date`. Otherwise, returns
   *     `false`.
   * @static
   */
  OrNaw.isDate = function (o) {
    return Object.prototype.toString.call(o) === '[object Date]'
  }

  /**
   * @param {?*} [o] The variable to test
   * @returns `true` if `o` is defined. Otherwise, returns `false`.
   * @static
   */
  OrNaw.isDefined = function (o) {
    return (typeof o) !== 'undefined'
  }

  /**
   * @param {?*} [o] The variable to test
   * @returns `true` if `o` is a DOM `Element`. Otherwise, returns `false`.
   * @static
   */
  OrNaw.isElement = function (o) {
    return (
      OrNaw.isObject(o) &&
      Number.isFinite(o.nodeType) &&
      (o.nodeType === 1)
    )
  }

  /**
   * @param {?*} [o] The variable to test
   * @returns `true` if `f` is a `function`. Otherwise, returns `false`.
   * @static
   */
  OrNaw.isFunction = function (o) {
    return (typeof o) === 'function'
  }

  /**
   * @param {?*} [o] The variable to test
   * @returns `true` if `o` is an `object` and non-`null`. Otherwise, returns
   *     `false`.
   * @static
   */
  OrNaw.isObject = function (o) {
    return ((typeof o) === 'object') && (o !== null)
  }

  /**
   * @param {?*} [o] The variable to test
   * @returns `true` if `s` is a `string`. Otherwise, returns `false`.
   * @static
   */
  OrNaw.isString = function (o) {
    return (typeof o) === 'string'
  }

  /**
   * @param {?*} [o] The variable to test
   * @returns `true` if `o` is undefined. Otherwise, returns `false`.
   * @static
   */
  OrNaw.isUndefined = function (o) {
    return (typeof o) === 'undefined'
  }

  /**
   * @param {?*} [o] The variable to test
   * @param {string} [label] Display name for the variable, to be shown in error
   *     messages. Defaults to "Argument"
   * @static
   * @throws {ReferenceError} if `o` is undefined
   * @throws {TypeError} if `o` is not a `number`
   */
  OrNaw.numberOrNaw = function (o, label) {
    OrNaw.definedOrNaw(o, label)

    if (!OrNaw.isString(label)) {
      label = 'Argument'
    }

    if (!Number.isFinite(o)) {
      throw new TypeError(label + ' is not a number')
    }
  }

  /**
   * @param {?*} [o] The variable to test
   * @param {string} [label] Display name for the variable, to be shown in error
   *     messages. Defaults to "Argument"
   * @static
   * @throws {RangeError} if `o` is `null`
   * @throws {ReferenceError} if `o` is undefined
   * @throws {TypeError} if `o` is not an `Object`
   */
  OrNaw.objectOrNaw = function (o, label) {
    OrNaw.definedOrNaw(o, label)

    if (!OrNaw.isString(label)) {
      label = 'Argument'
    }

    if (o === null) {
      throw new RangeError(label + ' is null')
    }

    if (!OrNaw.isObject(o)) {
      throw new TypeError(label + ' is not an object')
    }
  }

  /**
   * @param {?*} [o] The variable to test
   * @param {string} [label] Display name for the variable, to be shown in error
   *     messages. Defaults to "Argument"
   * @static
   * @throws {ReferenceError} if `o` is undefined
   * @throws {TypeError} if `o` is not a string
   */
  OrNaw.stringOrNaw = function (o, label) {
    OrNaw.definedOrNaw(o, label)

    if (!OrNaw.isString(label)) {
      label = 'Argument'
    }

    if (!OrNaw.isString(o)) {
      throw new TypeError(label + ' is not a string')
    }
  }

  /**
   * @param {?*} [o] The variable to test
   * @param {string} [label] Display name for the variable, to be shown in error
   *     messages. Defaults to "Argument"
   * @static
   * @throws {RangeError} if `o` is defined
   */
  OrNaw.undefinedOrNaw = function (o, label) {
    if (!OrNaw.isString(label)) {
      label = 'Argument'
    }

    if (OrNaw.isDefined(o)) {
      throw new RangeError(label + ' is defined')
    }
  }

  return OrNaw
}))

/*
 * Local Variables:
 * coding: utf-8-unix
 * indent-tabs-mode: nil
 * mode: js
 * tab-width: 2
 * End:
 */
