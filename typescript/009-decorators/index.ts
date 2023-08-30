// decorators
import * as CustomClasses from "./CustomClasses";
import "reflect-metadata";

Log(`009-decorators`)

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

Log(`constrDecor = ${(<any>constrDecor).testProperty}`);

let classDecInstance = new CustomClasses.ClassWithPropertyDec();

let staticClassPropDec = new CustomClasses.StaticClassWithPropertyDec();

let auditClass = new CustomClasses.ClassWithAuditDec();
auditClass.print("test1", "test2");
auditClass.printThis();

let paramClass = new CustomClasses.ClassWithParamDec();
paramClass.print("test1");

let classMetaData = new CustomClasses.ClassWithReflection();
classMetaData.print(1,'a');

function Log(obj: any) {
  console.log(obj);
}