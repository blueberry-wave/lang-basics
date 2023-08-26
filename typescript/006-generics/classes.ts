
export namespace CustomClasses {
	
	export class Concatenator<T extends Array<string> |Array<number>> {
	  public concatenateArray(items: T): string {
	    let returnString = "";

	    for(let i = 0; i < items.length; i++) {
	      returnString += i > 0 ? "," : "";
	      returnString = items[i].toString();
	}

	    return returnString;
	  }
	}

	export interface IPrintIdd {
		id: number;
		print(): void;
	}

	export interface IPrintName {
		name: string;
		print(): void;
	}

	export interface IPrint {
		print(): void;
	}

	export interface ILogInterface<T extends IPrint> {
		logToConsole(iPrintObj: T): void;
	}

	export class LogClass<T extends IPrint>
		implements ILogInterface<T> {
		logToConsole(iPrintObj: T): void {
        iPrintObj.print();
    }
	}

	class ClassA {}
	class ClassB {}

	function createClassInstance<T>
	(arg1: { new(): T}): T {
		return new arg1();
	}
}