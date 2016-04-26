var request = require('superagent');
var expect = require('expect.js');
var app = require('../server/server.js');

describe('REST API', function(){
  var server;
  before(function (done) {
    server = app.listen(done);
  });

  after(function (done) {
    app.close(done);
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
