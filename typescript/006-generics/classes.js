"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomClasses = void 0;
var CustomClasses;
(function (CustomClasses) {
    class Concatenator {
        concatenateArray(items) {
            let returnString = "";
            for (let i = 0; i < items.length; i++) {
                returnString += i > 0 ? "," : "";
                returnString = items[i].toString();
            }
            return returnString;
        }
    }
    CustomClasses.Concatenator = Concatenator;
    class LogClass {
        logToConsole(iPrintObj) {
            iPrintObj.print();
        }
    }
    CustomClasses.LogClass = LogClass;
})(CustomClasses || (exports.CustomClasses = CustomClasses = {}));
