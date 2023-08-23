"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ClassES6Private_id;
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
// let notExported = new FirstNameSpace.NotExportedClass();
