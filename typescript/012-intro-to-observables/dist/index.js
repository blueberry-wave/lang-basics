"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// intro to observables
const rxjs_1 = require("rxjs");
const underscore_1 = __importDefault(require("underscore"));
Log("012-intro-to-observables");
const emitter = (0, rxjs_1.of)(1, 2, 3, 4);
Log("subscribe to emitter called");
emitter.subscribe((val) => {
    Log(`val: ${val}`);
});
const modulus = emitter.pipe((0, rxjs_1.map)((val) => {
    Log(`received: ${val}`);
    return val % 2;
}));
modulus.subscribe((val) => {
    Log(`modulus: ${val}`);
});
const stringMap = emitter.pipe((0, rxjs_1.map)((val) => val * 2), (0, rxjs_1.map)((val) => `str_${val}`));
stringMap.subscribe((val) => {
    Log(`stringMap emitted: ${val}`);
});
const emitOneTwo = (0, rxjs_1.of)(1, 2);
const swallowedVals = emitOneTwo.pipe(
// map((val: number) => {
// Log(`swallowing ${val}`);
// })
(0, rxjs_1.map)((val) => {
    if (val < 2)
        return null;
    return val;
}));
swallowedVals.subscribe((val) => {
    Log(`subscriber received val: ${val}`);
});
const srcInterval = (0, rxjs_1.interval)(1000);
const fiveNums = srcInterval.pipe((0, rxjs_1.take)(5), (0, rxjs_1.map)((val) => {
    Log(`map received: ${val}`);
    return `string_${val}`;
}));
fiveNums.subscribe((val) => {
    Log(`${new Date().toLocaleDateString()} ${val}`);
});
const objEmit = (0, rxjs_1.of)({ id: { val: 1 } }, {}, { id: { val: 2 } });
const returnIdVal = objEmit.pipe((0, rxjs_1.map)((val) => {
    return val.id.val;
}));
// returnIdVal.subscribe((val: number) => {
//   Log(`received ${val}`);
// });
returnIdVal.subscribe((val) => {
    Log(`received ${val}`);
}, (err) => {
    Log(`error: ${err}`);
}, () => {
    Log(`completed`);
});
const returnIdVal2 = objEmit.pipe((0, rxjs_1.map)((val) => {
    return val.id.val;
}), (0, rxjs_1.catchError)((err) => {
    Log(`stream caught: ${err}`);
    return (0, rxjs_1.of)(null);
}));
Log("catchError implementation");
returnIdVal2.subscribe((val) => {
    Log(`received ${val}`);
}, (err) => {
    Log(`error: ${err}`);
}, () => {
    Log(`completed`);
});
const productList = (0, rxjs_1.from)([{ id: 1 }, { id: 2 }, { id: 3 }]);
function getProductName(id) {
    return (0, rxjs_1.of)({
        id: id,
        name: `Product_${id}`,
        description: `Description_${id}`
    });
}
productList.pipe((0, rxjs_1.map)((val) => {
    Log(`Product id: ${val.id}`);
    return getProductName(val.id);
})).subscribe((val) => {
    val.subscribe((val) => {
        Log(`product name: ${val.name}`);
        Log(`product desc: ${val.description}`);
    });
});
productList.pipe((0, rxjs_1.mergeMap)((val) => {
    Log(`Product id : ${val.id}`);
    return getProductName(val.id);
})).subscribe((val) => {
    Log(`product name: ${val.name}`);
    Log(`product desc: ${val.description}`);
});
const emitTreeTwoOne = (0, rxjs_1.of)(3, 2, 1);
const delayedEmit = emitTreeTwoOne.pipe((0, rxjs_1.mergeMap)((val) => {
    Log(`>> emit>> ${new Date().toLocaleTimeString()} value: ${val} delaying: ${1000 * val}ms`);
    return (0, rxjs_1.of)(val).pipe((0, rxjs_1.delay)(1000 * val));
}));
delayedEmit.subscribe(val => {
    Log(`<< receive << ${new Date().toLocaleTimeString()} received val: val`);
});
const concatDelayedEmit = emitTreeTwoOne.pipe((0, rxjs_1.concatMap)((val) => {
    Log(`>> emit >>
      ${new Date().toLocaleTimeString()}
      val: ${val}
      delay: ${1000 * val} ms`);
    return (0, rxjs_1.of)(val).pipe((0, rxjs_1.delay)(1000 * val));
}));
concatDelayedEmit.subscribe(val => {
    Log(`<< receive << ${new Date().toLocaleTimeString()} received val: ${val}`);
});
const onePerSecond = (0, rxjs_1.interval)(1000);
const threeNumbers = onePerSecond.pipe((0, rxjs_1.take)(3), (0, rxjs_1.map)((val) => {
    Log(`>> threeNumbers emitting: ${val}`);
    return val;
}), (0, rxjs_1.toArray)());
const twoStrings = onePerSecond.pipe((0, rxjs_1.take)(2), (0, rxjs_1.map)((val) => {
    Log(`>> twoStrings emitting: val_${val}`);
    return `val_${val}`;
}), (0, rxjs_1.toArray)());
(0, rxjs_1.forkJoin)([threeNumbers, twoStrings]).subscribe((values) => {
    Log(`<< threeNumbers returned: ${values[0]}`);
    Log(`<< twoStrings returned: ${values[1]}`);
});
// Observable Subject
Log(`Observable Subject`);
var EventKeys;
(function (EventKeys) {
    EventKeys["ALL"] = "all-events";
    EventKeys["SINGLE"] = "single-event";
})(EventKeys || (EventKeys = {}));
class BroadcastService {
    constructor() {
        this._eventBus = new rxjs_1.Subject();
    }
    on(key) {
        return this._eventBus.asObservable().pipe((0, rxjs_1.filter)(event => event.key === key || event.key === EventKeys.ALL), (0, rxjs_1.map)(event => event.data));
    }
    broadcast(key, data) {
        this._eventBus.next({ key, data });
    }
}
class Listener {
    constructor(broadCastService, eventKey, listenerName) {
        this.listenerName = listenerName;
        underscore_1.default.bindAll(this, "reactToEvent");
        this.eventSubscription = broadCastService.on(eventKey).subscribe(this.reactToEvent);
    }
    reactToEvent(event) {
        Log(`Listener [${this.listenerName}]
      received event: ${event}`);
    }
    unregister() {
        this.eventSubscription.unsubscribe();
    }
}
const broadCastService = new BroadcastService();
const listenOne = new Listener(broadCastService, EventKeys.ALL, "first");
const listenTwo = new Listener(broadCastService, EventKeys.SINGLE, "second");
broadCastService.broadcast(EventKeys.ALL, "ALL event broadcast");
broadCastService.broadcast(EventKeys.SINGLE, "ALL event broadcast");
listenOne.unregister();
broadCastService.broadcast(EventKeys.ALL, "final ALL event broadcast");
function Log(obj) {
    console.log(obj);
}
