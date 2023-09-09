// generics
import  { CustomClasses } from "./classes";

console.log("006-generics");


printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(()=> {});
printGeneric({id: 1});
printGeneric<string>("test");
// printGeneric<string>(1);

usingTwoTypes<number, string> (1, "test");
usingTwoTypes(1, "test");
usingTwoTypes<boolean, boolean>(true, false);
usingTwoTypes("first", "second");

let concator = new CustomClasses.Concatenator();
let concatRes = concator.concatenateArray([
  "first",
  "second",
  "third"
])
console.log(`concatRes = ${concatRes}`);

concatRes = concator.concatenateArray([
  1000,
  2000,
  3000
])
console.log(`concatRes = ${concatRes}`);

// concatRes = concator.concatenateArray([
//   true,
//   false,
//   true
// ])

let obj1 = {
  id: 1,
  val: 100,
  print() {console.log(`${this.id}`)}
}
printProperty(obj1, "id" );
printProperty(obj1, "val" );
// printProperty(obj1, "value" );
printProperty(obj1, "id" );
printProperty(obj1, "print");

let printObj: CustomClasses.IPrint = {
  print() {
    console.log(`printObject.print() called`);
  }
}

let logClass = new CustomClasses.LogClass();
logClass.logToConsole(printObj);


function printGeneric<T>(val: T) {
  console.log(`typeof T is : ${typeof val}`);
  console.log(`val is: ${val}`);
}

function usingTwoTypes<A, B>(a: A, b: B){
  
}

function useT<T extends CustomClasses.IPrintIdd | CustomClasses.IPrintName>(item: T)
  : void {
  item.print();
  // item.id = 1;
  // item.name = "test";
}

function printProperty<T, K extends keyof T> (object: T, key: K) {
  let propertyVal = object[key];
  //@ts-ignore
  console.log(`object[${key}] = ${propertyVal}`);
}
