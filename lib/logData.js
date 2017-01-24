const fs = require("fs");
var moment = require("moment");


var logData = function(input, output){
    const logFile = "./log.txt";
    var data = `====================================== \n
${moment().format("MMMM Do YYYY, h:mm:ss a")} \n
input ==> ${input}
output ==> \n${output}\n
================ END =================\n`;
    fs.appendFile(logFile, data, "utf-8", (err)=>{
        if (err){
            console.log(err);
        }
    });
}; // closes logData 

// logData("hello world");
// logData("hello world again");

// logData("my-tweets", "tweet1: yo yo yo, tweet2: yo mamma");

module.exports.logData = logData;