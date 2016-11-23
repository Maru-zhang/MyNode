/**
 * Created by master on 2016/11/23.
 */

var fs = require("fs");

var data = fs.readdirSync("test.txt");

console(data.toSource());
console.log("fuck to the end !");