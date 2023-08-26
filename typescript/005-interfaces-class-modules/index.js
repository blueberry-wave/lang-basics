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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ClassES6Private_id;
Object.defineProperty(exports, "__esModule", { value: true });
const Module1_1 = require("./modules/Module1");
const Module2_1 = __importStar(require("./modules/Module2"));
console.log('005-interfaces-classes-modules');
let idObject = {
    id: 2,
    name: "this is a name"
};
let optionalObj = {
    id: 1
};
let optionalObj2 = {
    id: 2,
    name: "optionalObj2"
};
let weakNoOverlap = {};
function printNameOrVal(obj) {
    if (`id` in obj) {
        console.log(`obj.name : ${obj.name}`);
    }
    if (`descr` in obj) {
        console.log(`obj.val: ${obj.val}`);
    }
}
printNameOrVal({
    id: 1,
    name: "this is a name"
});
printNameOrVal({
    descr: "descriptipn",
    val: 2
});
function getProperty(key, val) {
    console.log(`${key} = ${val[key]}`);
}
;
getProperty("id", {
    id: 1,
    name: "firstName"
});
getProperty("name", {
    id: 2,
    name: "secondName"
});
getProperty("id", {
    id: 3,
    name: "thirdName"
});
class SimpleClass {
    print() {
        console.log(`SimpleClass.print() called.`);
        console.log(`SimpleClass.id = ${this.id}`);
    }
}
let mySimpleClass = new SimpleClass();
mySimpleClass.id = 2020;
mySimpleClass.print();
class ClassA {
    print() {
        console.log(`ClassA.print() called1)`);
    }
}
class ClassB {
    print() {
        console.log(`ClassB.print() called.`);
    }
}
function printClass(a) {
    a.print();
}
class ClassC {
    print() {
        console.log(`CLassC.print() called`);
    }
}
class ClassD {
    print() {
        console.log(`ClassD.print() called.`);
    }
}
let classA = new ClassA();
let classB = new ClassB();
let classC = new ClassC();
let classD = new ClassD();
printClass(classA);
printClass(classB);
printClass(classC);
printClass(classD);
class ClassWithConstructor {
    constructor(_id) {
        this.id = _id;
    }
}
let classWithConstructor = new ClassWithConstructor(10);
console.log(`ClassWithConstructor = ${JSON.stringify(classWithConstructor)}`);
class ClassWithPublicProperty {
}
let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;
class ClassWithPrivateProperty {
    constructor(_id) {
        this.id = _id;
    }
}
class ClassES6Private {
    constructor(_id) {
        _ClassES6Private_id.set(this, void 0);
        __classPrivateFieldSet(this, _ClassES6Private_id, _id, "f");
    }
}
_ClassES6Private_id = new WeakMap();
class ClassWithCtorMods {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let myClassMod = new ClassWithCtorMods(1, "classWithCtorMods_1");
console.log(`myClassMod.id = ${myClassMod.id}`);
// console.log(`myClassMod.id = ${myClassMod.name}`);
class ClassWithReadOnly {
    constructor(_name) {
        this.name = _name;
    }
    setNameVal(_name) {
        // this.name = _name;
    }
}
class ClassWithAccessors {
    constructor() {
        this._id = 0;
    }
    get id() {
        console.log(`get id property`);
        return this._id;
    }
    set id(newId) {
        console.log(`set id property`);
        this._id = newId;
    }
}
let classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 10;
console.log(`classWithAccessors.id = ${classWithAccessors.id}`);
class StaticFunction {
    static printTwo() {
        console.log(`2`);
    }
}
StaticFunction.printTwo();
class StaticProperty {
    updateCount() {
        StaticProperty.count++;
    }
}
StaticProperty.count = 0;
let firstStaticProperty = new StaticProperty();
let secondStaticProperty = new StaticProperty();
firstStaticProperty.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);
secondStaticProperty.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);
var FirstNameSpace;
(function (FirstNameSpace) {
    class NameSpaceClass {
    }
    FirstNameSpace.NameSpaceClass = NameSpaceClass;
    class NotExportedClass {
    }
})(FirstNameSpace || (FirstNameSpace = {}));
let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
class IdNameClass {
    constructor() {
        this.id = 0;
        this.name = "nameString";
    }
}
let multipleObject = {
    id: 1,
    name: "myName",
    description: "myDescription"
};
class BaseClass {
    constructor() {
        this.id = 0;
    }
}
class DerivedFromBaseClass extends BaseClass {
    constructor() {
        super(...arguments);
        this.name = "nameString";
    }
}
class MultipleInterfaces {
    constructor() {
        this.id = 0;
        this.name = "nameString";
    }
}
class BaseClassWithCtor {
    constructor(id) {
        this.id = id;
    }
}
class DerivedClassWithCtor extends BaseClassWithCtor {
    constructor(id, name) {
        super(id);
        this.name = name;
    }
}
class BaseClassWithFn {
    print(text) {
        console.log(`BaseClassWithFn.print() : ${text}`);
    }
}
class DerivedClassFnOverride extends BaseClassWithFn {
    print(text) {
        console.log(`DerivedClassFnOverride.print() : ${text}`);
    }
}
let derivedClassFnOverride = new DerivedClassFnOverride();
derivedClassFnOverride.print("test");
class DerivedClassFnCallthrough extends BaseClassWithFn {
    print(text) {
        super.print(`from DerivedClassFncallthrough: ${text}`);
    }
}
class BaseClassProtected {
    constructor(id) {
        this.name = "";
        this.id = id;
    }
}
class AccessProtected extends BaseClassProtected {
    constructor(id) {
        super(id);
        console.log(`base.id = ${this.id}`);
        // console.log(`base.name = ${this.name}`);
    }
}
let accessProtected = new AccessProtected(1);
// accessProtected.id = 1;
// accessProtected.name = "testName";
class EmployeeBase {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class OfficeWorker extends EmployeeBase {
    doWork() {
        console.log(`${this.name} is doing work`);
    }
}
class OfficeManager extends OfficeWorker {
    constructor() {
        super(...arguments);
        this.employees = [];
    }
    manageEmployees() {
        super.doWork();
        for (let employee of this.employees) {
            employee.doWork();
        }
    }
}
let typescriptBlogger = new OfficeWorker(1, "TSBlogger");
let rustBlogger = new OfficeWorker(2, "RustBlogger");
let blogManager = new OfficeManager(3, "Kody");
blogManager.employees.push(typescriptBlogger);
blogManager.employees.push(rustBlogger);
class A {
}
;
class BfromA extends A {
}
;
class CfromA extends A {
}
;
class DfromC extends CfromA {
}
;
console.log(`A is instance of A: ${new A() instanceof A}`);
console.log(`BfromA is instance of A: ${new BfromA() instanceof A}`);
console.log(`Bfrom A is instance of BfromA: ${new BfromA() instanceof BfromA}`);
console.log(`CfromA is instance of BfromA: ${new CfromA() instanceof BfromA}`);
console.log(`DfromC intance of CfromA: ${new DfromC() instanceof CfromA}`);
console.log(`DfromC instance of A: ${new DfromC() instanceof A}`);
class BaseInterfaceClass {
    constructor() {
        this.id = 0;
    }
    print() {
        console.log(`this.id = ${this.id}`);
    }
}
class ImplementsExt extends BaseInterfaceClass {
    setId(id) {
        this.id = id;
    }
}
let mod1 = new Module1_1.Module1();
mod1.print();
let mod2 = new Module2_1.Module2();
mod2.print();
let mod1_2 = new Module1_1.Module1_2();
let mod1_3 = new Module1_1.Module1_3();
let modDefaultAdd = (0, Module2_1.default)(1, 2);
