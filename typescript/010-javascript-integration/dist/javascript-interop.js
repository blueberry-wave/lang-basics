"use strict";
var MyEs6Class = /** @class */ (function () {
    function MyEs6Class(id) {
        this._id = id;
    }
    Object.defineProperty(MyEs6Class.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return MyEs6Class;
}());
