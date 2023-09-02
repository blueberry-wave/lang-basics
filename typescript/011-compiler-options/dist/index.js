"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Custom = __importStar(require("./Custom"));
const Custom_1 = require("./Custom");
// 011-compiler-options
(0, Custom_1.Log)("011-compiler-options");
// let a: number;
// let a: number = 2;
let a;
let b = a;
let myBoundClass = new Custom.BoundClass();
myBoundClass.printName(1, "testDescription");
myBoundClass.printName.call({ name: "overridden name" }, 1, "from .call");
// myBoundClass.printName.call(
//   { name: "overridden name property"},
//   "test",
//   "second .call"
// )
myBoundClass.printName.apply({ name: "overriden name" }, [1, "called with apply"]);
let boundThis = {
    name: `boundThis`
};
let boundPrintNameFunction = myBoundClass.printName.bind(boundThis, 1, "bind test");
boundPrintNameFunction();
// let numberOrString: number | string;
// let numberOnly: number = numberOrString;
function callBack1(fn) {
    fn("test");
}
function withNumberOnly(a) {
    (0, Custom_1.Log)(`a: ${a}`);
}
// callBack1(withNumberOnly);
function usePrint(fn) {
    let withPrint = new Custom.WithPrint();
    fn(withPrint);
}
function testNoParamType(val) { }
class TestAny {
}
function isLargeNumber(val) {
    if (val > 1000000)
        return true;
    return false;
}
(0, Custom_1.Log)(`isLargeNumber(1) : ${isLargeNumber(1)}`);
var SwitchExample;
(function (SwitchExample) {
    SwitchExample[SwitchExample["ONE"] = 0] = "ONE";
    SwitchExample[SwitchExample["TWO"] = 1] = "TWO";
})(SwitchExample || (SwitchExample = {}));
function testEnumSwitch(val) {
    let retVal = "";
    switch (val) {
        case SwitchExample.ONE:
            retVal = "one";
            break;
        case SwitchExample.TWO:
            retVal = "two";
    }
    return retVal;
}
let classInstance = new Custom.NoImplicitThis();
classInstance.printAftrWait();
