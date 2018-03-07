'use strict'

exports.testHelloWorldGet = function(request,response){
    return response.send("Hello World!!!");
};

exports.testHelloWorldGetWithParameter = function(request,response){
    return response.send("Good " + request.params.timeOfTheDay);
};

exports.testHelloWorldPOST = function(request,response){
    return response.send(request.body);
};

exports.testHelloWorldPUT = function(request,response){
    return response.send(request.body);
};

exports.testHelloWorldDELETE = function(request,response){
    return response.send(request.body);
}