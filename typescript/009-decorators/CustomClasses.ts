// 009-decorators CustomClasses
import "reflect-metadata";

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

@classConstructorDec
export class ClassWithConstructor {
	constructor(id: number) {}
}

export class ClassWithPropertyDec {
	@propertyDec
	nameProperty: string | undefined;
}

export class StaticClassWithPropertyDec {
	@propertyDec
	static staticProperty: string;
}

export class ClassWithMethodDec {
	@methodDec
	print(output: string) {
		Log(`ClassWithMethodDec.print:(${output} called)`);
	}
}

export class ClassWithAuditDec {
	@auditLogDec
	print(arg1: string, arg2: string) {
		Log(`3. Class MethodDec.print (${arg1}, ${arg2}) called`);
	}
	printThis(){
		Log(this);
	}
}

export class ClassWithParamDec {
	print(@parameterDec val: string) {
		
	}
}

export class ClassWithMetaData {
	print(
		@metadataParamDec id: number,
		name: string
	) {}
}

export class ClassWithReflection{
	print(
		@reflectParameterDec id: number,
		name: string
	): number {
		return 101;
	}
}

function reflectParameterDec(
	target: any,
	methodName:string,
	parameterIndex: number
) {
	let designType = Reflect.getMetadata("design:type", target, methodName);
	let designParamTypes = Reflect.getMetadata("design:paramtypes", target, methodName);

	Log(`designType: ${designType}`);
	Log(`paramTypes: ${designParamTypes}`);

	for (let paramType of designParamTypes) {
		Log(`paramtype: ${paramType.name}`);
	}

	let designRetType = Reflect.getMetadata(
		"design:returntype",
		target,
		methodName
	)
	Log(`returnTypes: ${designRetType}`);
}

function metadataParamDec (
	target: any,
	methodName: string,
	parameterIndex: number
) {}

function parameterDec (
	target: any,
	methodName: string,
	parameterIndex: number
) {
	Log(`target: ${target}`);
	Log(`methodName: ${methodName}`);
	Log(`parameterIndex: ${parameterIndex}`);
}

function auditLogDec(
	target: any,
	methodName: string,
	descriptor?: PropertyDescriptor
) {
	let ogFunc = target[methodName];
	let auditFunc = function (this: any) {
		Log(`1.auditLogDec: override of ${methodName} called`)
		for (let i = 0 ; i < arguments.length; i ++ ) {
			Log(`2. arg: ${i} = ${arguments[i]}`);
		}
		ogFunc.apply(this , arguments);
	}
	target[methodName] = auditFunc;
	return target;
}

function methodDec (
	target: any,
	methodName: string,
	descriptor?: PropertyDescriptor
) {
	Log(`target: ${target}`);
	Log(`methodName: ${methodName}`);
	Log(`descriptor: ${JSON.stringify(descriptor)}`);
	Log(`target[methodName]: ${target[methodName]}`);
}

function propertyDec(target: any, propertyName: string) {
	if(typeof (target) === 'function') {
		Log(`class Name: ${target.name}`);
	} else {
		Log(`className: ${target.constructor.name}`);
	}
  Log(`propertyName: ${propertyName}`);
}

function classConstructorDec(constructor: Function) {
	Log(`constructor: ${constructor}`);
	constructor.prototype.testProperty = "testProperty_val";
}

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