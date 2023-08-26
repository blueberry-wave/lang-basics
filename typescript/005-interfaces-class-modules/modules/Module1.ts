
export default function myFunc () {
	console.log("from myModule.ts myFunc: hello!");
}

export class Module1 {
	print(): void {
		localPrint(`Module1.print() called`);
	}
}

export class Module1_2 {}
export class Module1_3 {}

function localPrint(text: string){
	console.log(`localPrint: ${text}`);
}

