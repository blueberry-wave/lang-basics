"use strict";
// 009-decorators CustomClasses
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassWithDecorFactory = exports.ClassWithEveryDecorator = exports.ClassWithMultiDecorators = exports.ClassWithSimpleDecorator = void 0;
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
    propertyDecorator
], ClassWithEveryDecorator.prototype, "id", void 0);
__decorate([
    methodDecorator
], ClassWithEveryDecorator.prototype, "print", null);
__decorate([
    __param(0, parameterDecorator)
], ClassWithEveryDecorator.prototype, "setId", null);
exports.ClassWithEveryDecorator = ClassWithEveryDecorator = __decorate([
    classDecorator
], ClassWithEveryDecorator);
let ClassWithDecorFactory = exports.ClassWithDecorFactory = class ClassWithDecorFactory {
};
exports.ClassWithDecorFactory = ClassWithDecorFactory = __decorate([
    decoratorFactory("testName")
], ClassWithDecorFactory);
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
