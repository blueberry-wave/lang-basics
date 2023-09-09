

export class GlobalLogger {
	public static logGlobalsToConsole() {
		for (let email of CONTACT_EMAIL_ARRAY) {
			Log(email);
		}
	}
}

window.onload = () => {
	GlobalLogger.logGlobalsToConsole();
}

function Log(obj: any) {
	console.log(obj);
}

declare const CONTACT_EMAIL_ARRAY: string[];
