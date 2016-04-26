var request = require('superagent');
var expect = require('expect.js');
var server = require('../server');

describe('REST API', function(){
  var app;
  before(function () {
    app = server(3000);
  });

  after(function () {
    app.close();
  });

 it ('Checks for the existence of the page', function(done){
   request.get('localhost:3000').end(function(res){
    expect(res).to.exist;
    expect(res.status).to.equal(200);
    expect(res.body).to.contain('world');
    done();
   });
  });
});
