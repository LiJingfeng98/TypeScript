// ES5
// function hello(name:string='李明'):string{
//   return 'Hello ' + name;
// }
// console.log(hello());
// ES6
// let hello = (name: string): string => `Hello ${name}`;
// console.log(hello('韩梅梅'));
var obj = { a: 1, b: 1 };
// function add(obj) {
//   return obj.a + obj.b;
// }
var add = function (_a) {
    var a = _a.a, b = _a.b;
    return a + b;
};
console.log(add(obj));
