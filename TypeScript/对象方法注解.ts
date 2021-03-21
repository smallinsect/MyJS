/*
 * @Author: your name
 * @Date: 2021-03-21 19:13:45
 * @LastEditTime: 2021-03-21 19:17:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MyJS\TypeScript\对象方法注解.ts
 */

let p1: {
    sayHi: () => void;
}

p1 = {
    sayHi: function() {
        console.log("哇咔咔");
    }
};

p1.sayHi();

let p2: {
    sing: (name: string) => void;
};

p2 = {
    sing: function(name: string) {
        console.log(name);
    }
};

p2.sing("一闪一闪亮晶晶，漫天都是小猩猩。");