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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// 008-async-lange-features
const fs = __importStar(require("fs"));
Log("008-async-lang-features");
callDelayedAndWait();
fs.promises.readFile("./test1.txt")
    .then((val) => {
    Log(`fs test1.txt read: ${val}`);
    return fs.promises.readFile("./test2.txt");
}).then((val) => {
    console.log(`ps test2.txt read: ${val}`);
}).catch((err) => {
    Log(`an error ocurred: ${err}`);
});
Log(`calling delayedPromise`);
delayedPromise().then(() => {
    Log(`delayed promise returned`);
});
Log(`E1. calling errorPromise()`);
errorPromise().then(() => { }).catch(() => {
    Log(`E3. caught an error`);
});
Log(`R1 calling promiseReturningString`);
promiseReturningString(false)
    .then((returnVal) => {
    Log(`R2. returnedVal: ${returnVal}`);
}).catch((errCode) => {
    Log(`R3. this is not called`);
});
Log(`RT1 calling promiseReturningString with true`);
promiseReturningString(true)
    .then((returnVal) => Log(`This is not called`))
    .catch((errCode) => Log(`RT2. caught err# ${errCode}`));
complexPromise({
    server: "test",
    port: 4200
}, "abcd").then((rows) => {
    // do something
}).catch((err) => {
    // handle err
});
callDelayedPromise2();
callErrPromise2();
getValuesFromPromsie();
function getValuesFromPromsie() {
    return __awaiter(this, void 0, void 0, function* () {
        let values = yield promiseWithValues();
        for (let value of values) {
            Log(`value: ${value}`);
        }
    });
}
function promiseWithValues() {
    return new Promise((resolve, reject) => {
        resolve(["first", "second"]);
    });
}
function callErrPromise2() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            Log(`AE1. calling errPromie()`);
            yield errorPromise2();
        }
        catch (err) {
            Log(`AE3. await threw: ${err}`);
        }
    });
}
function errorPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Log(`AE. calling reject()`);
            reject("promise rejected");
        }, 1000);
    });
}
function callDelayedPromise2() {
    return __awaiter(this, void 0, void 0, function* () {
        Log(`AS1. before calling delayedPromise2`);
        yield delayedPromise2();
        Log(`AS3. after calling delayedPromise`);
    });
}
function delayedPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Log(`AS2. calling resolve()`);
            resolve();
        }, 1000);
    });
}
function complexPromise(connection, accessKey) {
    return new Promise((resolve, reject) => {
        // check connection
        // connect db
        // retr data
        // reject with err
    });
}
function promiseReturningString(throwErr) {
    return new Promise((resolve, reject) => {
        if (throwErr) {
            reject(101);
        }
        resolve(`resolve with message`);
    });
}
function errorPromise() {
    return new Promise((resolve, reject) => {
        Log(`E2. calling reject()`);
        reject();
    });
}
function delayedPromise() {
    return new Promise((resolve, reject) => {
        function afterTimeout() {
            resolve();
        }
        setTimeout(afterTimeout, 1000);
    });
}
function delayedResponsePromise() {
    return new Promise(fnDelayedPromise);
}
function fnDelayedPromise(resolve, reject) {
    function afterTimeout() {
        resolve();
    }
    setTimeout(afterTimeout, 1000);
}
function callDelayedAndWait() {
    function afterWait() {
        Log(`A6. afterWait()`);
    }
    Log(`A1. calling delayedResponsewithCallback`);
    delayedResponseWithCallback(afterWait);
    Log(`A4. after calling dealyedResponseWithCallback`);
}
function delayedResponseWithCallback(callback) {
    function executeAfterTimeout() {
        Log(`A5. executeAfterTimeout()`);
        callback();
    }
    Log(`A2. calling setTimeout`);
    setTimeout(executeAfterTimeout, 1000);
    Log(`A3, after calling setTimeout`);
}
function Log(obj) {
    console.log(obj);
}
