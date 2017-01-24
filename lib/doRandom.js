var fs = require("fs");
var execute = require("../liri.js");

var log = require('./logData');

var getRandom = function(){
    console.log("doing what it says ..");

    var filePath = "random.txt";
    // var cmd;
    // var input;
    fs.readFile(filePath, "utf-8",function(err, data){
        if (!err){
            // console.log(data);
            var [cmd, input] = data.split(",");
            // console.log(cmd, input);
            if (cmd !== "do-what-it-says"){
                execute.executeCmd(cmd, input);
            };
            // log data
            log.logData("do-what-it-says", cmd + " " + input);

        }
    }); // closes readFile
    

}; // closes getRandom

// getRandom();

module.exports.getRandom = getRandom;