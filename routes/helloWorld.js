'use strict';
const helloWorldApi = require('../controllers/helloWorldController');

module.exports = {
    addRoutes: addRoutes
};

function addRoutes(app) {
    app.get('/', helloWorldApi.testHelloWorldGet);
    app.get('/home/:timeOfTheDay', helloWorldApi.testHelloWorldGetWithParameter);
    app.post('/',helloWorldApi.testHelloWorldPOST);
    app.delete('/',helloWorldApi.testHelloWorldDELETE);
    app.put('/',helloWorldApi.testHelloWorldPUT);
}