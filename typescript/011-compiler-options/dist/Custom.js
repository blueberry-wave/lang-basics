"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.NoImplicitThis = exports.WithPrintAndRun = exports.WithPrint = exports.BoundClass = exports.WithoutInit = void 0;
class WithoutInit {
}
exports.WithoutInit = WithoutInit;
class BoundClass {
    constructor() {
        this.name = "defaultNameVal";
    }
    printName(index, description) {
        Log(`this.name = ${this.name}`);
        Log(`index arg: ${index}`);
        Log(`description: ${description}`);
    }
}
exports.BoundClass = BoundClass;
class WithPrint {
    print() { }
}
exports.WithPrint = WithPrint;
class WithPrintAndRun extends WithPrint {
    run() { }
}
exports.WithPrintAndRun = WithPrintAndRun;
class NoImplicitThis {
    constructor() {
        this.id = 1;
    }
    printAftrWait() {
        let callback = function (_this) {
            Log(`this.id: ${_this.id}`);
        };
        setTimeout(callback, 1000, this);
    }
}
exports.NoImplicitThis = NoImplicitThis;
function Log(obj) {
    console.log(obj);
}
exports.Log = Log;
