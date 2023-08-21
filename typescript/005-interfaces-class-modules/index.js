"use strict";
console.log('005-interfaces-classes-modules');
let idObject = {
    id: 2,
    name: "this is a name"
};
let optionalObj = {
    id: 1
};
let optionalObj2 = {
    id: 2,
    name: "optionalObj2"
};
let weakNoOverlap = {};
function printNameOrVal(obj) {
    if (`id` in obj) {
        console.log(`obj.name : ${obj.name}`);
    }
    if (`descr` in obj) {
        console.log(`obj.val: ${obj.val}`);
    }
}
printNameOrVal({
    id: 1,
    name: "this is a name"
});
printNameOrVal({
    descr: "descriptipn",
    val: 2
});
function getProperty(key, val) {
    console.log(`${key} = ${val[key]}`);
}
;
getProperty("id", {
    id: 1,
    name: "firstName"
});
getProperty("name", {
    id: 2,
    name: "secondName"
});
getProperty("id", {
    id: 3,
    name: "thirdName"
});
