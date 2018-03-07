
function stringOperations(){
    let str = "This is a test string";
    
    console.log(str.indexOf("is"));
    console.log(str.substr(4));
    console.log(str.slice(2,6));
    console.log(str.split(" "));
    str.includes("est")//true
    str.includes("Est")//false

    //all comparison is case sensitive
}