/*jshint node:true, mocha:true */

'use strict';

require('should');

var adapter = require('floating-adapter');
var Decimal = require('linear-arbitrary-precision')(adapter);
var coefficients = require('../src/')(Decimal);
var isFunction = require('lodash.isfunction');

function scaleVals(scale) {
  return scale.map(Number);
}

describe('coefficients', function() {
  it('creates presets from coefficients', function() {
    coefficients(9/5, 32).map(scaleVals).should.eql([[0, 1], [32, 33.8]]);
    coefficients(-5, -2).map(scaleVals).should.eql([[0, 1], [-2, -7]]);
    coefficients(757, -567).map(scaleVals).should.eql([[0, 1], [-567, 190]]);
  });

  it('creates presets with Decimals', function() {
    coefficients(9/5, 32).every(function(scale) {
      return [scale[0].plus, scale[1].plus].every(isFunction);
    }).should.be.exactly(true);
  });
});
