/*jshint node:true */

'use strict';

var unitScale = require('unit-scale');
var presetToDecimalFactory = require('linear-preset-to-decimal');
var toDecimalFactory = require('to-decimal-arbitrary-precision');

module.exports = function factory(Decimal) {
  var presetToDecimal = presetToDecimalFactory(Decimal);
  var toDecimal = toDecimalFactory(Decimal);

  return function coefficients(a, b) {
    var decimalA = toDecimal(a);
    var decimalB = toDecimal(b);

    return presetToDecimal([unitScale, [decimalB, decimalB.plus(decimalA)]]);
  };
};
