"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// generics
const classes_1 = require("./classes");
console.log("006-generics");
printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(() => { });
printGeneric({ id: 1 });
printGeneric("test");
// printGeneric<string>(1);
usingTwoTypes(1, "test");
usingTwoTypes(1, "test");
usingTwoTypes(true, false);
usingTwoTypes("first", "second");
let concator = new classes_1.CustomClasses.Concatenator();
let concatRes = concator.concatenateArray([
    "first",
    "second",
    "third"
]);
console.log(`concatRes = ${concatRes}`);
concatRes = concator.concatenateArray([
    1000,
    2000,
    3000
]);
console.log(`concatRes = ${concatRes}`);
// concatRes = concator.concatenateArray([
//   true,
//   false,
//   true
// ])
let obj1 = {
    id: 1,
    val: 100,
    print() { console.log(`${this.id}`); }
};
printProperty(obj1, "id");
printProperty(obj1, "val");
// printProperty(obj1, "value" );
printProperty(obj1, "id");
printProperty(obj1, "print");
function printGeneric(val) {
    console.log(`typeof T is : ${typeof val}`);
    console.log(`val is: ${val}`);
}
function usingTwoTypes(a, b) {
}
function useT(item) {
    item.print();
    // item.id = 1;
    // item.name = "test";
}
function printProperty(object, key) {
    let propertyVal = object[key];
    //@ts-ignore
    console.log(`object[${key}] = ${propertyVal}`);
}
