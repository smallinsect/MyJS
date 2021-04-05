/*
 * @description: 测试for循环
 * @version: 1.0.1
 * @Author: xuqiulin
 * @Date: 2021-03-31 10:22:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-31 11:13:33
 */


let arr: string[] = ["小昆虫1", "小昆虫2", "小昆虫3"];
// 遍历数组值
console.log("遍历数组值=========================");
for (let item of arr) {
    console.log(item);
}
// 遍历数组索引
console.log("遍历数组索引=========================");
for (let item in arr) {
    console.log(item);
}
// 遍历数组索引和值
console.log("遍历数组索引和值=========================");
for (let item in arr) {
    console.log(item, arr[item]);
}