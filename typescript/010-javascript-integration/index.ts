// 010-javascript-integration
Log("010-javascript-integration");

FirstNamespace.SecondNamespace.ThirdNamespace.log("test");

let myClassInstance = new MyModuleClass();

let myStaticClassInstance = new MyModuleStatic();

MyModuleStatic.id = 10;
MyModuleStatic.print();

class DerivedFromAbstract extends MyModuleAbstract {
  print() {}
}

let sortedStringArr: Array<string> = sort(["first", "sort"]);
let sortedNumberArr: Array<Number> = sort([1, 2, 3]);

type myNever = stringOrNumberOrBoolean<[string, number]>

type myString = inferFromPropertyType<{ id: string}>;
type myNumber = inferFromPropertyType<{ id: number}>;


function Log(obj: any){
  console.log(obj);
}