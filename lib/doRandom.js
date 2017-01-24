var fs = require("fs");
var execute = require("../liri.js");

var getRandom = function(){
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
            }

        }
    }); // closes readFile
    

}; // closes getRandom

// getRandom();

module.exports.getRandom = getRandom;