// decorators
import * as CustomClasses from "./CustomClasses";

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

function Log(obj: any) {
  console.log(obj);
}