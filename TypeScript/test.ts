/*
 * @description: 
 * @version: 
 * @Author: 
 * @Date: 2021-03-19 11:34:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-30 19:59:10
 */

// let operItem = {id: 1, num: 100};
// console.log(operItem);

function cloneAll(obj: Object): any {
    if (!obj) return obj;

    if (typeof obj === 'string' || typeof obj === 'number') {
        return obj;
    }

    let o = (obj.constructor === Array) ? [] : {};
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (!obj[i]) { o[i] = obj[i]; continue; }
            o[i] = (typeof obj[i] === "object") ? cloneAll(obj[i]) : obj[i];
        }
    }
    return o;
}

function cloneObj(obj: Object): any {
    return cloneAll(obj);
}


let patch: {[key: number]:number} = {};
patch[1] = 11;
patch[2] = 22;
patch[3] = 33;

console.log(patch);
delete patch[2];
console.log(patch);

let arr1: number[] = [];
for (let i: number = 0; i < 10; i++) {
    arr1.push(i);
}
// let arr2: number[] = arr1;
let arr2: number[] = cloneObj(arr1);
for (let i: number = 10; i < 20; i++) {
    arr2.push(i);
}
console.log(arr1);
console.log(arr2);

console.log(Math.max(1, 2));


for (let item of arr1) {
    console.log(typeof item);
}
for (let item in arr1) {
    console.log(typeof item);
}