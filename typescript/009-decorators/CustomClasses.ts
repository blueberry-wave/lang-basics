// 009-decorators CustomClasses

@simpleDecorator
export class ClassWithSimpleDecorator {}

@simpleDecorator
@secondDecorator
export class ClassWithMultiDecorators {}

@classDecorator
export class ClassWithEveryDecorator {
	@propertyDecorator
	id: number = 1;

	@methodDecorator
	print() {}

	setId(@parameterDecorator id: number) {}
}

@decoratorFactory("testName")
export class ClassWithDecorFactory {}

function decoratorFactory(name: string) {
	return (constructor: Function) => {
		Log(`decorator function called with: ${name}`);
	}
}

function classDecorator(
	constructor: Function
) {}

function propertyDecorator (
	target: any,
	propertyKey: string
) {}

function methodDecorator(
	target: any,
	methodName: string,
	descriptor?: PropertyDescriptor
) {}

function parameterDecorator (
	target: any,
	methodName: string,
	parameterIndex: number
) {}

function secondDecorator(constructor: Function) {
	Log(`secondDecorator Called`);
}

function simpleDecorator(constructor: Function) {
	Log(`simpleDecorator called`);
}

function Log(obj: any) {
  console.log(obj);
}