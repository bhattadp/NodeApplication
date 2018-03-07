//javascript/node js Date object's month component starts from 0

dateformat = require('dateformat');

function dateExamples(){
    let now = new Date();// current date time
    let date = new Date("2017-02-01");//passing the date in YYYY-MM-DD format

    //json date
    let jsonDate = now.toJSON();
    let then = new Date(jsonDate);

    //new Date(year,month,day,hour,minute,second,millisecond);

    //This is 28 Feb, 2018, 23 hours 60 mins, this will automatically be converted in 1 st March 2018
    date = new Date(2018,1,28,23,60,0,0);
    date.getFullYear();
    date.getHours();
    date.setDate(5);

    //Various formats are available
    console.log(dateformat(date, "dddd, mmmm, ds, yyyy, h:MM:ss TT"));
    
}

dateExamples();

