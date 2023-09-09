export interface IConnection {
	server: string;
	port: number;
}

export interface IError {
	code: number;
	message: string;
}

export interface IDataRow {
	id: number;
	name: string;
	surname: string;
}
