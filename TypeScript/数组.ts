/*
 * @Author: your name
 * @Date: 2021-03-21 21:01:12
 * @LastEditTime: 2021-04-02 16:58:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MyJS\TypeScript\数组.ts
 */

let songs: string[] = ["小昆虫1", "小昆虫2", "小昆虫3"];

console.log(songs.length);

let cnt: number = songs.push("小昆虫4");

console.log(cnt);
console.log(songs);

songs.forEach(function(item, index) {
    console.log(item, index);
});

console.log("==========some方法============");

songs.some(function(item) {
    console.log(item);
    if (item == "小昆虫2") {
        return true;
    }
    return false;
})
