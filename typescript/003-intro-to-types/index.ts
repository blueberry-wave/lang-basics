
console.log("003-intro-to-types");

let myBool : boolean = true;
let myNum : number = 1234;
let myString : string = "string";
let myStrArr: string[] = [];

myStrArr = ["first", "second", "third"];

let inferredString = "string";
let inferredInt = 1;
let inferredStrArr = ["first", "second"];
let inferredObj = {
  name: "Saad",
  age: 26
}

function calculate(a:number, b: number, c:number) {
  return (a * b) + c;
}

var calcVal = calculate(1,2,3)
console.log(`calculate() = ${calcVal}`);

let anyObj: any = "";

anyObj = {
  name: "Saad",
  age: 26
}

let anyObj2 = <any> {
  name: "Saad",
  age: 26
}

anyObj = null;

const constVal = "this should not be changed";
// constVal = "updated";

function printObject(obj: string | number) {
  console.log(`obj = ${obj}`);
}

printObject(1);
printObject("string value");


function addWithTypeGuard(
  arg1: string | number,
  arg2: string | number
) {
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    console.log("arg 1 is of type string");
    return arg1 + arg2;
  }

    console.log("one or both of arg1 and arg2 is a string and so will be treated as a string");
  return arg1.toString() + arg2.toString();

}

console.log(` 1 + 2 = ${addWithTypeGuard(1,2)}`);
console.log(` "1" + "2" = ${addWithTypeGuard("1","2")}`);
console.log(` 1 + "2" = ${addWithTypeGuard(1,"2")}`);