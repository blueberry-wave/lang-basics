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
Object.defineProperty(exports, "__esModule", { value: true });
// decorators
const CustomClasses = __importStar(require("./CustomClasses"));
require("reflect-metadata");
Log(`009-decorators`);
let simpleDecorator1 = new CustomClasses.ClassWithSimpleDecorator();
let simpleDecorator2 = new CustomClasses.ClassWithSimpleDecorator();
Log(`simpleDecorator1 : ${JSON.stringify(simpleDecorator1)}`);
Log(`simpleDecorator2 : ${JSON.stringify(simpleDecorator2)}`);
let multiDec1 = new CustomClasses.ClassWithMultiDecorators();
Log(`multiDec1: ${JSON.stringify(multiDec1)}`);
let multiDec2 = new CustomClasses.ClassWithMultiDecorators();
Log(`multiDec2: ${JSON.stringify(multiDec2)}`);
let decorFactory = new CustomClasses.ClassWithDecorFactory();
let constrDecor = new CustomClasses.ClassWithConstructor(1);
Log(`constrDecor = ${constrDecor.testProperty}`);
let classDecInstance = new CustomClasses.ClassWithPropertyDec();
let staticClassPropDec = new CustomClasses.StaticClassWithPropertyDec();
let auditClass = new CustomClasses.ClassWithAuditDec();
auditClass.print("test1", "test2");
auditClass.printThis();
let paramClass = new CustomClasses.ClassWithParamDec();
paramClass.print("test1");
let classMetaData = new CustomClasses.ClassWithReflection();
classMetaData.print(1, 'a');
function Log(obj) {
    console.log(obj);
}
