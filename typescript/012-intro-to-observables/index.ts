// intro to observables
import { of, Observable, map, interval, take, catchError, from, mergeMap, delay, concatMap, toArray, forkJoin, Subject, filter, Subscription} from "rxjs";
import  _  from "underscore";

Log("012-intro-to-observables");

const emitter: Observable<number> = of(1, 2, 3, 4);

Log("subscribe to emitter called");

emitter.subscribe((val: number) => {
  Log(`val: ${val}`);
})

const modulus: Observable<number> = emitter.pipe(
  map ((val: number) => {
    Log(`received: ${val}`);
    return val % 2;
  })
)

modulus.subscribe((val: number) => {
  Log(`modulus: ${val}`);
})

const stringMap: Observable<string>= emitter.pipe(
  map((val: number)=> val * 2),
  map((val: number) => `str_${val}`)
)

stringMap.subscribe((val: string) => {
  Log(`stringMap emitted: ${val}`);
})

const emitOneTwo = of(1, 2);

const swallowedVals = emitOneTwo.pipe (
  // map((val: number) => {
    // Log(`swallowing ${val}`);
  // })
  map((val: number) => {
    if (val < 2) 
      return null;
    return val;
  })
)

swallowedVals.subscribe((val: number | null) => {
  Log(`subscriber received val: ${val}`);
})

const srcInterval = interval(1000);

const fiveNums = srcInterval.pipe(
  take(5),
  map((val: number) => {
    Log(`map received: ${val}`)
    return `string_${val}`;
  })
)

fiveNums.subscribe((val: string) =>{
  Log(`${new Date().toLocaleDateString()} ${val}`);
})

interface IVal {
  val: number;
}

interface INestedObj {
  id?: IVal
}

const objEmit: Observable<INestedObj> = of(
  {id: {val: 1}},
  {},
  {id: {val: 2}}
)

const returnIdVal = objEmit.pipe(
  map((val: INestedObj) => {
    return val.id!.val;
  })
);

// returnIdVal.subscribe((val: number) => {
//   Log(`received ${val}`);
// });

returnIdVal.subscribe(
  (val: number | null) =>{
    Log(`received ${val}`);
  },
  (err: unknown) => {
    Log(`error: ${err}`);
  },
  () => {
    Log(`completed`);
  }
)

const returnIdVal2 = objEmit.pipe(
  map((val: INestedObj) => {
    return val!.id!.val;
  }),
  catchError((err: unknown) => {
    Log(`stream caught: ${err}`);
    return of(null);
  })
)

Log("catchError implementation");

returnIdVal2.subscribe(
  (val: number | null) =>{
    Log(`received ${val}`);
  },
  (err: unknown) => {
    Log(`error: ${err}`);
  },
  () => {
    Log(`completed`);
  }
)

interface IProduct{
  id: number;
}

interface IProductInfo {
  name: string;
  description: string;
}

const productList: Observable<IProduct> = <Observable<IProduct>>from (
  [{id: 1}, {id: 2}, {id: 3}]
)

function getProductName(id: number):
  Observable<IProductInfo> {
    return of(
      {
        id : id,
        name: `Product_${id}`,
        description: `Description_${id}`
      }
    )
}

productList.pipe(
  map((val: IProduct) => {
    Log(`Product id: ${val.id}`);
    return getProductName(val.id);
  })
).subscribe( (val: Observable<IProductInfo>) => {
  val.subscribe((val: IProductInfo) => {
    Log(`product name: ${val.name}`);
    Log(`product desc: ${val.description}`);
  })
})

productList.pipe(
  mergeMap((val: IProduct): Observable<IProductInfo> => {
    Log(`Product id : ${val.id}`);
    return getProductName(val.id);
  })
).subscribe((val: IProductInfo) => {
  Log(`product name: ${val.name}`);
  Log(`product desc: ${val.description}`);
})

const emitTreeTwoOne = of(3, 2, 1);

const delayedEmit = emitTreeTwoOne.pipe(
  mergeMap((val: number) => {
    Log(`>> emit>> ${new Date().toLocaleTimeString()} value: ${val} delaying: ${1000 * val}ms`);
    return of(val).pipe(delay(1000 * val))
  })
)

delayedEmit.subscribe(val => {
  Log(`<< receive << ${new Date().toLocaleTimeString()} received val: val`);
})

const concatDelayedEmit = emitTreeTwoOne.pipe(
  concatMap((val: number) => {
    Log(`>> emit >>
      ${new Date().toLocaleTimeString()}
      val: ${val}
      delay: ${1000 * val} ms`);
    
    return of(val).pipe(delay(1000 * val));
  })
)

concatDelayedEmit.subscribe(val => {
  Log(`<< receive << ${new Date().toLocaleTimeString()} received val: ${val}`);
})

const onePerSecond = interval(1000);

const threeNumbers: Observable<number[]> = onePerSecond.pipe(
  take(3),
  map((val: number) => {
    Log(`>> threeNumbers emitting: ${val}`);
    return val;
  }),
  toArray()
)

const twoStrings: Observable<string[]> = onePerSecond.pipe(
  take(2),
  map((val: number) => {
    Log(`>> twoStrings emitting: val_${val}`);
    return `val_${val}`
  }),
  toArray()
)

forkJoin(
  [threeNumbers, twoStrings]
).subscribe((values) => {
  Log(`<< threeNumbers returned: ${values[0]}`);
  Log(`<< twoStrings returned: ${values[1]}`);
})

// Observable Subject
Log(`Observable Subject`);

enum EventKeys {
  ALL = "all-events",
  SINGLE = "single-event"
}

interface IBroadcastEvent {
  key: EventKeys;
  data: string;
}

class BroadcastService {
  private _eventBus = new Subject<IBroadcastEvent>();

  on(key: EventKeys): Observable<string> {
    return this._eventBus.asObservable().pipe(
      filter(event => event.key === key || event.key === EventKeys.ALL),
      map(event => event.data)
    )
  }

  broadcast(key: EventKeys, data: string) {
    this._eventBus.next({key, data});
  }
}

class Listener {
  private eventSubscription: Subscription;
  constructor(
    broadCastService: BroadcastService,
    eventKey: EventKeys,
    private listenerName: string
  ) {
    _.bindAll(this, "reactToEvent");
    this.eventSubscription = broadCastService.on(eventKey).subscribe(this.reactToEvent);
  }

  private reactToEvent(event: string) {
    Log(`Listener [${this.listenerName}]
      received event: ${event}`);
  }

  public unregister() {
    this.eventSubscription.unsubscribe();
  }
}

const broadCastService = new BroadcastService();

const listenOne = new Listener(
  broadCastService,
  EventKeys.ALL, "first"
)

const listenTwo = new Listener(
  broadCastService,
  EventKeys.SINGLE, "second"
)

broadCastService.broadcast(
  EventKeys.ALL, "ALL event broadcast");

broadCastService.broadcast(
  EventKeys.SINGLE, "ALL event broadcast");

listenOne.unregister();

broadCastService.broadcast(
  EventKeys.ALL, "final ALL event broadcast");


function Log(obj: any) {
  console.log(obj);
}