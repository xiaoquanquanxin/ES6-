"use strict";

{
    var a = 1;
}
//相当于
(function () {
    var a = 1;
})();

//so
var arr = [];

var _loop = function _loop(i) {
    arr[i] = function () {
        console.log(i);
    };
};

for (var i = 0; i < 3; i++) {
    _loop(i);
}
console.log(arr);
//相当于
(function () {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        (function (a) {
            arr[a] = function () {
                console.log(a);
            };
        })(i);
    }
    console.log(arr);
    console.log(arr[1]());
})();

//不存在变量声明提升
//使用let声明变量时，只要变量在还没有声明完成前使用，就会报错,产生暂时性死区.
//对一个没有被let声明的变量使用typeof操作符,反而不会报错

//应该避免在块级作用域内声明函数。[考虑到环境导致的行为差异太大]
//如果确实需要，也应该写成函数表达式，而不是函数声明语句。
if (1) {
    var f = function f() {};
}

//let 总结
//不会声明提升
//不能重复声明
//存在暂时死区
//有块级作用域

//const 总结
//必须第一时间赋值
//不能再次赋值

//const本质
//const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
//对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
//const指向一个地址,这个地址保存一个指针,这个指针的指向是固定的地址,被指向的数据结构却不能控制