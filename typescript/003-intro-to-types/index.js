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
function addWithTypeAlias(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
    console.log(`enum value is: ${state}`);
    switch (state) {
        case DoorState.Open:
            console.log("Door is Open");
            break;
        case DoorState.Closed:
            console.log("Door is closed");
            break;
    }
}
checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);
var DoorStateString;
(function (DoorStateString) {
    DoorStateString["OPEN"] = "OPEN";
    DoorStateString["CLOSED"] = "CLOSED";
})(DoorStateString || (DoorStateString = {}));
console.log(`OPEN = ${DoorStateString.OPEN}`);
console.log(`const Closed = ${10 /* DoorStateConst.OPEN */}`);
let array = ["123", "456", "789"];
delete array[0];
for (let i = 0; i < array.length; i++) {
    console.log(`array[${i}] = ${array[i]}`);
}
function checkAndPrintElement(arrEl) {
    if (arrEl === undefined) {
        console.log(`invalid arr element`);
    }
    else {
        console.log(`vaid array alement: ${arrEl}`);
    }
}
for (let i = 0; i < array.length; i++) {
    checkAndPrintElement(array[i]);
}
function printValues(a) {
    console.log(`a = ${a}`);
}
printValues(1);
printValues(null);
const value = 10;
const message = value > 10 ?
    "value is larger than 10" : "value is 10 or less than 10";
console.log(message);
