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
function cloneAll(obj) {
    if (!obj)
        return obj;
    if (typeof obj === 'string' || typeof obj === 'number') {
        return obj;
    }
    var o = (obj.constructor === Array) ? [] : {};
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (!obj[i]) {
                o[i] = obj[i];
                continue;
            }
            o[i] = (typeof obj[i] === "object") ? cloneAll(obj[i]) : obj[i];
        }
    }
    return o;
}
function cloneObj(obj) {
    return cloneAll(obj);
}
var patch = {};
patch[1] = 11;
patch[2] = 22;
patch[3] = 33;
console.log(patch);
delete patch[2];
console.log(patch);
var arr1 = [];
for (var i = 0; i < 10; i++) {
    arr1.push(i);
}
// let arr2: number[] = arr1;
var arr2 = cloneObj(arr1);
for (var i = 10; i < 20; i++) {
    arr2.push(i);
}
console.log(arr1);
console.log(arr2);
console.log(Math.max(1, 2));
for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
    var item = arr1_1[_i];
    console.log(typeof item);
}
for (var item in arr1) {
    console.log(typeof item);
}
