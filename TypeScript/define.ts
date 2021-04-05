/*
 * @description: 
 * @version: 1.0.1
 * @Author: xuqiulin
 * @Date: 2021-03-31 11:44:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-31 12:08:06
 */


// a是undefined表示变量未定义，理解为变量不存在。
// a=null表示变量值为空值，理解为变量存在但没有值。

// 变量a旁边的问号?，表示该字段可有可无
// 如果变量a没有赋值，这个字段不存在
// 如果变量a赋值，则这个字段存在

// 变量a旁边没有问号，该字段必须赋值，不赋值，则报错该字段必须赋值。

// 动物
interface IAnimal {
    /**动物名字 */
    Name?: string;
    /**动物年龄 */
    Age?: number;
    /**动物腿数量 */
    Num: number;
}

let pig: IAnimal = {
    Name: "大肥猪",
    Age: 100,
    Num: 10,
};
console.log(pig);

let chicken: IAnimal = {
    Name: "大肥鸡",
    Num: 22,
};
console.log(chicken);
console.log(chicken.Age);

// let insect: IAnimal = {
//     Name: "小昆虫",
// };
// console.log(insect);
