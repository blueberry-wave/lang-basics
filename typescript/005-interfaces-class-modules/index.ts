
console.log('005-interfaces-classes-modules');

interface IIdName {
  id: number;
  name: string;
}

let idObject: IIdName = {
  id: 2,
  name: "this is a name"
}

interface IOptional {
  id: number;
  name?: string
}

let optionalObj: IOptional = {
  id: 1
}

let optionalObj2: IOptional = {
  id: 2,
  name: "optionalObj2"
}

interface WeakType {
  id?: number;
  name?: string
}

let weakNoOverlap: WeakType = {}

interface myIdName {
  id: number;
  name: string;
}

interface IDescVal {
  descr: string;
  val: number;
}

function printNameOrVal (
  obj: myIdName | IDescVal
): void {
  if (`id` in obj) {
    console.log(`obj.name : ${obj.name}`);
  }

  if(`descr` in obj) {
    console.log(`obj.val: ${obj.val}`)
  }
}

printNameOrVal({
  id: 1,
  name:"this is a name"
});

printNameOrVal({
  descr: "descriptipn",
  val: 2
})

interface Person {
  id: number;
  name: string;
}

type PersonProPName = keyof Person;

function getProperty(key: PersonProPName,val: Person) {
  console.log(`${key} = ${val[key]}`);
};

getProperty(
  "id", 
  {
    id: 1,
    name: "firstName"
  })

getProperty(
  "name", 
  {
    id: 2,
    name: "secondName"
  })

getProperty(
  "id", 
  {
    id: 3,
    name: "thirdName"
  })

class SimpleClass {
  id: number | undefined;

  print(): void {
    console.log(`SimpleClass.print() called.`);
    console.log(`SimpleClass.id = ${this.id}`);
  }
}

let mySimpleClass = new SimpleClass();
mySimpleClass.id = 2020;
mySimpleClass.print();

class ClassA {
  print(): void {
    console.log(`ClassA.print() called1)`);
  }
}

class ClassB {
  print(): void {
    console.log(`ClassB.print() called.`);
  }
}

interface IPrint {
  print(): void;
}

function printClass(a: IPrint) {
  a.print();
}

class ClassC implements IPrint {
  print(): void {
    console.log(`CLassC.print() called`);
  }
}

class ClassD implements IPrint {
  print(): void {
    console.log(`ClassD.print() called.`);
  }
}

let classA = new ClassA();
let classB = new ClassB();
let classC = new ClassC();
let classD = new ClassD();

printClass(classA);
printClass(classB);
printClass(classC);
printClass(classD);

class ClassWithConstructor {
  id: number;

  constructor(_id: number) {
    this.id = _id;
  }
}

let classWithConstructor = new ClassWithConstructor(10);

console.log(`ClassWithConstructor = ${JSON.stringify(classWithConstructor)}`);

class ClassWithPublicProperty {
  public id: number | undefined;
}

let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;

class ClassWithPrivateProperty {
  private id: number;
  constructor(_id: number) {
    this.id = _id;
  }
}

class ClassES6Private {
  #id: number;
  constructor(_id: number) {
    this.#id = _id;
  }
}

class ClassWithCtorMods {
  constructor(public id: number, private name: string) {
  }
}

let myClassMod = new ClassWithCtorMods(1, "classWithCtorMods_1");
console.log(`myClassMod.id = ${myClassMod.id}`);
// console.log(`myClassMod.id = ${myClassMod.name}`);

class ClassWithReadOnly {
  readonly name: string;
  constructor(_name: string) {
    this.name = _name;
  }

  setNameVal(_name: string) {
    // this.name = _name;
  }
}

class ClassWithAccessors {
  private _id: number = 0;
  get id(): number {
    console.log(`get id property`);
    return this._id;
  }
  set id(newId: number) {
    console.log(`set id property`);
    this._id = newId;
  }
}

let classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 10;
console.log(`classWithAccessors.id = ${classWithAccessors.id}`);

class StaticFunction {
  static printTwo() {
    console.log(`2`);
  }
}

StaticFunction.printTwo();

class StaticProperty {
  static count = 0;
  updateCount() {
    StaticProperty.count ++;
  }
}

let firstStaticProperty = new StaticProperty();
let secondStaticProperty = new StaticProperty();

firstStaticProperty.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);

secondStaticProperty.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);

namespace FirstNameSpace {
  export class NameSpaceClass {}
  class NotExportedClass {}
}

let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
// let notExported = new FirstNameSpace.NotExportedClass();
