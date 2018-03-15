var models = require('../models');
var config = require('../config');
var logger = config.logger;
var appData = require('../utility/appData');
var accountService = require('../service/accountService');

exports.getAllAccounts = function (request, response) {
    //get the Account Details for each account and return
    // let accountDetails = appData.accountData.map(function (account) {
    //     return account.getAccountDetails()
    // });

    
    //return response.send(accountDetails);
    accountService.getAllAccounts()
        .then((accountDetails) => { return response.status(200).send(accountDetails) })
        .catch((err) => { return response.status(400).send(err) });
};

function validateCreateRequest(accountData) {
    return new Promise((resolve, reject) => {
        if (!accountData.accType ||
            !accountData.initialBalance ||
            !accountData.name) {
            reject("Please provide all the data");
        } else { resolve(accountData) }
    });
}

exports.createAccount = function (request, response) {
    validateCreateRequest(request.body)
        .then((accountData) => {
            return accountService.createAccount(accountData);
        }).then((newAccount) => {            
            return response.status(200).send("Account Created : " + newAccount.Number);
        }).catch((err) => { return response.status(400).send(err) });


    //Validate the request, if all the parameters are correct    
    // if (!request.body.accType || !request.body.initialBalance || request.initialBalance <= 0) {
    //     throw new TypeError("Please provide the Account Type and Initial Balance")
    // } else {//create account
    //     let accountData = request.body;

    //     let newAccount = accountService.createAccount(accountData);

    //     logger.info("Account created :" + newAccount.Number);
    //     return response.status(200).send("Account Created : " + newAccount.Number);

    //in idea scenarios this should be done by promise, or callback function
    // accountService.createAccount(accountData)
    //     .then(function (account) {
    //         response.send(account);
    //     })
    //     .catch(function (error) {
    //         logger.error(error);
    //         response.status(500).send({ 'message': error.toString() });
    //     });
    //}
};

exports.depositMoney = function (request, response) {
    let depositeDetails = request.body;
    let updatedAccount = accountService.depositMoney(depositeDetails);
    if (updatedAccount.Number) {
        return response.send("Updated Balance = " + updatedAccount.Balance);
    } else {
        throw new TypeError("Invalid Account");
    }
}

exports.withdrawMoney = function (request, response) {
    let withdrawDetails = request.body;
    let updatedAccount = accountService.withdrawMoney(withdrawDetails);
    if (updatedAccount.Number) {
        return response.send("Updated Balance = " + updatedAccount.Balance);
    } else {
        throw new TypeError("Invalid Account");
    }
}

//Call Back functionality
exports.deleteAccount = function (request, response) {
    let accNumber = request.params.id;
    accountService.deleteAccount(accNumber, function (err, data) {
        if (err) {
            logger.error("Account could not be found for deletion")
            throw new TypeError("Account could not be found for deletion");
        }
        else {
            return response.send("Account Deleted");
        }
    })
}




