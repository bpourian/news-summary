var expect = require('chai').expect;
var request = require('request');

it('Homepage Test', function (done) {
  request('http://localhost:8080' , function (error, response, body) {
    expect(body).to.equal('This is a test page');
    done();
  })
})
