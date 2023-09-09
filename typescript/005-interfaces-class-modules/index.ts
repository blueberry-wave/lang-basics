import { Module1, Module1_2, Module1_3 } from "./modules/Module1";
import DefaultAdd, { Module2 as Mod2 } from "./modules/Module2";
import * as Module2Exp from "./modules/Module1";

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

interface IBase {
  id: number;
}

interface IDerivedFromBase extends IBase {
  name: string;
}

class IdNameClass implements IDerivedFromBase {
  id: number = 0;
  name: string = "nameString";
}

interface IBaseStringOrNumber {
  id: string| number;
}

interface IDerivedFromBaseNumber extends IBaseStringOrNumber {
  id: number;
}

interface IMultiple extends IDerivedFromBase, IDerivedFromBaseNumber {
  description: string;
}

let multipleObject: IMultiple = {
  id: 1,
  name:"myName",
  description: "myDescription"
}

class BaseClass implements IBase {
  id: number = 0;
}

class DerivedFromBaseClass
  extends BaseClass
  implements IDerivedFromBase {
  name: string = "nameString";
}

interface IFirstInterface {
  name: string;
}

interface ISecondInterface {
  name: string;
}

class MultipleInterfaces implements
  IFirstInterface,
  ISecondInterface {
  id: number = 0;
  name: string = "nameString";  
}

class BaseClassWithCtor {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
}

class DerivedClassWithCtor extends BaseClassWithCtor {
  private name: string;
  constructor(id: number, name:string) {
    super(id);
    this.name = name;
  }
}

class BaseClassWithFn {
  print(text: string) {
    console.log(`BaseClassWithFn.print() : ${text}`);
  }
}

class DerivedClassFnOverride extends
  BaseClassWithFn {
  print(text: string){
    console.log(`DerivedClassFnOverride.print() : ${text}`);
  }
}

let derivedClassFnOverride = new DerivedClassFnOverride();
derivedClassFnOverride.print("test");

class DerivedClassFnCallthrough extends
  BaseClassWithFn {
  print(text:string) {
    super.print(`from DerivedClassFncallthrough: ${text}`);
  }
}

class BaseClassProtected {
  protected id: number; 
  private name: string = "";
  constructor(id:number ) {
    this.id = id;
  }
}

class AccessProtected extends
  BaseClassProtected {
  constructor(id:number) {
    super(id);
    console.log(`base.id = ${this.id}`);
    // console.log(`base.name = ${this.name}`);
  }
}

let accessProtected = new AccessProtected(1);
// accessProtected.id = 1;
// accessProtected.name = "testName";

abstract class EmployeeBase {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  abstract doWork(): void;
}

class OfficeWorker extends EmployeeBase {
  doWork() {
    console.log(`${this.name} is doing work`);
  }
}

class OfficeManager extends OfficeWorker {
  public employees: OfficeWorker[] = [];

  manageEmployees() {
    super.doWork();
    for (let employee of this.employees) {
      employee.doWork();
    }
  }
}

let typescriptBlogger = new OfficeWorker(1,"TSBlogger");
let rustBlogger = new OfficeWorker(2, "RustBlogger");
let blogManager = new OfficeManager(3, "Kody");

blogManager.employees.push(typescriptBlogger);
blogManager.employees.push(rustBlogger);

class A {};
class BfromA extends A {};
class CfromA extends A {};
class DfromC extends CfromA {};

console.log(`A is instance of A: ${new A() instanceof A}`);
console.log(`BfromA is instance of A: ${new BfromA() instanceof A}`);
console.log(`Bfrom A is instance of BfromA: ${new BfromA() instanceof BfromA}`);
console.log(`CfromA is instance of BfromA: ${new CfromA() instanceof BfromA}`);
console.log(`DfromC intance of CfromA: ${ new DfromC() instanceof CfromA}`);
console.log(`DfromC instance of A: ${new DfromC() instanceof A}`);

class BaseInterfaceClass {
  id: number = 0;
  print() {
    console.log(`this.id = ${this.id}`);
  }
}

interface IBaseInterfaceClassExt
  extends BaseInterfaceClass {
    setId(id: number): void;
  }

class ImplementsExt extends BaseInterfaceClass 
  implements IBaseInterfaceClassExt {
  setId(id: number): void {
    this.id = id;
  }
}

let mod1 = new Module1();
mod1.print();
let mod2 = new Mod2();
mod2.print();

let mod1_2 = new Module1_2();
let mod1_3 = new Module1_3();

let modDefaultAdd = DefaultAdd(1, 2);