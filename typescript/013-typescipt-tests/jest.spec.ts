
test("013-typescript-tests", () => {
	expect(true).toBeTruthy();
})

describe("002 group of tests", ()=> {
	test("002-001 first test", ()=> {
		expect("string val").toEqual("string val");
	})

	it("002-002 second test", ()=> {
		expect("abc").not.toEqual("def");
	})

	// test.only("002-003 force test", ()=> {
	// 	expect("string val").toEqual("string val");
	// })

	// fit("002-004 forced test 2", ()=>{
	// 	expect("abc").not.toEqual("def");
	// })
})

// fdescribe("003 a group of forced tests", () => {
// 	test("001 test", ()=> {
// 		expect("string val").toEqual("string val");
// 	})

// 	it("002 test", ()=> {
// 		expect("abc").not.toEqual("def");
// 	})

// 	xit("second test", () => {
// 		expect("abc").not.toEqual("def");
// 	})
// })

describe("004 matchers", ()=> {
	test("should now match with toBe", ()=> {
		expect(1).not.toBe(2);
	})

	test("should not match with toBe", ()=> {
		let objA = { id: 1 };
		let objB = { id: 2 };
		expect(objA).not.toBe(objB);
	})

	test("will fail with toBe", ()=> {
		let objA = { id: 1};
		let objB = objA;
		expect(objA).toBe(objB);
	})

	it("should contain string", ()=> {
		expect("abcde").toContain("cde");
	})

	it("should contain with arr", ()=> {
		let objArr = [{ id: 1 }, { id: 2 }];

		expect(objArr).toContainEqual({ id: 2 });
	})
})

describe("005 throw error", () => {
	expect(()=>{throwsError()})
		.toThrowError( new Error("this is an error"));
})

class GlobalCounter {
	count: number = 0;
	increment(): void {
		this.count++;
	}
}

describe("006 test setup and teardown", ()=> {

	let globalCounter: GlobalCounter;

	beforeAll(()=>{
		globalCounter = new GlobalCounter();
	})

	beforeEach(()=> {
		globalCounter.count = 0;
	})

	afterEach(()=> {
		console.log(`globalCounter.count = ${globalCounter.count}`);
	})

	it("should increment", ()=> {
		globalCounter.increment();
		expect(globalCounter.count).toEqual(1);
	})

	it("should increment + 2", ()=> {
		globalCounter.increment();
		globalCounter.increment();
		expect(globalCounter.count).toEqual(2);		
	})
})

// data driven tests
describe("007 data driven tests", ()=> {
	
	[1, 2, 3, 4]
		.forEach((val: number) => {
		it(`${val} should be less than 5`, () => {
				expect(val).toBeLessThan(5);
		})
	})
	testUsing(
		[
			[undefined, false],
			[null, false],
			[" ", false],
			["  ", false],
			[" a ", true]
		],
		([val, isValid]: [string, boolean]) => {
			it(`${val} hasValueNoWhiteSpace ? ${isValid}`, 
			() => {
					isValid ?
						expect(hasValNoWhiteSpace(val)).toBeTruthy() :
						expect(hasValNoWhiteSpace(val)).toBeFalsy();
				}
			)
		}
	)
})


function testUsing<T> (values: T[], func: Function) {
	for (let val of values) {
		func.apply(Object, [val]);
	}
}

function hasValNoWhiteSpace(val: string): boolean {
	if (
		val &&
		val.length > 0 &&
		val.trim().length > 0
		)
		return true

	return false
}

// jest mocks
class MyCallbackClass {
	executeCallback(
		val: string,
		callbackFn: (val: string) => null
	) {
		console.log(`executeCallbak invoking callbackFn`);
		callbackFn(val);
	}
}

describe("008 mocking", ()=> {
	it("01-mockFunc", ()=> {
		let mockFunc = jest.fn();

		let myCallbackClass = new MyCallbackClass();

		myCallbackClass.executeCallback("test", mockFunc);

		expect(mockFunc).toHaveBeenCalled();
	})

	it("02-mockFun(arg)", ()=> {
		let mock = jest.fn();
		let myCallbackClass = new MyCallbackClass();

		myCallbackClass.executeCallback("arg1", mock);
		expect(mock).toHaveBeenCalledWith("arg1");
	})
})

// jest spies
class MySpiedClass {
	testFunction() {
		console.log(`testFunction() called`);
		this.testSpiedFunction();
	}

	testSpiedFunction() {
		console.log(`testSpiedFunction called`);
	}
}

class MyMockedClass {
	functionToBeMocked(): number {
		return 5;
	}
}

describe("009 jest spies", ()=> {
	it("01- spyOn function", () => {
		let mySpiedClass = new MySpiedClass();
		const testFunctionSpy = jest.spyOn(
			mySpiedClass, "testSpiedFunction"
		)

		mySpiedClass.testFunction();
		expect(testFunctionSpy).toHaveBeenCalled();
	})

	it("02 spyOn mocked function", ()=> {
		
		let mySpiedClass = new MySpiedClass();
		const testFunctionSpy = jest.spyOn(
			mySpiedClass, "testSpiedFunction"
		).mockImplementation(()=> {
			console.log("mockImplementation called");
		})

		mySpiedClass.testFunction();
		expect(testFunctionSpy).toHaveBeenCalled();
	})

	it("03 spies returning values", ()=> {
		let myMockedClass = new MyMockedClass();
		jest.spyOn(myMockedClass, 'functionToBeMocked')
			.mockImplementation((): number => {
			return 10;
		})

		expect(myMockedClass.functionToBeMocked()).toEqual(10);
	})
	
})

class MockAsync {
	executeSlowFunction(
		complete: (val: string) => void
	) {
		setTimeout(()=> {
			complete("completed");
		}, 1000)
	}
}

class AsyncWithPromise {
	delayedPromise(): Promise<string> {
		return new Promise<string>((
			resolve: (str: string) => void,
			reject: (str: string) => void
			) => {
				setTimeout(()=> {
					console.log(`2.returninc success`);
					resolve("success");
				}, 1000)
			}
		)
	}
}

describe("010 async tests", ()=> {
		let retVal !: string;

		beforeEach((done: jest.DoneCallback) => {
			let mockAsync = new MockAsync();

			console.log(`1. calling executeSlowFunction`);

			mockAsync.executeSlowFunction((val: string) => {
				console.log(`2. completed call`);
				retVal = val;
				done();
			})
		})

	it("should wait for callback to complete", ()=> {
		console.log(`3. checking retVal`);

		expect(retVal).toBe("completed");
	})

	it("should wait for promise to resolve", async () => {
		let asyncWithPromise = new AsyncWithPromise();

		console.log(`1. calling delayed Promse`);

		let retVal = await asyncWithPromise.delayedPromise();

		console.log(`3. after await`);

		expect(retVal).toEqual("success");
	})
})


function throwsError() {
	throw new Error("this is an error");
}
