/*jshint node:true */

'use strict';

var unitScale = require('unit-scale');
var scaleToDecimalFactory = require('linear-scale-to-decimal');
var toDecimalFactory = require('to-decimal-arbitrary-precision');

module.exports = function factory(Decimal) {
  var scaleToDecimal = scaleToDecimalFactory(Decimal);
  var toDecimal = toDecimalFactory(Decimal);
  var unitScaleDecimal = scaleToDecimal(unitScale);

  return function coefficients(a, b) {
    var decimalA = toDecimal(a);
    var decimalB = toDecimal(b);

    return [unitScaleDecimal, [decimalB, decimalB.plus(decimalA)]];
  };
};
