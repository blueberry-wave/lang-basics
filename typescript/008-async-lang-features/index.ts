// 008-async-lange-features
import * as fs from "fs";
import * as MyClasses from "./Classes";

Log("008-async-lang-features");

callDelayedAndWait();

fs.promises.readFile("./test1.txt")
  .then((val) => {
    Log(`fs test1.txt read: ${val}`);
    return fs.promises.readFile("./test2.txt");
  }).then((val) => {
    console.log(`ps test2.txt read: ${val}`);
  }).catch((err) => {
    Log(`an error ocurred: ${err}`);
})


Log(`calling delayedPromise`);
delayedPromise().then(() => {
  Log(`delayed promise returned`);
})

Log(`E1. calling errorPromise()`);
errorPromise().then(() => {}).catch(() => {
  Log(`E3. caught an error`);
})

Log(`R1 calling promiseReturningString`);
promiseReturningString(false)
  .then((returnVal: string) => {
    Log(`R2. returnedVal: ${returnVal}`);
  }).catch((errCode: number) => {
    Log(`R3. this is not called`);
})

Log(`RT1 calling promiseReturningString with true`);
promiseReturningString(true)
  .then((returnVal: string) => Log(`This is not called`))
  .catch((errCode: number) => Log(`RT2. caught err# ${errCode}`));

complexPromise (
  {
    server: "test",
    port: 4200
  },
  "abcd"
).then((rows: MyClasses.IDataRow[])=> {
  // do something
}).catch((err) => {
  // handle err
})

callDelayedPromise2();

callErrPromise2();

getValuesFromPromsie();

async function getValuesFromPromsie() {
  let values = await promiseWithValues();

  for(let value of values) {
    Log(`value: ${value}`);
  }
}

function promiseWithValues(): Promise<string[]> {
  return new Promise<string[]> (
    (
      resolve: (values: string[]) => void,
      reject: (err: string ) => void
    ) => {
      resolve(["first", "second"]);
    }
  )
}

async function callErrPromise2() {
  try {
    Log(`AE1. calling errPromie()`);
    await errorPromise2();
  } catch (err) {
    Log(`AE3. await threw: ${err}`);
  }
}

function errorPromise2(): Promise<string> {
  return new Promise<string> (
    (
      resolve: (result: string) => void,
      reject: (err: string) => void
    ) => {
      setTimeout(() => {
        Log(`AE. calling reject()`);
        reject("promise rejected");
      },1000)
    }
  )
}

async function callDelayedPromise2() {
  Log(`AS1. before calling delayedPromise2`);
  await delayedPromise2();
  Log(`AS3. after calling delayedPromise`);
}

function delayedPromise2(): Promise<void> {
  return new Promise<void> (
    (
    resolve: ()=> void,
    reject: ()=> void
  ) => {
        setTimeout(()=> {
          Log(`AS2. calling resolve()`)
          resolve();
        }, 1000)
      })
}

function complexPromise (
  connection: MyClasses.IConnection,
  accessKey: string
) : Promise<MyClasses.IDataRow[]> {
  return new Promise<MyClasses.IDataRow[]> (
    (
      resolve: (results: MyClasses.IDataRow[]) => void,
      reject: (results: MyClasses.IError) => void
    ) => {
      // check connection
      // connect db
      // retr data
      // reject with err
      }
  );
}

function promiseReturningString(throwErr: boolean)
  : Promise<string> {
  return new Promise<string> (
    (
      resolve: (outVal: string) => void,
      reject: (errCode: number) => void
    ) => {
      if(throwErr) {
        reject(101);
      }
      resolve(`resolve with message`);
    }
  )
}

function errorPromise(): Promise<void> {
  return new Promise<void> (
    ( resolve: () => void, reject: () => void) => {
      Log(`E2. calling reject()`);
      reject();
    }
  )
}

function delayedPromise(): Promise<void> {
  return new Promise<void> (
    (
      resolve: () => void,
      reject: () => void
    ) => {
      function afterTimeout() {
        resolve();
      }
      setTimeout(afterTimeout, 1000);
    }
  )
}

function delayedResponsePromise(): Promise<void> {
  return new Promise<void>(fnDelayedPromise);
}

function fnDelayedPromise(
  resolve: () => void,
  reject: () => void
  ) {
  function afterTimeout() {
    resolve();
  }
  setTimeout(afterTimeout, 1000);
}

function callDelayedAndWait() {
  function afterWait() {
    Log(`A6. afterWait()`);
  }
  Log(`A1. calling delayedResponsewithCallback`);
  delayedResponseWithCallback(afterWait);
  Log(`A4. after calling dealyedResponseWithCallback`);
}

function delayedResponseWithCallback(callback: () => void ) {
  function executeAfterTimeout() {
    Log(`A5. executeAfterTimeout()`);
    callback();
  }

  Log(`A2. calling setTimeout`);
  setTimeout(executeAfterTimeout,  1000);
  Log(`A3, after calling setTimeout`);
}

function Log(obj: any) {
  console.log(obj);
}

