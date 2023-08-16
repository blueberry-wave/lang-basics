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
function printObject(obj) {
    console.log(`obj = ${obj}`);
}
printObject(1);
printObject("string value");
function addWithTypeGuard(arg1, arg2) {
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        console.log("arg 1 is of type string");
        return arg1 + arg2;
    }
    console.log("one or both of arg1 and arg2 is a string and so will be treated as a string");
    return arg1.toString() + arg2.toString();
}
console.log(` 1 + 2 = ${addWithTypeGuard(1, 2)}`);
console.log(` "1" + "2" = ${addWithTypeGuard("1", "2")}`);
console.log(` 1 + "2" = ${addWithTypeGuard(1, "2")}`);
