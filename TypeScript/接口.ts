/*
 * @Author: xuqiulin
 * @Date: 2021-03-21 19:23:37
 * @LastEditTime: 2021-03-21 19:27:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MyJS\TypeScript\接口.ts
 */

// 创建一个接口
interface IUser {
    name: string;
    age: number;
    sayHi: () => void;
}

// 使用接口
let p3: IUser = {
    name: "小昆虫",
    age: 6666,
    sayHi: function() {
        console.log(this.name, this.age);
    }
};

let p4: IUser = {
    name: "大昆虫",
    age: 77777,
    sayHi: function() {
        console.log(this.name, this.age);
    }
};


p3.sayHi();
p4.sayHi();
