"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 010-javascript-integration
Log("010-javascript-integration");
FirstNamespace.SecondNamespace.ThirdNamespace.log("test");
var myClassInstance = new MyModuleClass();
var myStaticClassInstance = new MyModuleStatic();
MyModuleStatic.id = 10;
MyModuleStatic.print();
var DerivedFromAbstract = /** @class */ (function (_super) {
    __extends(DerivedFromAbstract, _super);
    function DerivedFromAbstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DerivedFromAbstract.prototype.print = function () { };
    return DerivedFromAbstract;
}(MyModuleAbstract));
var sortedStringArr = sort(["first", "sort"]);
var sortedNumberArr = sort([1, 2, 3]);
function Log(obj) {
    console.log(obj);
}
