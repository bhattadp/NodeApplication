'use strict'

//var models = require('../models');
//var SavingsAccount = require('../models');
var models = require('../models');
//var SavingsAccount = require('../models/savingAccount');

var accountData = [];
accountData.push(new models.SavingsAccount("account1",1,2000));
accountData.push(new models.CurrentAccount("account2",2,2000));
// accountData.push(new models.SavingAccount("pqr",1,1500));
// accountData.push(new models.CurrentAccount("ghi",2,2000));
// accountData.push(new models.SavingAccount("xyz",1,500));
// accountData.push(new models.CurrentAccount("mno",2,2000));

module.exports.accountData = accountData;