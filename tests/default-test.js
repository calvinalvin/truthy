var assert = require("better-assert")
  , truthy = require('../lib/truthy')();


describe('truthy test objects', function (done) {
  it('empty object {} equates to true', function (done) {  
    assert(truthy({}) === true);
    done();
  }); 

  it('non-empty object { foo: \"bar\" } equates to true', function (done) {  
    assert(truthy({ foo: 'bar' }) === true);
    done();
  }); 
});

describe('truthy test functions', function (done) {
  it('function() {} equates to true', function (done) {  
    assert(truthy(function() {}) === true);
    done();
  }); 
});

describe('truthy test arrays', function (done) {
  it('empty array [] equates to true', function (done) {  
    assert(truthy([]) === true);
    done();
  }); 

  it('non-empty array [\"foo\", \"bar\"] equates to true', function (done) {  
    assert(truthy(["foo", "bar"]) === true);
    done();
  }); 
});

describe('truthy test undefined', function() {
  it('null equates to false', function (done) {  
    assert(truthy(undefined) === false);
    done();
  }); 
});

describe('truthy test null', function() {
  it('null equates to false', function (done) {  
    assert(truthy(null) === false);
    done();
  }); 
});

describe('truthy test numbers', function() {
  it('NaN equates to false', function (done) {
    assert(truthy(NaN) === false);
    done();
  });

  it('0 equates to false', function (done) {  
    assert(truthy(0) === false);
    done();
  }); 

  it('1 equates to true', function (done) {
    assert(truthy(1) === true);
    done();
  });

  it('Any number > 1 equates to true', function (done) {  
    assert(truthy(2) === true);
    done();
  }); 

  it('Any number < 0 equates to true', function (done) {  
    assert(truthy(-1) === true);
    done();
  }); 
});

describe('truthy test strings', function() {
  it('empty string equates to false', function (done) {  
    assert(truthy('') === false);
    done();
  }); 

  it('the string \"false\" equates to true because it is a string', function (done) {
    assert(truthy('false') === true);
    done();
  });

  it('the string \"true\" equates to true', function (done) {
    assert(truthy('true') === true);
    done();
  });

  it('the string \"abc\" equates to true', function (done) {
    assert(truthy('abc') === true);
    done();
  }); 
});

describe('truthy test booleans', function() {
  it('boolean true primitive equates to true', function (done) {  
    assert(truthy(true) === true);
    done();
  }); 

  it('boolean false primitive equates to false', function (done) {  
    assert(truthy(false) === false);
    done();
  }); 

  it('Boolean(false) primitive equates to false', function (done) {  
    assert(truthy(Boolean(false)) === false);
    done();
  }); 

  it('Boolean(true) primitive equates to true', function (done) {  
    assert(truthy(Boolean(true)) === true);
    done();
  }); 

  it('new Boolean(true) object equates to true', function (done) {  
    assert(truthy(new Boolean(true)) === true);
    done();
  }); 

  it('new Boolean(false) object equates to false', function (done) {  
    assert(truthy(new Boolean(false)) === false);
    done();
  }); 

  it('new Boolean(\"true\") object equates to true because you are passing string', function (done) {  
    assert(truthy(new Boolean("true")) === true);
    done();
  }); 

  it('new Boolean(\"false\") object equates to true because you are passing string', function (done) {
    assert(truthy(new Boolean("false")) === true);
    done();
  }); 

  it('Boolean(0) primitive equates to false', function (done) {  
    assert(truthy(Boolean(0)) === false);
    done();
  }); 

  it('Boolean(1) primitive equates to true', function (done) {  
    assert(truthy(Boolean(1)) === true);
    done();
  }); 

  it('new Boolean(0) object equates to false', function (done) {  
    assert(truthy(new Boolean(0)) === false);
    done();
  }); 

  it('new Boolean(1) object equates to true', function (done) {  
    assert(truthy(new Boolean(1)) === true);
    done();
  }); 

  it('new Boolean(0) object equates to false', function (done) {  
    assert(truthy(new Boolean(0)) === false);
    done();
  }); 

  it('new Boolean(1) object equates to true', function (done) {  
    assert(truthy(new Boolean(1)) === true);
    done();
  }); 

  it('new Boolean("0") object equates to true because you are passing a string', function (done) {  
    assert(truthy(new Boolean("0")) === true);
    done();
  }); 

  it('new Boolean("1") object equates to true because you are passing a string', function (done) {  
    assert(truthy(new Boolean("1")) === true);
    done();
  }); 

  it('Boolean("abc") primitive equates to true because you are passing a string', function (done) {  
    assert(truthy(Boolean("abc")) === true);
    done();
  }); 

  it('new Boolean("abc") object equates to true because you are passing a string', function (done) {  
    assert(truthy(new Boolean("abc")) === true);
    done();
  }); 

});