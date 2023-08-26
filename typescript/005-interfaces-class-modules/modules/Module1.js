"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module1_3 = exports.Module1_2 = exports.Module1 = void 0;
function myFunc() {
    console.log("from myModule.ts myFunc: hello!");
}
exports.default = myFunc;
class Module1 {
    print() {
        localPrint(`Module1.print() called`);
    }
}
exports.Module1 = Module1;
class Module1_2 {
}
exports.Module1_2 = Module1_2;
class Module1_3 {
}
exports.Module1_3 = Module1_3;
function localPrint(text) {
    console.log(`localPrint: ${text}`);
}
