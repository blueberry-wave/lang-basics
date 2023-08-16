
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
