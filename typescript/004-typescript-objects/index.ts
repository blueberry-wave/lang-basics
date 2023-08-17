console.log("004-typescript-objects");

var objectA = {
  nestedProperty: {
    name: "nestedProperty name"
  }
}

function printNestedObj(obj:any) {
  if (obj != undefined
    && obj.nestedProperty != undefined
    && obj.nestedProperty.name) {
    console.log(`obj.nestedProperty.name = ${obj.nestedProperty.name}`);
  } else {
    console.log(`name not found or undefined`);
  }
}

function printNestedObjChain(obj: any) {
  if (obj?.nestedProperty?.name) {
    console.log(`obj.nestedProperty.name = ${obj.nestedProperty.name}`);
  } else {
    console.log(`name not found or undefined`);
  }
}

printNestedObjChain(undefined);
printNestedObjChain({
  aProperty: "another property"
});
printNestedObjChain({
  nestedProperty: {
    name: null
  }
});
printNestedObjChain({
  nestedProperty: {
    name: "nestedPropertyName"
  }
});

function nullishCheck(a: number | undefined | null) {
  console.log(`a : ${a ?? 'undefined or null'}`);
}

nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);

function testNullOperands(a: number, b: number | null | undefined) {
  let addResult = a + (b ?? 0);
  console.log(addResult);
}

console.log("aValue = "  + aValue!);
var aValue = 1;

let structObj: object = {
  name : "myObject",
  properties: {
    id: 1,
    type: "AnObject"
  }
}

function printObjectType(a: object) {
  console.log(`a: ${JSON.stringify(a)}`);
}

printObjectType(structObj);
// printObjectType("this is a string");

let a: any = "test";
let aNumber: number = 2;
aNumber = a;

let u: unknown = "an unknown";
u = 1;
let  aNumber2: number;
// aNumber2 = u;
aNumber2 = <number> u;

function alwaysThrows(): never {
  throw new Error("this will always throw");
  // return -1;
}

enum myEnum2 {
  FIRST,
  SECOND
}

function getEnumValue (enumVal: myEnum2) :string {
  switch (enumVal) {
    case myEnum2.FIRST: return "FIRST CASE";
    case myEnum2.SECOND: return "SECOND CASE";
  }
  // let returnVal: never = enumVal;
  // return returnVal;
}

let firstObj: object = { name: "obj name" };
let secondObj: object = { id: 1};
let thirdObj: object = { ...firstObj, ...secondObj };

console.log(`obj3 = ${JSON.stringify(thirdObj)}`);

let objPrec1: object = { id: 1, name: "obj1" };
let objPrec2: object = { id: 2, desc: "obj2 desc" };
let objPrec3: object = { ...objPrec1, ...objPrec2 };

console.log(`objPrec3: ${JSON.stringify(objPrec3, null, 4)}`);

let firstArr = [ 1, 2, 3];
let secondArr = [ 3, 4, 5];
let thirdArr = [ ...firstArr, ...secondArr ];

console.log(`thirdArr = ${thirdArr}`);

let tuple1: [string, boolean];
tuple1  = ["test", true];

console.log(`tuple1[0] : ${tuple1[0]}`);
console.log(`tuple1[0] : ${tuple1[0]}`);

let [tupStr, tupBool] = tuple1;

let tupleOpt: [string, boolean?];
tupleOpt= ["test", true];
tupleOpt = ["test"];

console.log(`tupOpt[0] = ${tupleOpt[0]}`);
console.log(`tupOpt[1] = ${tupleOpt[1]}`);

let tupleRest: [number, ...string[]];
tupleRest = [1];
tupleRest = [1, "string"];
tupleRest = [1, "string1", "string2"];

let complexObj = {
  aNum: 1,
  bStr: "name",
  cBool: true,
};

let {aNum, bStr, cBool } = complexObj;

console.log(`aNum : ${aNum}`);
console.log(`bStr : ${bStr}`);
console.log(`cBool : ${cBool}`);

