
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
