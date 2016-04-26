var request = require('superagent');
var expect = require('expect.js');

describe('REST API', function(){
 it ('Checks for the existence of the page', function(done){
   request.get('localhost:3000').end(function(res){
    expect(res).to.exist;
    expect(res.status).to.equal(200);
    expect(res.body).to.contain('world');
    done();
   });
  });
});
