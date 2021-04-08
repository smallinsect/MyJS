/*
 * @description: 
 * @version: 1.0.1
 * @Author: xuqiulin
 * @Date: 2021-04-06 15:14:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-06 15:21:58
 */

let myjson:{[key: string]: string} = {'1': 'aaa', '2': 'bbb', '3': 'ccc', '4': 'ddd', '5':'eee'};

console.log(myjson);

let myjson2:{[key: string]: string} = {'1': '1', '3': '1'};
console.log('----------------------------');
for (let key in myjson) {
    if (myjson2[key]) {
        delete myjson[key];
    }
}
console.log(myjson);
