var expect  = require('chai').expect;
var request = require('request');

describe('Default page tests', function() {
    it('Check page contents', function(done) {
        request('http://localhost:3000' , function(error, response, body) {
            expect(response.body).to.include('User API');
            expect(response.body).to.include('This API for Users. You can find the API documentaion in the link below.');
            done();
        });
    });
})
