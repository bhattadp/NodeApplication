var AccountAbstract = require('./account');
//var AccountAbstract = require('../models/account');

class CurrentAccount extends AccountAbstract{
    
    withdrawMoney(withdrawAmount){
        if(this.Balance - withdrawAmount < CurrentAccount.MinAmount){
                throw new TypeError("Need to keep minimum balance");
        }else {
            super.withdrawMoney(withdrawAmount);
        }
    }
}

CurrentAccount.MinAmount = 1000;
module.exports = CurrentAccount;