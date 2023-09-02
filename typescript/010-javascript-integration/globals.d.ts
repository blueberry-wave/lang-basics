declare module ErrorHelper {
	function containsErrors(response: IResponse): boolean;
	function trace(message: IResponse | string): void;
}

interface IResponse {
	responseText: IFailureMessage
}

interface IFailureMessage {
	failure: boolean | string;
	errorMessage?: string;
}

declare function trace(arg: string | number | boolean);
declare function trace(arg: { id: number; name: string });

declare module FirstNamespace {
	module SecondNamespace {
		module ThirdNamespace {
			function log(msg: stirng);
		}
	}
}

declare class MyModuleClass {
	public print(): void;
}

declare class MyModuleStatic {
	static print(): void;
	static id: number;
}

declare abstract class MyModuleAbstract {
	abstract print(): void
}

declare function sort<T extends number | string> (input: Array<T>): Array<T> {}

declare type stringOrNumberOrBoolean<T> = 
	T extends string ? string:
	T extends number ? number :
	T extends boolean ? boolean : never;


declare type inferFromPropertyType<T> = 
	T extends  { id: infer U } ? U : never;

