var globalVariable = "Global Scope";
console.log("Global Scope Variable = " + globalVariable);

var variableDeclarationWithHoisting =  function(){
    console.log("Global Scope Variable = " + globalVariable);

    var globalVariable = "Global variable defined in local scope, hoisting";
    console.log("Global Scope Variable with hoisting = " + globalVariable);
}
var variableDeclarationInLocalScope = function(){
    {
        let localScope = "Local Scope variable";
        console.log("Local Scope Variable = " + localScope);
    }
    //local scope is not available here
}

var globalVariableBehavior = function(){
    console.log("Global Scope Variable = " + globalVariable);
    globalVariable = "Global variable changed inside function";
    console.log("Global Scope Variable = " + globalVariable);
}
console.log("Global Scope Variable = " + globalVariable);

variableDeclarationWithHoisting();
variableDeclarationInLocalScope();
globalVariableBehavior();