var expect = require('chai').expect;
var request = require('request');
const app = require('../startServerWithMongo');

describe("Router and post function testing", () => {
    var url = 'http://localhost:3000';
    it("GET: index return 200 status code", (done) => {
        request(url, (err, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it("Get API testing", () => {
        url = 'http://localhost:3000/api/cats';
        it("GET: /api/cats return 200 status code", (done) => {
            request(url, (err, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
    it("POST API testing", (done) => {
        //{"_id":"65791410223c4d3b7d298917","title":"1","subTitle":"2","path":"","description":"aaaaaa","context":"aaaaaaa"}
        var postData = {
            title: "test-title",
            subTitle: "testSubtitle",
            description: "testDescription",
            context: "testContext"
        };
        var options = {
            url: 'http://localhost:3000/api/cat',
            method: 'POST',
            json: true,
            body: postData
        };
        request(options, function(err, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});