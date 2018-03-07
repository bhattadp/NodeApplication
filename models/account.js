var stringHelper = require('../utility/stringHelper');

class AccountAbstract{
    constructor(accName,accNumber,accInitialBalance){
        if(new.target === AccountAbstract){
            throw new TypeError("AccountAbstract is an abstract class, can not contruct an object of it");
        }
        this.Name = accName;
        this.Number = accNumber;
        this.Balance = accInitialBalance;
        
    }
    getAccountDetails(){
        let accountDetails = "Account details - Name : %s Number : %s Balance : %s";
        return stringHelper.format(accountDetails,this.Name, this.Number, this.Balance);
    }

    depositMoney(depositAmount){
        if(depositAmount <= 0){
            throw new TypeError("You are trying to withdraw, please enter positive amount to be deposited");
        }else{
            this.Balance = this.Balance + depositAmount;
        }
        
    }
    withdrawMoney(withdrawAmount){
        this.Balance =  this.Balance -  withdrawAmount;
    }
}


module.exports = AccountAbstract;



