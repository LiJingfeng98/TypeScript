/**
 * 学生
 */
var Student = /** @class */ (function () {
    function Student(name, score) {
        this.name = name;
        this.score = score;
    }
    Student.prototype.greeting = function () {
        return "Yo, \u6211\u53EB" + this.name + "~";
    };
    return Student;
}());
/**
 * 老师
 */
var Teacher = /** @class */ (function () {
    function Teacher(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Teacher.prototype.greeting = function () {
        return "\u5927\u5BB6\u597D\uFF0C\u6211\u662F" + this.name + "\u8001\u5E08\u3002";
    };
    return Teacher;
}());
var whh = new Student('王花花', 60);
var lsd = new Teacher('李拴蛋', 60);
console.log(whh.greeting());
console.log(lsd.greeting());
