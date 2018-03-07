var request = require("request");
var testConfig = require('../testConfig.json');
//var base_url = "http://localhost:3000/";
var base_url = testConfig.baseURL;

describe("Hello World Server", function () {
    describe("GET /", function () {
        it("returns status code 200", function (done) {
            request.get(base_url, function (error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("returnsresponse body", function (done) {
            request.get(base_url, function (error, response, body) {
                expect(body).toBe("Hello World!!!");
                done();
            });
        });        
    });
});

