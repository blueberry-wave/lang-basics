"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("adv-type inference");
let ab = {
    a: 1,
    b: "test"
};
let optAB = {};
let readAB = {
    a: 0,
    b: "B"
};
// readAB.b = "test";
let pickAbObject = {
    a: 1,
    b: "test"
};
let recordedCdVar = {
    c: 1,
    d: 1
};
logNumberOrString(1);
logNumberOrString("test");
// logNumberOrString<boolean>(true);
logNumberOrString("boolean does not extend number");
let keyA = getTupleStringAbc([1]);
console.log(`keyA = ${keyA}`);
let keyAb = getTupleStringAbc([1, "test"]);
console.log(`keyAb = ${keyAb}`);
let keyAbc = getTupleStringAbc([1, "test", true]);
console.log(`keyAbc = ${keyAbc}`);
compareVals(new Date(), new Date());
compareVals(1, new Date());
compareVals(1, 2);
compareVals("test", new Date());
compareVals("test", 1);
compareVals("test", "test");
testInferFromPropertyType("test");
testInferFromPropertyType(22);
testInferFromFnParam(1);
testInferFromFnParam("1");
testInferFromFnParam(false);
testInferredFromReturnType(1);
testInferredFromReturnType(false);
testInferredFromReturnType("0");
testingInferredFromArray("test");
testingInferredFromArray(1);
testingInferredFromArray(false);
let boolVal = true;
// let strVal: MyClasses.ExcludeStringAndNumber = "A";
// let numVal: MyClasses.ExcludeStringAndNumber = 1;
let strVal = "test";
let numVal = 1;
function logNumberOrString(input) {
    console.log(`logNumberOrString: ${input}`);
}
function getTupleStringAbc(tupleValue) {
    let [...tupleDestruct] = tupleValue;
    let returnStr = "|";
    for (let val of tupleDestruct) {
        returnStr += `${val}`;
    }
    return returnStr;
}
function compareVals(input, compareTo) {
    console.log(`input ${input} compareTo: ${compareTo}`);
}
function testInferFromPropertyType(arg) { }
function testInferFromFnParam(arg) { }
function testInferredFromReturnType(arg) { }
function testingInferredFromArray(args) { }
