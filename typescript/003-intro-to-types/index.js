"use strict";
console.log("003-intro-to-types");
let myBool = true;
let myNum = 1234;
let myString = "string";
let myStrArr = [];
myStrArr = ["first", "second", "third"];
let inferredString = "string";
let inferredInt = 1;
let inferredStrArr = ["first", "second"];
let inferredObj = {
    name: "Saad",
    age: 26
};
function calculate(a, b, c) {
    return (a * b) + c;
}
var calcVal = calculate(1, 2, 3);
console.log(`calculate() = ${calcVal}`);
let anyObj = "";
anyObj = {
    name: "Saad",
    age: 26
};
let anyObj2 = {
    name: "Saad",
    age: 26
};
anyObj = null;
const constVal = "this should not be changed";
// constVal = "updated";
