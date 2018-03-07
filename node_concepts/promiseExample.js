const fs = require('fs');

function testpromise(){
    let readPromise = read();
    readPromise.then(function(result){
        console.log("File data = " + result);
        return result;
    },
    function(err){
        console.log("Error While reading file = "+ err);
    })
    .then(function(result){//chaining
        //return response or process further
        console.log("In second chain of promise, file data = " + result);
    })
};

function read(){
    return new Promise(function(resolve, reject){
        fs.readFile('./input.txt',function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

testpromise();

/*various packages are avalable for promise*/ 