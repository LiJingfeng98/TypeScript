interface PersonInterface {
  name: string; // 必填
  age?: number; // 可选

  greeting(): string; // 必填
}

/**
 * 学生
 */
class Student implements PersonInterface {
  name: string;
  score: number;

  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }

  greeting(): string {
    return `Yo, 我叫${this.name}~`
  }
}

/**
 * 老师
 */
class Teacher implements PersonInterface {
  name: string;
  age:number;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  greeting(): string {
    return `大家好，我是${this.name}老师。`
  }
}

let whh = new Student('王花花', 60);
let lsd = new Teacher('李拴蛋', 60);
console.log(whh.greeting());
console.log(lsd.greeting());
