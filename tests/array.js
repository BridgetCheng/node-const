var constant = require('../');
var should = require('should');

describe('constant', function() {
  describe('#array', function() {

    it('should change nothing', function(done) {
      var a = [1, 2, 3, 4, 5, 6];
      var b = [1, 2, 3, 4, 5, 6];

      constant(a);

      for (var i = a.length - 1; i >= 0; i--) {
        a[i] = i * 2;
      }

      should.deepEqual(a, b);
      done();
    });
  });
});
