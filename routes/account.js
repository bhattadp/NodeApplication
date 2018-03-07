'use strict';
const accoutRestApi = require('../controllers/accountController');

module.exports = {
    addRoutes: addRoutes
};

function addRoutes(app) {
    app.post('/accounts', accoutRestApi.createAccount);
    app.put('/accounts/deposite', accoutRestApi.depositMoney);
    app.put('/accounts/withdraw', accoutRestApi.withdrawMoney);
    // app.get('/accounts/:id', getAccount);
    app.get('/accounts', accoutRestApi.getAllAccounts);
    app.delete('/accounts/:id', accoutRestApi.deleteAccount);
}