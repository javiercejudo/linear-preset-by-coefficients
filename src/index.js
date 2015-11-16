/*jshint node:true */

'use strict';

var lcFactory = require('linear-converter');
var unitScale = require('unit-scale');
var unitPreset = require('unit-preset');

module.exports = function factory(Decimal) {
  var lc = lcFactory(Decimal);

  return function coefficients(a, b) {
    var decimalA = new Decimal(a.toString());
    var decimalB = new Decimal(b.toString());

    return lc.composeConversions(
      [
        unitScale,
        [
          decimalB,
          decimalA.plus(decimalB)
        ]
      ],
      unitPreset
    );
  };
};
