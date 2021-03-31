/*
 * @description: 
 * @version: 1.0.1
 * @Author: xuqiulin
 * @Date: 2021-03-19 11:52:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-19 11:54:57
 */

interface OperItem {
    // 道具的基本操作数据结构
    id          : number;
    pos         ?: number[];
    storageId   ?: number;
    bid         ?: number;
    ext         ?: any[];
    num         ?: number;
}

let operItem = {id: 1, num: 100};
console.log(operItem);

let operItems:OperItem[] = [operItem];
console.log(operItems)