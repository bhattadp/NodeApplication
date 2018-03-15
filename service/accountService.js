'use strict';
var models = require('../models');
var appData = require('../utility/appData');


module.exports = {
    createAccount: createAccount,
    deleteAccount: deleteAccount,
    depositMoney: depositMoney,
    withdrawMoney: withdrawMoney,
    getAllAccounts: getAllAccounts
    // updateAccount: updateAccount,
    // getAccount: getAccount,
    // getAccounts: getAccounts,

};

function getAllAccounts() {
    return new Promise((resolve, reject) => {
        let accountDetails = appData.accountData.map(function (account) {
            return account.getAccountDetails()
        });
        resolve(accountDetails);
    });
};

function deleteAccount(accNumber, next) {
    let index = findAccountIndex(accNumber);
    if (index == -1) {
        return next(Error("acc number can not be 0"))
    }
    else {
        appData.accountData.splice(index, 1);
        return next(null, index);
    }
}

function findAccountIndex(accNumber) {
    return appData.accountData.findIndex(a => a.Number == accNumber);
};



function createAccount(accountToBeCreated) {
    //return accountRepository.createAccount(accountData);
    // let accNumber = getNextAccountNumber();
    // let account;
    // switch (accountToBeCreated.accType) {
    //     case 'c':
    //         account = new models.CurrentAccount(accountToBeCreated.name, accNumber, accountToBeCreated.initialBalance);
    //         break;
    //     case 's':
    //         account = new models.SavingsAccount(accountToBeCreated.name, accNumber, accountToBeCreated.initialBalance);

    //         break;
    // }
    // appData.accountData.push(account);
    // return account;
    return new Promise((resolve, reject) => {
        let accNumber = getNextAccountNumber();
        let account;
        switch (accountToBeCreated.accType) {
            case 'c':
                account = new models.CurrentAccount(accountToBeCreated.name, accNumber, accountToBeCreated.initialBalance);
                break;
            case 's':
                account = new models.SavingsAccount(accountToBeCreated.name, accNumber, accountToBeCreated.initialBalance);

                break;
        }
        appData.accountData.push(account);
        resolve(account);
    });
};

function getNextAccountNumber() {
    //Find max of account number and return + 1;
    let maxAccNumber = appData.accountData.reduce(function (previous, current) {
        //below code did not work as reduce expects accumulator of same type
        // return Math.max(previous.number, current.number)//if the number was stored as string, then we would have needed to convert parseInt before sending for the comparison
        return (previous.Number > current.Number) ? previous : current;
    });
    return maxAccNumber.Number + 1;
}

function depositMoney(depositeDetails) {
    let account = appData.accountData.find(a => a.Number == depositeDetails.accNumber);
    if (account.Number) {
        account.depositMoney(Number(depositeDetails.amount));
    }
    return account;
}

function withdrawMoney(withdrawDetails) {

    let account = appData.accountData.find(a => a.Number == withdrawDetails.accNumber);
    if (account.Number) {
        account.withdrawMoney(Number(withdrawDetails.amount));
    }
    return account;
}
