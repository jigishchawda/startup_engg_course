var fs = require('fs');
var outFile = "hello.txt";
var outString = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outFile, outString);
console.log("Script" + __filename + "\nwrote: " + outString + "\nto file " + outFile);

