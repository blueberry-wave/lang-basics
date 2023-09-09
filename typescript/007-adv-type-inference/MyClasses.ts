
export interface IAbRequired {
	a: number;
	b: string;
}

export type WeakInterface<T> = {
	[K in keyof T]?: T[K]
}

// built in Partial
// export type Partial<T> = {
// 	[P in keyof T]?: T[P];
// };

export type myPartial = Partial<IAbRequired>;

// built in Readonly
// type Readonly<T> = {
// 	readonly [P in keyof T]: T[P];
// }
export type myReadOnly = Readonly<IAbRequired>; 

// export type PickAb = Pick<IAbc, "a" | "b" >
export type PickAb = Pick<IAbc, keyof IAb>

export type RecordedCd = Record<"c" | "d", number>;

export type NumberOrString<T> = T extends number ? number : string;

export interface IA {
	a: number;
}

export interface IAb {
	a: number;
	b: string;
}

export interface IAbc {
	a: number;
	b: string;
	c: boolean;
}

export type abc_ab_a<T> = 
	T extends IAbc ? [ number, string, boolean] :
	T extends IAb ? [number,string] :
	T extends IA ? [number] :
	never;

export type dateOrNumberOrString<T> = 
	T extends Date ? Date :
	T extends number ? Date | number :
	T extends string ? Date | number | string : 
	never;

export type inferFromPropertyType<T> = 
	T extends { id: infer U } ? U : never;

export type inferredFromFnParam<T> = 
	T extends (a: infer U) => void ? U: never;

export type inferredFromReturnType<T> = 
	T extends (a: string) => infer U ? U :never;

export type inferredTypeFromArray<T> = 
	T extends (infer U)[] ? U : never;

export type ExcludeStringAndNumber = Exclude<
	string | number | boolean,
  string | number> ;

export type StringOrNumber = Extract <
	string | boolean | never,
	string | number
>

export type NotNullOrUndef = NonNullable<number | undefined | null>;
