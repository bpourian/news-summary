var expect = require('chai').expect;
var request = require('request');

describe('Homepage feature test', function () {
  it('Homepage content test', function (done) {
    request('http://localhost:8080' , function (error, response, body) {
      expect(body).to.equal('This is a test page');
      done();
    });
  });

  it('Homepage status test', function (done) {
    request('http://localhost:8080', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
