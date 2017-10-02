var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-min');

describe('next/min', function () {

  it('nx.min', function () {
    var arr = [2,3,4];

    assert.equal(
      nx.min(arr),
      2
    );
  });

});
