
var AccountAbstract = require('../models/account');

class SavingsAccount extends AccountAbstract{
    
    // constructor(name,number,balance)
    // {
    //     super(name,number,balance);
    // }

    withdrawMoney(withdrawAmount){
        if(this.balance - withdrawAmount < 3000){
                throw new TypeError("Need to keep minimum balance");
        }else {
            super.withdrawMoney(withdrawAmount);
        }
    }
}

module.exports = SavingsAccount;