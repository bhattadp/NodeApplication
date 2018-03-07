//const AccountAbstract = require('../models/account');
const accountModel = require('../../models');

describe('Account Abstract Class', function () {
    describe('Create instance', function () {
        it('should throw error', function () {
            let createInstance = function(){
                new accountModel.AccountAbstract('puja', 1, 2000);
            };
            expect(createInstance()).toThrowError(TypeError);            
        });
    });
});

// describe('Saving Account Class', function () {
//     describe('Create instance', function () {
//         it('should create instance', function () {
//             let accountCreated = new accountModel.SavingsAccount('puja', 1, 2000);            
//             expect(accountCreated.Name).toBe("puja")
//             .expect(accountCreated.Number).toBe(1);
//         });
//     });
// });

