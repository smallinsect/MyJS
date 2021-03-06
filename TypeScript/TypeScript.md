- JavaScript
- TypeScript



# TypeScript网址

https://www.w3cschool.cn/typescript/

# 安装解析ts的工具包

安装tsc执行

```
npm i -g typescript
```

## ts文件转换成js文件

```
tsc hello.ts
```

## 执行js文件

```
node hello.js
```

## 安装ts-node

```
npm i -g ts-node
```

## 直接执行ts文件

```
ts-node hello.ts
```

# 配置VSCode 的TypeScript环境



# VSCode - 断点调试配置

## 配置步骤

### 第一步：准备要调试的ts文件

新建a.ts文件，作为要调试的ts文件

```typescript
console.log("1 准备开始执行 for 循环");

for (let i: number = 0; i <= 3; i++) {
    console.log("...哇咔咔", i);
}

console.log("2 for 执行结束");
```

### 第二步：添加调试配置

1.打开调试窗口：点击左侧活动栏倒数第二个按钮（Debug）

2.生成默认配置：点击DEBUG后面的下拉框，选择添加配置

3.修改配置内容如下：

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "调试ts代码",
            // 作用：调试是加载ts-node包（在调试是直接运行ts代码）
            "runtimeArgs": ["-r", "ts-node/register"],
            "args": [
                "${workspaceFolder}/TypeScript/a.ts"
            ]
        }
    ]
}
```

### 第三步：安装调试用到的包

1.在当前目录中，打开终端窗口

2.在终端中输入一下命令

```powershell
# 注意：原来通过 -g（全局）安装的包，在调试时不生效，需要在当前目录中单独安装
# 调试TS代码，依赖这两个包
npm i ts-node typescript
```

### 第四步：开始调试



# 接口

## 对象方法的类型注解

问题：如何给对象中的方法，添加类型注解？

技巧：鼠标放在变量名称上，VSCode就会给出该变量的类型注解。

```typescript
let peron: {
	sayHi: () => void;
	sing: (name: string) => void;
	sum: (num1: number, num2: number) => number;
}
```

箭头（=>）左边小括号中的内容：表示方法的参数类型。

箭头（=>）右边的内容：表示方法的返回值类型。

方法类型注解的关键点：1 参数 2 返回值

# 接口

## 接口的使用

直接在对象名称后面写类型注解的坏处：1 代码结构不简洁 2 无法服用类型注解

接口：为对象的类型注解命名，并未你的代码建立契约来约束对象的结构

语法：

```typescript
// 创建一个接口
interface IUser {
    name: string;
    age: number;
    sayHi: () => void;
}
```



# 内置对象

## 概述

对象的两种来源：1 自己创建 2 其他人创建（编程语言自带或第三方）

# 数组对象

```typescript
let songs: string[] = ["小昆虫1", "小昆虫2", "小昆虫3"];

console.log(songs.length);

let cnt: number = songs.push("小昆虫4");

console.log(cnt);
console.log(songs);
// forEach
songs.forEach(function(item, index) {
    console.log(item, index);
});
```

## some方法

some方法：遍历数组，查找是否有一个满足条件的元素（如果有，就可以停止循环）。







































