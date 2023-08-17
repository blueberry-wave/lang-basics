"use strict";
console.log("004-typescript-objects");
var objectA = {
    nestedProperty: {
        name: "nestedProperty name"
    }
};
function printNestedObj(obj) {
    if (obj != undefined
        && obj.nestedProperty != undefined
        && obj.nestedProperty.name) {
        console.log(`obj.nestedProperty.name = ${obj.nestedProperty.name}`);
    }
    else {
        console.log(`name not found or undefined`);
    }
}
function printNestedObjChain(obj) {
    var _a;
    if ((_a = obj === null || obj === void 0 ? void 0 : obj.nestedProperty) === null || _a === void 0 ? void 0 : _a.name) {
        console.log(`obj.nestedProperty.name = ${obj.nestedProperty.name}`);
    }
    else {
        console.log(`name not found or undefined`);
    }
}
printNestedObjChain(undefined);
printNestedObjChain({
    aProperty: "another property"
});
printNestedObjChain({
    nestedProperty: {
        name: null
    }
});
printNestedObjChain({
    nestedProperty: {
        name: "nestedPropertyName"
    }
});
function nullishCheck(a) {
    console.log(`a : ${a !== null && a !== void 0 ? a : 'undefined or null'}`);
}
nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);
function testNullOperands(a, b) {
    let addResult = a + (b !== null && b !== void 0 ? b : 0);
    console.log(addResult);
}
console.log("aValue = " + aValue);
var aValue = 1;
let structObj = {
    name: "myObject",
    properties: {
        id: 1,
        type: "AnObject"
    }
};
function printObjectType(a) {
    console.log(`a: ${JSON.stringify(a)}`);
}
printObjectType(structObj);
// printObjectType("this is a string");
let a = "test";
let aNumber = 2;
aNumber = a;
let u = "an unknown";
u = 1;
let aNumber2;
// aNumber2 = u;
aNumber2 = u;
function alwaysThrows() {
    throw new Error("this will always throw");
    // return -1;
}
var myEnum2;
(function (myEnum2) {
    myEnum2[myEnum2["FIRST"] = 0] = "FIRST";
    myEnum2[myEnum2["SECOND"] = 1] = "SECOND";
})(myEnum2 || (myEnum2 = {}));
function getEnumValue(enumVal) {
    switch (enumVal) {
        case myEnum2.FIRST: return "FIRST CASE";
        case myEnum2.SECOND: return "SECOND CASE";
    }
    // let returnVal: never = enumVal;
    // return returnVal;
}
let firstObj = { name: "obj name" };
let secondObj = { id: 1 };
let thirdObj = Object.assign(Object.assign({}, firstObj), secondObj);
console.log(`obj3 = ${JSON.stringify(thirdObj)}`);
let objPrec1 = { id: 1, name: "obj1" };
let objPrec2 = { id: 2, desc: "obj2 desc" };
let objPrec3 = Object.assign(Object.assign({}, objPrec1), objPrec2);
console.log(`objPrec3: ${JSON.stringify(objPrec3, null, 4)}`);
let firstArr = [1, 2, 3];
let secondArr = [3, 4, 5];
let thirdArr = [...firstArr, ...secondArr];
console.log(`thirdArr = ${thirdArr}`);
let tuple1;
tuple1 = ["test", true];
console.log(`tuple1[0] : ${tuple1[0]}`);
console.log(`tuple1[0] : ${tuple1[0]}`);
let [tupStr, tupBool] = tuple1;
let tupleOpt;
tupleOpt = ["test", true];
tupleOpt = ["test"];
console.log(`tupOpt[0] = ${tupleOpt[0]}`);
console.log(`tupOpt[1] = ${tupleOpt[1]}`);
let tupleRest;
tupleRest = [1];
tupleRest = [1, "string"];
tupleRest = [1, "string1", "string2"];
let complexObj = {
    aNum: 1,
    bStr: "name",
    cBool: true,
};
let { aNum, bStr, cBool } = complexObj;
console.log(`aNum : ${aNum}`);
console.log(`bStr : ${bStr}`);
console.log(`cBool : ${cBool}`);
