# linear-preset-by-coefficients

[![Build Status](https://travis-ci.org/javiercejudo/linear-preset-by-coefficients.svg)](https://travis-ci.org/javiercejudo/linear-preset-by-coefficients)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/linear-preset-by-coefficients/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/linear-preset-by-coefficients?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/linear-preset-by-coefficients/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/linear-preset-by-coefficients)

Generate linear presets from coefficients

## Install

    npm i linear-preset-by-coefficients

## Usage

```js
var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var preset = require('linear-preset-by-coefficients')(Decimal);

// all numbers are Decimal
preset(9/5, 32);  // => [[0, 1], [32, 33.8]]
```

## Related projects

- [linear-presets](https://github.com/javiercejudo/linear-presets): linear presets for common units.
- [linear-converter](https://github.com/javiercejudo/linear-converter): flexible linear converter.
