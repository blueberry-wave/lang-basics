"use strict";
// 010-javascript-integration
Log("010-javascript-integration");
FirstNamespace.SecondNamespace.ThirdNamespace.log("test");
let myClassInstance = new MyModuleClass();
let myStaticClassInstance = new MyModuleStatic();
MyModuleStatic.id = 10;
MyModuleStatic.print();
class DerivedFromAbstract extends MyModuleAbstract {
    print() { }
}
let sortedStringArr = sort(["first", "sort"]);
let sortedNumberArr = sort([1, 2, 3]);
function Log(obj) {
    console.log(obj);
}
