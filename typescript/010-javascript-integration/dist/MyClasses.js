"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalLogger = void 0;
var GlobalLogger = /** @class */ (function () {
    function GlobalLogger() {
    }
    GlobalLogger.logGlobalsToConsole = function () {
        for (var _i = 0, CONTACT_EMAIL_ARRAY_1 = CONTACT_EMAIL_ARRAY; _i < CONTACT_EMAIL_ARRAY_1.length; _i++) {
            var email = CONTACT_EMAIL_ARRAY_1[_i];
            Log(email);
        }
    };
    return GlobalLogger;
}());
exports.GlobalLogger = GlobalLogger;
window.onload = function () {
    GlobalLogger.logGlobalsToConsole();
};
function Log(obj) {
    console.log(obj);
}
