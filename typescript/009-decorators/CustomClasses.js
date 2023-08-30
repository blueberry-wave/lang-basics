"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassWithReflection = exports.ClassWithMetaData = exports.ClassWithParamDec = exports.ClassWithAuditDec = exports.ClassWithMethodDec = exports.StaticClassWithPropertyDec = exports.ClassWithPropertyDec = exports.ClassWithConstructor = exports.ClassWithDecorFactory = exports.ClassWithEveryDecorator = exports.ClassWithMultiDecorators = exports.ClassWithSimpleDecorator = void 0;
// 009-decorators CustomClasses
require("reflect-metadata");
let ClassWithSimpleDecorator = exports.ClassWithSimpleDecorator = class ClassWithSimpleDecorator {
};
exports.ClassWithSimpleDecorator = ClassWithSimpleDecorator = __decorate([
    simpleDecorator
], ClassWithSimpleDecorator);
let ClassWithMultiDecorators = exports.ClassWithMultiDecorators = class ClassWithMultiDecorators {
};
exports.ClassWithMultiDecorators = ClassWithMultiDecorators = __decorate([
    simpleDecorator,
    secondDecorator
], ClassWithMultiDecorators);
let ClassWithEveryDecorator = exports.ClassWithEveryDecorator = class ClassWithEveryDecorator {
    constructor() {
        this.id = 1;
    }
    print() { }
    setId(id) { }
};
__decorate([
    propertyDecorator,
    __metadata("design:type", Number)
], ClassWithEveryDecorator.prototype, "id", void 0);
__decorate([
    methodDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClassWithEveryDecorator.prototype, "print", null);
__decorate([
    __param(0, parameterDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClassWithEveryDecorator.prototype, "setId", null);
exports.ClassWithEveryDecorator = ClassWithEveryDecorator = __decorate([
    classDecorator
], ClassWithEveryDecorator);
let ClassWithDecorFactory = exports.ClassWithDecorFactory = class ClassWithDecorFactory {
};
exports.ClassWithDecorFactory = ClassWithDecorFactory = __decorate([
    decoratorFactory("testName")
], ClassWithDecorFactory);
let ClassWithConstructor = exports.ClassWithConstructor = class ClassWithConstructor {
    constructor(id) { }
};
exports.ClassWithConstructor = ClassWithConstructor = __decorate([
    classConstructorDec,
    __metadata("design:paramtypes", [Number])
], ClassWithConstructor);
class ClassWithPropertyDec {
}
exports.ClassWithPropertyDec = ClassWithPropertyDec;
__decorate([
    propertyDec,
    __metadata("design:type", Object)
], ClassWithPropertyDec.prototype, "nameProperty", void 0);
class StaticClassWithPropertyDec {
}
exports.StaticClassWithPropertyDec = StaticClassWithPropertyDec;
__decorate([
    propertyDec,
    __metadata("design:type", String)
], StaticClassWithPropertyDec, "staticProperty", void 0);
class ClassWithMethodDec {
    print(output) {
        Log(`ClassWithMethodDec.print:(${output} called)`);
    }
}
exports.ClassWithMethodDec = ClassWithMethodDec;
__decorate([
    methodDec,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClassWithMethodDec.prototype, "print", null);
class ClassWithAuditDec {
    print(arg1, arg2) {
        Log(`3. Class MethodDec.print (${arg1}, ${arg2}) called`);
    }
    printThis() {
        Log(this);
    }
}
exports.ClassWithAuditDec = ClassWithAuditDec;
__decorate([
    auditLogDec,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ClassWithAuditDec.prototype, "print", null);
class ClassWithParamDec {
    print(val) {
    }
}
exports.ClassWithParamDec = ClassWithParamDec;
__decorate([
    __param(0, parameterDec),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClassWithParamDec.prototype, "print", null);
class ClassWithMetaData {
    print(id, name) { }
}
exports.ClassWithMetaData = ClassWithMetaData;
__decorate([
    __param(0, metadataParamDec),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], ClassWithMetaData.prototype, "print", null);
class ClassWithReflection {
    print(id, name) {
        return 101;
    }
}
exports.ClassWithReflection = ClassWithReflection;
__decorate([
    __param(0, reflectParameterDec),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Number)
], ClassWithReflection.prototype, "print", null);
function reflectParameterDec(target, methodName, parameterIndex) {
    let designType = Reflect.getMetadata("design:type", target, methodName);
    let designParamTypes = Reflect.getMetadata("design:paramtypes", target, methodName);
    Log(`designType: ${designType}`);
    Log(`paramTypes: ${designParamTypes}`);
    for (let paramType of designParamTypes) {
        Log(`paramtype: ${paramType.name}`);
    }
    let designRetType = Reflect.getMetadata("design:returntype", target, methodName);
    Log(`returnTypes: ${designRetType}`);
}
function metadataParamDec(target, methodName, parameterIndex) { }
function parameterDec(target, methodName, parameterIndex) {
    Log(`target: ${target}`);
    Log(`methodName: ${methodName}`);
    Log(`parameterIndex: ${parameterIndex}`);
}
function auditLogDec(target, methodName, descriptor) {
    let ogFunc = target[methodName];
    let auditFunc = function () {
        Log(`1.auditLogDec: override of ${methodName} called`);
        for (let i = 0; i < arguments.length; i++) {
            Log(`2. arg: ${i} = ${arguments[i]}`);
        }
        ogFunc.apply(this, arguments);
    };
    target[methodName] = auditFunc;
    return target;
}
function methodDec(target, methodName, descriptor) {
    Log(`target: ${target}`);
    Log(`methodName: ${methodName}`);
    Log(`descriptor: ${JSON.stringify(descriptor)}`);
    Log(`target[methodName]: ${target[methodName]}`);
}
function propertyDec(target, propertyName) {
    if (typeof (target) === 'function') {
        Log(`class Name: ${target.name}`);
    }
    else {
        Log(`className: ${target.constructor.name}`);
    }
    Log(`propertyName: ${propertyName}`);
}
function classConstructorDec(constructor) {
    Log(`constructor: ${constructor}`);
    constructor.prototype.testProperty = "testProperty_val";
}
function decoratorFactory(name) {
    return (constructor) => {
        Log(`decorator function called with: ${name}`);
    };
}
function classDecorator(constructor) { }
function propertyDecorator(target, propertyKey) { }
function methodDecorator(target, methodName, descriptor) { }
function parameterDecorator(target, methodName, parameterIndex) { }
function secondDecorator(constructor) {
    Log(`secondDecorator Called`);
}
function simpleDecorator(constructor) {
    Log(`simpleDecorator called`);
}
function Log(obj) {
    console.log(obj);
}
