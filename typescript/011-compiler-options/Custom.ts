export class WithoutInit {
  a!: number;
  b!: number;

  // a: number;
  // b: number;

  // a: number = 1;
  // a: string = "test";
  
  // a: number | undefined;
  // b: number | undefined;
  
  // constructor(_a: number, _b: number) {
    // this.a = _a;
    // this.b = _b;
  // }
}

export class BoundClass {
  name: string = "defaultNameVal";

  printName(index: number, description: string) {
    Log(`this.name = ${this.name}`);
    Log(`index arg: ${index}`);
    Log(`description: ${description}`);
  }
}

export class WithPrint {
  print() {}
}

export class WithPrintAndRun extends WithPrint {
  run() {}
}

export class NoImplicitThis {
  id: number = 1;
  printAftrWait() {
    let callback = function (_this: NoImplicitThis) {
      Log(`this.id: ${_this.id}`);
    }
    setTimeout(callback, 1000, this);
  }
}

export function Log (obj: any) {
  console.log(obj);
}