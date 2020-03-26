var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        return this.name + "\u5411\u4F60\u95EE\u597D";
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, major) {
        var _this = _super.call(this, name) || this;
        _this.major = major;
        return _this;
    }
    Student.prototype.studentGreet = function () {
        return this.major + "\u7CFB\u7684" + this.name + "\u5411\u4F60\u95EE\u597D";
    };
    return Student;
}(Person));
// let xiaoming = new Person('小明');
// console.log(xiaoming.greet());
var xiaoming = new Student('小明', '哲学');
// console.log(xiaoming.name);
// console.log(xiaoming.major);
console.log(xiaoming.studentGreet());
