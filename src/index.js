/*jshint node:true */

'use strict';

var unitScale = require('unit-scale');
var presetToDecimalFactory = require('linear-preset-to-decimal');

module.exports = function factory(Decimal) {
  var presetToDecimal = presetToDecimalFactory(Decimal);

  return function coefficients(a, b) {
    var decimalA = new Decimal(a.toString());
    var decimalB = new Decimal(b.toString());

    return presetToDecimal([unitScale, [decimalB, decimalB.plus(decimalA)]]);
  };
};
