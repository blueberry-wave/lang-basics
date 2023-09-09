import * as Custom from "./Custom";
import { Log } from "./Custom";

// 011-compiler-options
Log("011-compiler-options");

// let a: number;
// let a: number = 2;
let a: number | undefined;
let b = a;

let myBoundClass = new Custom.BoundClass();
myBoundClass.printName(1, "testDescription");
myBoundClass.printName.call(
  {name: "overridden name"},
  1,
  "from .call"
)

// myBoundClass.printName.call(
//   { name: "overridden name property"},
//   "test",
//   "second .call"
// )

myBoundClass.printName.apply(
  { name: "overriden name"},
  [1, "called with apply"]
)

let boundThis = {
  name: `boundThis`
}

let boundPrintNameFunction = myBoundClass.printName.bind(
  boundThis, 1, "bind test"
)

boundPrintNameFunction();

// let numberOrString: number | string;
// let numberOnly: number = numberOrString;


function callBack1(
  fn: (a: number | string) => void 
) {
  fn("test");
}

function withNumberOnly(a: number) {
  Log(`a: ${a}`);
}

// callBack1(withNumberOnly);

function usePrint (
  fn: (withPrint: Custom.WithPrint) => void
) {
  let withPrint = new Custom.WithPrint();
  fn(withPrint);
}

// usePrint((withRun: Custom.WithPrintAndRun) => {
//   withRun.run();
// })

declare function testImplicitAny(): void;

function testNoParamType(val: string) {}

class TestAny {
  id: any;
}

function isLargeNumber(val: number): boolean {
  if(val > 1_000_000)
    return true
  return false
}

Log(`isLargeNumber(1) : ${isLargeNumber(1)}`);

enum SwitchExample {
  ONE,
  TWO
}

function testEnumSwitch(val: SwitchExample):string {
  let retVal = "";
  switch (val) {
    case SwitchExample.ONE:
        retVal = "one";
        break;
    case SwitchExample.TWO:
        retVal = "two";
  }

  return retVal;
}

let classInstance = new Custom.NoImplicitThis();
classInstance.printAftrWait();