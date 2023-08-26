// adv-type-inference
import * as MyClasses from "./MyClasses";

console.log("adv-type inference");

let ab: MyClasses.IAbRequired = {
	a: 1,
	b: "test"
}

let optAB: MyClasses.WeakInterface<MyClasses.IAbRequired> = {}
let readAB: MyClasses.myReadOnly = {
	a: 0,
	b: "B"
}

// readAB.b = "test";

let pickAbObject: MyClasses.PickAb = {
	a: 1,
	b: "test"
}

let recordedCdVar: MyClasses.RecordedCd = {
	c: 1,
	d: 1
}

logNumberOrString<number>(1);
logNumberOrString<string>("test");
// logNumberOrString<boolean>(true);

logNumberOrString<boolean>("boolean does not extend number");

let keyA = getTupleStringAbc<MyClasses.IA>([1]);
console.log(`keyA = ${keyA}`);

let keyAb = getTupleStringAbc<MyClasses.IAb>([1, "test"]);
console.log(`keyAb = ${keyAb}`);

let keyAbc = getTupleStringAbc<MyClasses.IAbc>([1, "test", true]);
console.log(`keyAbc = ${keyAbc}`);

compareVals(new Date(), new Date());
compareVals(1 , new Date());
compareVals(1, 2);
compareVals("test", new Date());
compareVals("test", 1);
compareVals("test", "test");

testInferFromPropertyType<{ id: string }>("test");
testInferFromPropertyType<{ id: number }>(22);

testInferFromFnParam<(a: number) => void>(1);
testInferFromFnParam<(a: string) => void>("1");
testInferFromFnParam<(a: boolean) => void>(false);

testInferredFromReturnType<(a: string) => number>(1);
testInferredFromReturnType<(a: string) => boolean>(false);
testInferredFromReturnType<(a: string) => string>("0");

testingInferredFromArray<string[]>("test");
testingInferredFromArray<number[]>(1);
testingInferredFromArray<boolean[]>(false);

let boolVal: MyClasses.ExcludeStringAndNumber = true;
// let strVal: MyClasses.ExcludeStringAndNumber = "A";
// let numVal: MyClasses.ExcludeStringAndNumber = 1;

let strVal: MyClasses.StringOrNumber = "test";

let numVal: MyClasses.NotNullOrUndef = 1;

function logNumberOrString<T>(input: MyClasses.NumberOrString<T>) {
	console.log(`logNumberOrString: ${input}`);
}

function getTupleStringAbc<T>
	(tupleValue: MyClasses.abc_ab_a<T>): string {
	let [...tupleDestruct] = tupleValue;
	let returnStr = "|";

	for (let val of tupleDestruct) {
		returnStr += `${val}`;
	}

	return returnStr;
}

function compareVals
	<T extends string | number | Date | boolean>
	(input: T, compareTo: MyClasses.dateOrNumberOrString<T>) {
	console.log(`input ${input} compareTo: ${compareTo}`);
}

function testInferFromPropertyType<T>
	(arg: MyClasses.inferFromPropertyType<T>) {}

function testInferFromFnParam<T>(
	arg: MyClasses.inferredFromFnParam<T>
) {}

function testInferredFromReturnType<T> (
	arg: MyClasses.inferredFromReturnType<T>
) {}

function testingInferredFromArray<T>
	(args: MyClasses.inferredTypeFromArray<T>) {}
