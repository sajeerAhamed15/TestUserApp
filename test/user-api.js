const expect  = require('chai').expect;
const request = require('request');

describe('User API  tests', function() {
    it('Get all users retruns 200', function(done) {
        request('http://localhost:3000/user' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    
    it('Unknown path gives 404 error page', function(done) {
        request('http://localhost:3000/fake/path' , function(error, response, body) {
            expect(response.body).to.include('Status Code');
            expect(response.body).to.include('404');
            done();
        });
    });
})
