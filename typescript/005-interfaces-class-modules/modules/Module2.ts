import { Module1 } from "./Module1";

export class Module2 extends Module1 {};
export class Module2_2{}
export class Module2_3{}

export default function DefaultAdd(
	a: number,
	b: number
) {
	return a + b;
}